import { prisma } from './db'
import { unstable_cache } from 'next/cache'

export enum Category {
	WORK = 'WORK',
	PERSONAL = 'PERSONAL',
	SHOPPING = 'SHOPPING',
	OTHER = 'OTHER',
}

export const createNote = async ({
	title,
	description,
	isFavorite,
	userId,
	category,
}: {
	title: string
	description: string
	isFavorite: boolean
	userId: string
	category: Category
}) => {
	const note = await prisma.note.create({
		data: {
			title: title,
			description: description,
			isFavorite: isFavorite,
			userId: userId,
			category: category,
		},
	})
	return note
}

export const getAllNotes = async ({ userId }: { userId: string }) => {
	const notes = await prisma.note.findMany({
		where: {
			inTrash: false,
			userId: userId,
		},
	})
	return notes
}

export const getNoteById = async (noteId: string) => {
	const note = await prisma.note.findUnique({
		where: {
			id: noteId,
		},
	})
	return note
}

export const getAllTrashNotes = async ({ userId }: { userId: string }) => {
	const notes = await prisma.note.findMany({
		where: {
			inTrash: true,
			userId: userId,
		},
	})
	return notes
}

export const getFilteredNotes = async (search: string, category: Category, userId: string) => {
	const notes = await prisma.note.findMany({
		where: {
			OR: [
				{
					title: {
						contains: search,
					},
					inTrash: false,
				},
				{
					description: {
						contains: search,
					},
					inTrash: false,
				},
			],
			category: category,
			userId: userId,
		},
	})
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

export const moveToTrash = async (noteId: string) => {
	const note = await prisma.note.update({
		where: {
			id: noteId,
		},
		data: {
			inTrash: true,
		},
	})
	return note
}

export const deleteNote = (noteId: string) => {
	const note = prisma.note.delete({
		where: {
			id: noteId,
		},
	})
	return note
}

export const restoreNote = async (noteId: string) => {
	const note = await prisma.note.update({
		where: {
			id: noteId,
		},
		data: {
			inTrash: false,
		},
	})
	return note
}

export const editNote = async ({
	noteId,
	title,
	description,
}: {
	noteId: string
	title: string
	description: string
}) => {
	const note = await prisma.note.update({
		where: {
			id: noteId,
		},
		data: {
			title: title,
			description: description,
		},
	})
	return note
}
