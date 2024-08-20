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

export const makeFavorite = async (noteId: string, favorite: boolean) => {
	const note = await prisma.note.update({
		where: {
			id: noteId,
		},
		data: {
			isFavorite: favorite,
		},
	})
	return note
}
