'use client'

import { makeFavoriteAction, moveToTrashAction } from '@/actions/notes'
import React, { useState } from 'react'
import { FaEdit, FaHeart } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const OnSubmitButtons = ({ noteId, noteFav }: { noteId: string; noteFav: boolean }) => {
	const [isFavourite, setIsFavourite] = useState(noteFav)

	const handleFavNote = async () => {
		await setIsFavourite(!isFavourite)
		const favNote = await makeFavoriteAction(noteId, !isFavourite)
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
				<FaEdit className='mx-3 duration-200 hover:text-white hover:scale-110' />
			</button>
			<button onClick={handleFavNote}>
				<FaHeart className={isFavourite ? 'text-red-500 mx-3 opacity-50 hover:opacity-100 duration-200' : 'mx-3 duration-200 hover:text-red-500 hover:scale-110 '} />
			</button>
			<button onClick={handleMoveToTrash}>
				<MdDelete className='mx-3 duration-200 hover:text-white hover:scale-110' />
			</button>
		</div>
	)
}

export default OnSubmitButtons
