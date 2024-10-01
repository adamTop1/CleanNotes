import { prisma } from './db'

export const createUser = async ({ email, password }: { email: string; password: string }) => {
	const user = await prisma.user.create({
		data: {
			email: email,
			password: password,
		},
	})
	return user
}

export const getAllUsers = async () => {
	const users = await prisma.user.findMany()
	return users
}

export const getUserByEmail = async (email: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	})
	return user
}