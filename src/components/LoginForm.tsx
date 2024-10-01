'use client'

import { authenticate } from '@/actions/authenticate'
import { KeyIcon, ArrowRightIcon } from 'lucide-react'
import { useActionState } from 'react'
import { Button } from './ui/button'

export default function LoginForm() {
	const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined)

	return (
		<form action={formAction} className='space-y-3'>
			<div className='flex-1 px-6 pt-8 pb-4 rounded-lg bg-gray-50'>
				<h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
				<div className='w-full'>
					<div>
						<label className='block mt-5 mb-3 text-xs font-medium text-gray-900' htmlFor='email'>
							Email
						</label>
						<div className='relative'>
							<input
								className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
								id='email'
								type='email'
								name='email'
								placeholder='Enter your email address'
								required
							/>
						</div>
					</div>
					<div className='mt-4'>
						<label className='block mt-5 mb-3 text-xs font-medium text-gray-900' htmlFor='password'>
							Password
						</label>
						<div className='relative'>
							<input
								className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
								id='password'
								type='password'
								name='password'
								placeholder='Enter password'
								required
								minLength={6}
							/>
							<KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
						</div>
					</div>
				</div>
				<Button className='w-full mt-4' aria-disabled={isPending}>
					Log in <ArrowRightIcon className='w-5 h-5 ml-auto text-gray-50' />
				</Button>
				<div className='flex items-end h-8 space-x-1' aria-live='polite' aria-atomic='true'>
					{errorMessage && <>{errorMessage}</>}
				</div>
			</div>
		</form>
	)
}
