'use server'

import { createNote, makeFavorite, moveToTrash, deleteNote, restoreNote, getFilteredNotes, editNote } from '@/db/notes'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Category } from '@/db/notes'
import { auth } from '@/auth'

export const getSessionUserId = async () => {
	const session = await auth()
	if (!session) {
		throw new Error('No session found')
	}
	return session?.user?.id as string
}

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
	const userId = await getSessionUserId()
	const note = await createNote({
		title,
		description,
		isFavorite,
		userId: userId,
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

export const getFilteredNotesAction = async (search: string, category: Category, userId: string) => {
	const notes = await getFilteredNotes(search, category, userId)
	revalidatePath('/')
	revalidatePath('/notes/favorites')
	return notes
}

export const editNoteAction = async (noteId: string, title: string, description: string) => {
	const note = await editNote({ noteId, title, description })
	revalidatePath('/')
	revalidatePath('/notes/favorites')
	return note
}
