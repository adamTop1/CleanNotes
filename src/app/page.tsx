import Categories from '@/components/Categories'
import NoNotes from '@/components/EmptyNotes'
import { Input } from '@/components/ui/input'
import React from 'react'
import Notes  from './notes/Notes'
import { getAllNotes } from '@/db/notes'


const Home = async () => {
	const notes = await getAllNotes()

	const notDeletedNotes = notes.filter((note) => note.inTrash === false)

	return (
		<div className='flex flex-col items-center min-h-screen '>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>All notes</h2>

			{notDeletedNotes.length === 0 ? (
				<NoNotes  />
			) : (
				<>
				<Input placeholder='Search note...' className='w-1/2 mt-2 border-white outline-none bg-zinc-800' />
				<Categories />
				<Notes notes={notDeletedNotes} />
				</>
			)}
		</div>
	)
}

export default Home
