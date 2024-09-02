'use client'

import { makeFavoriteAction, moveToTrashAction } from '@/actions/notes'
import React, { useState } from 'react'
import { FaEdit, FaHeart } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const OnSubmitButtons = ({ noteId, noteFav }: { noteId: string; noteFav: boolean }) => {
	const [isFavourite, setIsFavourite] = useState(noteFav)

	const handleFavNote = async () => {
		setIsFavourite(!isFavourite)
		const favNote = await makeFavoriteAction(noteId, isFavourite)
		console.log(favNote);
		return favNote
	}

	const handleEditNote = () => {
		console.log('Edit note')
	}

	const handleMoveToTrash = async () => {
		if (confirm('Are you sure you want to delete this note?')) {
			const trashNote = await moveToTrashAction(noteId)
			return trashNote
		}
	}

	return (
		<div className='flex duration-200'>
			<button onClick={handleEditNote}>
				<FaEdit className='mx-3 duration-200 hover:text-white' />
			</button>
			<button onClick={handleFavNote}>
				<FaHeart className={isFavourite ? 'text-red-500 mx-3' : 'mx-3 duration-200 hover:text-red-500 hover:opacity-75'} />
			</button>
			<button onClick={handleMoveToTrash}>
				<MdDelete className='mx-3 duration-200 hover:text-red-500 hover:opacity-75' />
			</button>
		</div>
	)
}

export default OnSubmitButtons
