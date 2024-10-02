'use client'

import { Button } from './ui/button'
import { useFormState, useFormStatus } from 'react-dom';

export default function LoginForm({ actionFn, signText }: { actionFn: any; signText: string }) {
	const [errorMessage, formAction] = useFormState(actionFn, undefined)

	const upperCaseText = signText.charAt(0).toUpperCase() + signText.slice(1)

	return (
		<form  className='space-y-3 ' action={formAction}>
			<div className='flex-1 px-6 pt-8 pb-4 rounded-lg'>
				<h1 className={`mb-3 text-2xl`}>Please {signText} to continue.</h1>
				<div className='w-full'>
					<div>
						<label className='block mt-5 mb-3 text-xs font-medium text-gray-400' htmlFor='email'>
							Email
						</label>
						<div className='relative'>
							<input
								className='block w-full rounded-md border text-black border-gray-200 py-[9px] pl-1 text-sm outline-2 placeholder:text-gray-400'
								id='email'
								type='email'
								name='email'
								placeholder='Enter your email address'
								required
							/>
						</div>
					</div>
					<div className='mt-4'>
						<label className='block mt-5 mb-3 text-xs font-medium text-gray-500' htmlFor='password'>
							Password
						</label>
						<div className='relative'>
							<input
								className='block w-full rounded-md border text-black border-gray-200 py-[9px] pl-1 text-sm outline-2 placeholder:text-gray-500'
								id='password'
								type='password'
								name='password'
								placeholder='Enter password'
								required
								minLength={6}
							/>
							
						</div>
					</div>
				</div>
				<Submit text={upperCaseText} />
				<div className='flex items-end h-8 space-x-1' aria-live='polite' aria-atomic='true'>
				{errorMessage && <>{errorMessage}</>}
				</div>
			</div>
		</form>
	)
}

function Submit({text}: {text: string}) {
	const status = useFormStatus();
	return (
	  <button disabled={status.pending} className='w-full py-1 mt-6 rounded bg-zinc-800/70 hover:bg-zinc-800 first-letter:uppercase'>
		{status.pending ? 'Loging...' : text}
	  </button>
	);
  }