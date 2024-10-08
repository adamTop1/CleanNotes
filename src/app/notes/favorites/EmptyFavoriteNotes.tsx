import React from 'react'
import Image from 'next/image'

const EmptyFavoriteNotes = () => {
	return (
		<div className='flex flex-col items-center justify-center my-10 '>
			<p className='mx-8 my-8 text-2xl font-bold md:text-4xl md:my-14'>You do not have any favorite notes.</p>
			<Image
				src='/fav-notes.svg'
				width={250}
				height={250}
				className='max-lg: w-[200px] h-[200px]'
				alt='svg image ilustrating adding notes'
			/>
		</div>
	)
}

export default EmptyFavoriteNotes
