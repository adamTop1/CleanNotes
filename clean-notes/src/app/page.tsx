import NoNotes from '@/components/NoNotes'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import React from 'react'

const Home = () => {
	return (
		<div className='flex flex-col items-center'>
			<Input placeholder='Search note...' className='w-1/2 mt-20 border-white outline-none bg-zinc-800' />
			<div className='flex my-5'>
				<button>
					<Badge variant='outline' className='px-3 py-2 m-2 text-white bg-sky-600 bg-opacity-30'>
						Personal
					</Badge>
				</button>
				<button>
					<Badge variant='outline' className='px-3 py-2 m-2 text-white bg-red-700 bg-opacity-15'>
						Home
					</Badge>
				</button>
				<button>
					<Badge variant='outline' className='px-3 py-2 m-2 text-white bg-yellow-300 bg-opacity-30'>
						Shopping
					</Badge>
				</button>
				<button>
					<Badge variant='outline' className='px-3 py-2 m-2 text-white bg-violet-600 bg-opacity-20'>
						Work
					</Badge>
				</button>
			</div>
			<NoNotes />
		</div>
	)
}

export default Home
