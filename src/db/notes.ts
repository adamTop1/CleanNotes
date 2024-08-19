import { prisma } from './db'

export const createNote = async ({
	title,
	description,
	isFavorite,
	userId,
}: {
	title: string
	description: string
	isFavorite: boolean
	userId: string
}) => {
	const note = await prisma.note.create({
		data: {
			title: title,
			description: description,
			isFavorite: isFavorite,
			userId: userId,
		},
	})
	return note
}

export const getAllNotes = async () => {
	const notes = await prisma.note.findMany()
	return notes
}