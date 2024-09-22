'use server'

import { createUser } from '@/db/users'

export async function OnSubmitLogin({ name, password }: { name: string; password: string }) {
	if (!name || !password) {
		throw new Error('name and password are required')
	}
	const user = await createUser({ name, password })
	console.log(user)
	return user
}
