import Categories from '@/components/Categories'
import NoNotes from '@/components/NoNotes'
import { Input } from '@/components/ui/input'
import React from 'react'

const Home = () => {
	return (
		<div className='flex flex-col items-center min-h-screen '>
			<Input placeholder='Search note...' className='w-1/2 mt-32 border-white outline-none bg-zinc-800' />
			<Categories />
			<NoNotes />
		</div>
	)
}

export default Home
