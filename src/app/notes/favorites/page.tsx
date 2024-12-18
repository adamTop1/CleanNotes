import React from 'react'
import EmptyFavoriteNotes from './EmptyFavoriteNotes'
import FavoriteNotes from './FavoriteNotes'
import { getAllNotes } from '@/db/notes'
import { notFound } from 'next/navigation'
import { auth } from '@/auth'

const FavoriteNotesPage = async () => {
	const session = await auth()

	const notes = await getAllNotes({
		userId: session?.user?.id as string,
	})

	if (notes === null) return notFound()

	const favNotes = notes.filter(note => note.isFavorite === true).filter(note => note.inTrash === false)

	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Favorite notes</h2>
			{favNotes.length === 0 ? <EmptyFavoriteNotes /> : <FavoriteNotes favNotes={favNotes} />}
		</div>
	)
}

export default FavoriteNotesPage
