'use client'

import { editNoteAction, makeFavoriteAction, moveToTrashAction } from '@/actions/notes'
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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogClose,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const OnSubmitButtons = ({
	noteId,
	noteFav,
	title,
	description,
}: {
	noteId: string
	noteFav: boolean
	title: string
	description: string
}) => {
	const [isFavourite, setIsFavourite] = useState(noteFav)
	const [editedTitle, setEditedTitle] = useState(title)
	const [editedDescription, setEditedDescription] = useState(description)

	const handleFavNote = async () => {
		await setIsFavourite(!isFavourite)
		const favNote = await makeFavoriteAction(noteId, !isFavourite)
		return favNote
	}

	const handleEditNote = async () => {
		await editNoteAction(noteId, editedTitle, editedDescription)
	}

	const handleMoveToTrash = async () => {
		await moveToTrashAction(noteId)
	}

	return (
		<div className='flex duration-200'>
			<Dialog>
				<DialogTrigger>
					<FaEdit className='mx-3 duration-200 hover:text-white hover:scale-110' />
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px] bg-zinc-800'>
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid items-center grid-cols-4 gap-4'>
							<Label htmlFor='title' className='text-right'>
								Title
							</Label>
							<Input
								id='title'
								value={editedTitle}
								className='col-span-3 bg-zinc-900'
								onChange={e => setEditedTitle(e.target.value)}
							/>
						</div>
						<div className='grid items-center grid-cols-4 gap-4'>
							<Label htmlFor='description' className='text-right'>
								Description
							</Label>
							<Textarea
								id='description'
								value={editedDescription}
								onChange={e => setEditedDescription(e.target.value)}
								className='col-span-3 bg-zinc-900'
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose onClick={handleEditNote} className='px-3 py-1 duration-200 border border-white rounded-lg hover:bg-zinc-900'>Save</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<button onClick={handleFavNote}>
				<FaHeart
					className={
						isFavourite
							? 'text-red-500 mx-3 opacity-50 hover:opacity-100 duration-200  hover:scale-110'
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
