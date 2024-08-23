import React from 'react'
import NoDeletedNotes from './EmptyDeletedNotes'
import DeletedNotes from './DeletedNotes'
import { getAllNotes } from '@/db/notes'

const DeletedNotesPage = async () => {
	const notes = await getAllNotes()

	const deletedNotes = notes.filter(note => note.inTrash === true)

	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Deleted notes</h2>
			{deletedNotes.length === 0 ? <NoDeletedNotes /> : <DeletedNotes deletedNotes={deletedNotes} />}
		</div>
	)
}

export default DeletedNotesPage
