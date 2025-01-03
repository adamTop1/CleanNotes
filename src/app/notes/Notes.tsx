'use server'

import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { IoMdAdd } from 'react-icons/io'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card'
import OnSubmitButtons from './OnSubmitButtons'

const Notes = ({
	notes,
}: {
	notes: {
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
		<div className='grid gap-4 mx-6 grid-cols-2 xl:mx-10 my-10 min-[1200px]:grid-cols-3 min-[1600px]:grid-cols-4 max-md:flex max-md:flex-col'>
			<Card className='flex items-center justify-center text-5xl text-white bg-zinc-800 border-zinc-700 min-w-[300px] min-h-[180px] '>
				<Link href='/notes/create'>
					<div className='p-10 duration-300 opacity-75 hover:rotate-180 hover:text-yellow-300'>
						<IoMdAdd />
					</div>
				</Link>
			</Card>
			{notes.map(note => {
				const formattedDate = new Date(note.createdAt).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})
				const description =
					note.description.length > 100 ? note.description.substring(0, 100) + '...' : note.description
				return (
					<Card
						key={note.id}
						className='flex flex-col justify-between text-white bg-zinc-800 border-zinc-700 min-w-[300px] '>
						<CardHeader>
							<CardTitle>{note.title}</CardTitle>
							<CardDescription className='break-words'>{description}</CardDescription>
						</CardHeader>
						<CardFooter>
							<div className='flex flex-col justify-between w-full'>
								<p className='text-sm'>Date: {formattedDate}</p>
								<div className='flex items-center justify-between mt-5 text-xl text-zinc-400'>
									<OnSubmitButtons
										noteId={note.id}
										noteFav={note.isFavorite}
										title={note.title}
										description={note.description}
									/>
									<Link href={`/notes/${note.id}`}>
										<SlArrowRight className='mx-1 text-3xl text-white duration-150 cursor-pointer hover:scale-75 ' />
									</Link>
								</div>
							</div>
						</CardFooter>
					</Card>
				)
			})}
		</div>
	)
}

export default Notes
