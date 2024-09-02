'use server'

import { createNote, getAllNotes, makeFavorite, moveToTrash, deleteNote } from '@/db/notes'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createNoteAction = async ({
	title,
	description,
	isFavorite,
}: {
	title: string
	description: string
	isFavorite: boolean
}) => {
	if (!title || !description) {
		throw new Error('Title and description are required')
	}
	const note = await createNote({
		title,
		description,
		isFavorite,
		userId: '9cc66271-c157-4163-92a2-0eea5bf4b78b',
	})

	redirect('/')
}

export const makeFavoriteAction = async (noteId: string, favorite: boolean) => {
	const note = await makeFavorite(noteId, favorite)
	revalidatePath('/')
	revalidatePath('/notes/favorites')
	return note
}

export const moveToTrashAction = async (noteId: string) => {
	const note = await moveToTrash(noteId)
	revalidatePath('/notes/deleted')
	revalidatePath('/')
	return note
}

export const deleteNoteAction = async (noteId: string) => {
	const note = await deleteNote(noteId)
	revalidatePath('/notes/deleted')
	return note
}

