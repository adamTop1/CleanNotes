'use server'

import { createUser } from '@/db/users'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import { hashPassword } from '@/lib/hashPassword'

export async function signUpAction(prevState: string | undefined, formData: FormData) {

		try {
			const email = formData.get('email') as string
			const password = formData.get('password') as string
			const hashedPassword = await hashPassword({password})
			await createUser({
				email,
				password: hashedPassword
			})
			await signIn('credentials', {email, password})
		} catch (error) {
			throw error
		}

}

export async function signInAction(prevState: string | undefined, formData: FormData) {
	try {
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		await signIn('credentials', {email, password})
		await redirect('/')
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return 'Invalid credentials.'
				default:
					return 'Something went wrong.'
			}
		}
		throw error
	}
}