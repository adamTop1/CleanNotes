import React from 'react'
import NoDeletedNotes from './EmptyDeletedNotes'
import DeletedNotes from './DeletedNotes'

const deletedNotes = []

const DeletedNotesPage = () => {
	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Deleted notes</h2>
			{deletedNotes.length === 0 ? <NoDeletedNotes /> : <DeletedNotes />}
		</div>
	)
}

export default DeletedNotesPage
