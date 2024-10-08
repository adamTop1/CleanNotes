import React from 'react'
import Image from 'next/image'

const NoDeletedNotes = () => {
	return (
		<div className='flex flex-col items-center justify-center my-10 '>
			<p className='mx-8 my-8 text-2xl font-bold md:text-4xl md:my-14'>You do not have any deleted notes.</p>
			<Image
				src='/deleted-notes.svg'
				width={300}
				height={300}
				className='max-lg: w-[200px] h-[200px]'
				alt='svg image ilustrating adding notes'
			/>
		</div>
	)
}

export default NoDeletedNotes
