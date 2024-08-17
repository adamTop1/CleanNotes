import React from 'react'
import Image from 'next/image'

const EmptyFavoriteNotes = () => {
    return (
		<div className='flex flex-col items-center justify-center my-10 '>
			<p className='text-4xl font-bold my-14'>You do not have any favorite notes.</p>
			<Image src='/fav-notes.svg' width={250} height={250} alt='svg image ilustrating adding notes' />
		</div>
	)
}

export default EmptyFavoriteNotes

