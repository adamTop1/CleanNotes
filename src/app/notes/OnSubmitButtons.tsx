'use client'

import { makeFavoriteAction, moveToTrashAction } from '@/actions/notes'
import React, { useState } from 'react'
import { FaEdit, FaHeart } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

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
		await moveToTrashAction(noteId)
	}

	return (
		<div className='flex duration-200'>
			<button onClick={handleEditNote}>
				<FaEdit className='mx-3 duration-200 hover:text-white hover:scale-110' />
			</button>
			<button onClick={handleFavNote}>
				<FaHeart
					className={
						isFavourite
							? 'text-red-500 mx-3 opacity-50 hover:opacity-100 duration-200'
							: 'mx-3 duration-200 hover:text-red-500 hover:scale-110 '
					}
				/>
			</button>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<MdDelete className='mx-1 text-3xl duration-150 cursor-pointer hover:text-white hover:scale-110 ' />
				</AlertDialogTrigger>
				<AlertDialogContent className='bg-zinc-800'>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action will move your note to trash. You can restore it later.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className='duration-200 bg-zinc-800 hover:bg-zinc-900 hover:text-white'>
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							className='text-black duration-200 bg-white hover:bg-slate-200/85'
							onClick={handleMoveToTrash}>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}

export default OnSubmitButtons
