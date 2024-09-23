'use client'

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
import { deleteNoteAction, restoreNoteAction } from '@/actions/notes'
import { Button } from '@/components/ui/button'

const OnSubmitDelete = ({ noteId }: { noteId: string }) => {
	const deleteNote = async () => {
		await deleteNoteAction(noteId)
	}

	const restoreNote = async () => {
		const note = await restoreNoteAction(noteId)
		console.log(note)
	}

	return (
		<>
			<div className='flex gap-4 '>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant='destructive'>Delete</Button>
					</AlertDialogTrigger>
					<AlertDialogContent className='bg-zinc-800'>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your note.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel className='duration-200 bg-zinc-800 hover:bg-zinc-900 hover:text-white'>
								Cancel
							</AlertDialogCancel>
							<AlertDialogAction
								className='text-black duration-200 bg-white hover:bg-slate-200/85'
								onClick={deleteNote}>
								Delete
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant='secondary'>Restore</Button>
					</AlertDialogTrigger>
					<AlertDialogContent className='bg-zinc-800'>
						<AlertDialogHeader>
							<AlertDialogTitle>Do you want to restore your note from trash?</AlertDialogTitle>
							<AlertDialogDescription>
								You can restore your note from trash. You will see it again in all your notes.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel className='duration-200 bg-zinc-800 hover:bg-zinc-900 hover:text-white'>
								Cancel
							</AlertDialogCancel>
							<AlertDialogAction
								className='text-black duration-200 bg-white hover:bg-slate-200/85'
								onClick={restoreNote}>
								Restore
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</>
	)
}

export default OnSubmitDelete
