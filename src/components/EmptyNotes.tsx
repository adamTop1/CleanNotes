'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NoNotes = () => {
	const router = useRouter()

	return (
		<div className='flex flex-col items-center justify-center my-10 '>
			<p className='mx-8 my-8 text-xl font-bold md:text-4xl md:my-14'>
				You do not have any notes.{' '}
				<button className='border-b border-yellow-300' onClick={() => router.push('/notes/create')}>
					Create one!
				</button>
			</p>
			<div className='max-sm:w-[200px] max-sm:h-[200px]'>
			<Image src='/ideas-flow.svg' width={300} height={300} alt='svg image ilustrating adding notes' />
			</div>
		</div>
	)
}

export default NoNotes