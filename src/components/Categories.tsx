import { Badge } from './ui/badge'
import React from 'react'

const Categories = () => {
	return (
		<div className='flex my-5'>
			<button>
				<Badge
					variant='outline'
					className='px-3 py-2 m-2 text-white duration-300 hover:bg-yellow-300 hover:bg-opacity-30'>
					Personal
				</Badge>
			</button>
			<button>
				<Badge
					variant='outline'
					className='px-3 py-2 m-2 text-white duration-300 hover:bg-yellow-300 hover:bg-opacity-30'>
					Work
				</Badge>
			</button>
			<button>
				<Badge
					variant='outline'
					className='px-3 py-2 m-2 text-white duration-300 hover:bg-yellow-300 hover:bg-opacity-30'>
					Shopping
				</Badge>
			</button>
			<button>
				<Badge
					variant='outline'
					className='px-3 py-2 m-2 text-white duration-300 hover:bg-yellow-300 hover:bg-opacity-30'>
					Other
				</Badge>
			</button>
		</div>
	)
}

export default Categories
