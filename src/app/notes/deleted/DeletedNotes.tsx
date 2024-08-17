import { notes } from '@/components/Notes'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
import { FaEdit } from 'react-icons/fa'

const DeletedNotes = () => {
	return (
		<div className='grid grid-cols-4 gap-4 mx-20 my-10'>
			{notes.map((note, index) => (
				<Card key={index} className='flex flex-col text-white bg-zinc-800 border-zinc-700 justify-stretch'>
					<CardHeader>
						<CardTitle>{note.title}</CardTitle>
						<CardDescription>{note.content}</CardDescription>
					</CardHeader>
					<CardFooter>
						<div className='flex justify-between w-full'>
							<div className='flex flex-col'>
								<p className='text-sm'>
									Category: <span className='font-bold'>{note.category}</span>
								</p>
								<p className='text-sm'>Date: {note.date}</p>
							</div>
							<button>
								<FaEdit className='text-xl text-white hover:scale-[1.1] duration-200' />
							</button>
						</div>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}

export default DeletedNotes
