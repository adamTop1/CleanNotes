import { Badge } from './ui/badge'
import React from 'react'

const Categories = () => {
	return (
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
	)
}

export default Categories
