import { signInAction } from '@/actions/users'
import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
	return (
		<>
			<h1 className='absolute z-10 mx-auto mt-10 text-4xl font-bold text-white border-b border-yellow-300 top-5 left-10 '>
				<Link href='/'>CleanNotes</Link>
			</h1>

			<div className='flex flex-col items-center justify-center w-full min-h-screen bg-zinc-900'>
				<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300 '>Sign In</h2>
				<LoginForm actionFn={signInAction} signText='sign in' />
				<p>
					If you do not have an account, please{' '}
					<Link href='/signup' className='text-yellow-300'>
						sign up.
					</Link>
				</p>
			</div>
		</>
	)
}

export default SignIn
