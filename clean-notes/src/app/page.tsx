import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const Home = () => {
	return (
		<div className='flex flex-col items-center'>
			<Input placeholder='Search note...' className='w-1/2 mt-20 border-white outline-none bg-zinc-800' />
     <div className='flex my-5'>
     <Badge variant="outline" className='px-3 py-2 m-2 text-white'>Personal</Badge>
     <Badge variant="outline" className='px-3 py-2 m-2 text-white'>Home</Badge>
     <Badge variant="outline" className='px-3 py-2 m-2 text-white'>Shopping</Badge>
     <Badge variant="outline" className='px-3 py-2 m-2 text-white'>Work</Badge>
     </div>
			<div className='flex flex-col items-center'>
				<h1 className='my-10 text-4xl font-bold'>You do not have any notes. Create one!</h1>
				<Image src='/add-note.svg' width={300} height={300} alt='svg image ilustrating adding notes' />
			</div>
		</div>
	)
}

export default Home
