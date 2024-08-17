import React from 'react'
import EmptyFavoriteNotes from './EmptyFavoriteNotes'
import FavoriteNotes from './FavoriteNotes'
import { notes } from '@/components/Notes'

const favNotes = []

const DeletedNotesPage = () => {
	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Favorite notes</h2>
			{notes.length === 0 ? <EmptyFavoriteNotes /> : <FavoriteNotes />}
		</div>
	)
}

export default DeletedNotesPage
