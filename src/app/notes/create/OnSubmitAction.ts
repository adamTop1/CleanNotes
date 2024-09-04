'use server'

import { z } from 'zod'
import { formSchema } from './CreateNoteForm'
import { createNoteAction } from '@/actions/notes'

export async function OnSubmitAction(data: z.infer<typeof formSchema>) {
	const title = data.title
	const description = data.description
	const isFavorite = data.isFavorite
	const category = data.category

	if (!title || !description) {
		throw new Error('Title and description are required')
	}
	const note = await createNoteAction({ title, description, isFavorite, category })
	return note
}
