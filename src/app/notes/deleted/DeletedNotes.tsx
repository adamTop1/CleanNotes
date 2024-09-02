import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { getAllNotes } from '@/db/notes'
import React from 'react'
import OnSubmitButtons from '../OnSubmitButtons'
import { IoArrowRedoSharp } from 'react-icons/io5'
import OnSubmitDelete from './OnSubmitDelete'

const DeletedNotes = async ({
	deletedNotes,
}: {
	deletedNotes: {
		id: string
		title: string
		description: string
		isFavorite: boolean
		inTrash: boolean
		createdAt: Date
		userId: string
	}[]
}) => {
	return (
		<div className='grid grid-cols-4 gap-4 mx-20 my-10'>
			{deletedNotes.map((note, index) => {
				const formattedDate = note.createdAt.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})
				return (
					<Card key={index} className='flex flex-col justify-between text-white bg-zinc-800 border-zinc-700'>
						<CardHeader>
							<CardTitle>{note.title}</CardTitle>
							<CardDescription>{note.description}</CardDescription>
						</CardHeader>
						<CardFooter>
							<div className='flex flex-col justify-between w-full'>
								<p className='text-sm'>Date: {formattedDate}</p>
								<div className='flex items-center justify-between mt-5 text-xl text-zinc-400'>
									<OnSubmitDelete noteId={note.id}/>
									<IoArrowRedoSharp className='mx-1 text-3xl text-white duration-150 ' />
								</div>
							</div>
						</CardFooter>
					</Card>
				)
			})}
		</div>
	)
}

export default DeletedNotes
