'use server'

import { createNote, getAllNotes, makeFavorite, moveToTrash, deleteNote, restoreNote, getFilteredNotes } from '@/db/notes'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Category } from '@/db/notes'

export const createNoteAction = async ({
	title,
	description,
	isFavorite,
	category,
}: {
	title: string
	description: string
	isFavorite: boolean
	category: Category
}) => {
	if (!title || !description) {
		throw new Error('Title and description are required')
	}
	const note = await createNote({
		title,
		description,
		isFavorite,
		userId: '855d3478-a164-4b3c-992f-8827b43ddce2',
		category,
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

export const restoreNoteAction = async (noteId: string) => {
	const note = await restoreNote(noteId)
	revalidatePath('/')
	revalidatePath('/notes/deleted')
	revalidatePath('/notes/favorites')
	return note
}

export const getFilteredNotesAction = async (search: string) => {
	const notes = await getFilteredNotes(search)
	revalidatePath('/')
	return notes
}