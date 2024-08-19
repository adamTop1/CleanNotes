'use server'

import { createNote, getAllNotes } from '@/db/notes'
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
