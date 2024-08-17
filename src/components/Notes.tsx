import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card'

export const notes = [
	{
		title: 'Note title',
		content:
			' lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
		important: false,
		category: 'Work',
		date: '2021-10-10',
	},
	{
		title: 'Note title',
		content:
			' lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
		important: false,
		category: 'Work',
		date: '2021-10-10',
	},
	{
		title: 'Note title',
		content:
			' lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
		important: false,
		category: 'Work',
		date: '2021-10-10',
	},
	{
		title: 'Note title',
		content:
			' lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
		important: false,
		category: 'Work',
		date: '2021-10-10',
	},
	{
		title: 'Note title',
		content:
			' lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
		important: false,
		category: 'Work',
		date: '2021-10-10',
	},
]

const Notes = () => {
	return (
		<div className='grid grid-cols-4 gap-4 m-10'>
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
