'use server'

import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
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
		<div className='grid grid-cols-4 gap-4 mx-20 my-10'>
			{notes.map((note) => {
				const formattedDate = note.createdAt.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})
				const description = note.description.length > 100 ? note.description.substring(0, 100) + '...' : note.description
				return (
					<Card key={note.id} className='flex flex-col justify-between text-white bg-zinc-800 border-zinc-700 min-w-[300px] '>
						<CardHeader>
							<CardTitle>{note.title}</CardTitle>
							<CardDescription className='break-words' >{description}</CardDescription>
						</CardHeader>
						<CardFooter>
							<div className='flex flex-col justify-between w-full'>
								<p className='text-sm'>Date: {formattedDate}</p>
								<div className='flex items-center justify-between mt-5 text-xl text-zinc-400'>
									<OnSubmitButtons noteId={note.id} noteFav={note.isFavorite} title={note.title} description={note.description} />
									<SlArrowRight className='mx-1 text-3xl text-white duration-150 cursor-pointer hover:scale-75 ' />
								</div>
							</div>
						</CardFooter>
					</Card>
				)
			})}
			<Card className='flex items-center justify-center text-5xl text-white bg-zinc-800 border-zinc-700 '>
				<Link href='/notes/create'>
					<div className='p-10 duration-300 opacity-75 hover:rotate-180 hover:text-yellow-300'>
						<IoMdAdd />
					</div>
				</Link>
			</Card>
		</div>
	)
}

export default Notes
