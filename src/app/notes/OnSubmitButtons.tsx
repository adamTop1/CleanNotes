'use client'

import { makeFavoriteAction } from '@/actions/notes'
import React from 'react'
import { FaEdit, FaHeart } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const OnSubmitButtons = ({ noteId, noteFav }: { noteId: string; noteFav: boolean }) => {
	const handleFavNote = async () => {
		const favNote = await makeFavoriteAction(noteId, true)
		console.log(favNote)
	}

	const handleEditNote = () => {
		console.log('Edit note')
	}

	const handleDeleteNote = () => {
		console.log('Delete note')
	}

	return (
		<div className='flex duration-200'>
			<button onClick={handleEditNote}>
				<FaEdit className='mx-3 duration-200 hover:text-white' />
			</button>
			<button onClick={handleFavNote}>
				<FaHeart className={noteFav ? 'text-red-500 mx-3' : 'mx-3 duration-200 hover:text-red-500 hover:opacity-75'} />
			</button>
			<button onClick={handleDeleteNote}>
				<MdDelete className='mx-3 duration-200 hover:text-red-500 hover:opacity-75' />
			</button>
		</div>
	)
}

export default OnSubmitButtons
