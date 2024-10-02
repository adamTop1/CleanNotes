import LoginForm from '@/components/LoginForm'
import React from 'react'
import { signUpAction } from '@/actions/users'
import Link from 'next/link'

const SignUp = () => {
	return (
		<>
			<h1 className='absolute z-10 mx-auto mt-10 text-4xl font-bold text-white border-b border-yellow-300 top-5 left-10 '>
				<Link href='/'>CleanNotes</Link>
			</h1>
			<div className='flex flex-col items-center justify-center w-full min-h-screen bg-zinc-900'>
				<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Sign Up</h2>
				<LoginForm actionFn={signUpAction} signText='sign up' />
				<p>
					If you have an account, please{' '}
					<Link href='/signin' className='text-yellow-300'>
						sign in.
					</Link>
				</p>
			</div>
		</>
	)
}

export default SignUp
