import React from 'react'
import NoDeletedNotes from './EmptyDeletedNotes'
import DeletedNotes from './DeletedNotes'
import { getAllTrashNotes } from '@/db/notes'
import { notFound } from 'next/navigation'
import { auth } from '@/auth'

const DeletedNotesPage = async () => {
	const session = await auth()

	const trashNotes = await getAllTrashNotes({
		userId: session?.user?.id as string,
	})

	if (trashNotes === null ) return notFound()

	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Deleted notes</h2>
			{trashNotes.length === 0 ? <NoDeletedNotes /> : <DeletedNotes trashNotes={trashNotes} />}
		</div>
	)
}

export default DeletedNotesPage
