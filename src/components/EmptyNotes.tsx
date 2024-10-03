'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NoNotes = () => {
	const router = useRouter()

	return (
		<div className='flex flex-col items-center justify-center my-10 '>
			<p className='text-4xl font-bold my-14'>
				You do not have any notes.{' '}
				<button className='border-b border-yellow-300' onClick={() => router.push('/notes/create')}>
					Create one!
				</button>
			</p>
			<Image src='/ideas-flow.svg' width={300} height={300} alt='svg image ilustrating adding notes' />
		</div>
	)
}

export default NoNotes