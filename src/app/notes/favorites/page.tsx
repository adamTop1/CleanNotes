import React from 'react'
import EmptyFavoriteNotes from './EmptyFavoriteNotes'
import FavoriteNotes from './FavoriteNotes'
import { getAllNotes } from '@/db/notes'


const DeletedNotesPage = async () => {
	const notes = await getAllNotes()

	const favNotes = notes.filter((note) => note.isFavorite === true).filter((note) => note.inTrash === false)
	console.log(favNotes);

	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Favorite notes</h2>
			{favNotes.length === 0 ? <EmptyFavoriteNotes /> : <FavoriteNotes favNotes={favNotes} />}
		</div>
	)
}

export default DeletedNotesPage
