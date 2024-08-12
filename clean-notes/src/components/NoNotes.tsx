import React from 'react'
import Image from 'next/image'

const NoNotes = () => {
	return (
		<div className='flex flex-col items-center justify-center my-10 '>
			<p className='text-4xl font-bold my-14'>You do not have any notes. <span className='border-b border-yellow-300'>Create one!</span></p>
			<Image src='/add-note.svg' width={300} height={300} alt='svg image ilustrating adding notes' />
		</div>
	)
}

export default NoNotes
