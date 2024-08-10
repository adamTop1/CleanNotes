import React from 'react'
import Image from 'next/image'

const NoNotes = () => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-4xl font-bold my-14'>You do not have any notes. Create one!</h1>
			<Image src='/add-note.svg' width={300} height={300} alt='svg image ilustrating adding notes' />
		</div>
	)
}

export default NoNotes
