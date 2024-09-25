'use client'

import { Badge } from './ui/badge'
import React from 'react'

const Categories = ({ categoryChange }: { categoryChange: (val: string) => void }) => {
	const Category = ['All', 'Personal', 'Work', 'Shopping', 'Other']

	return (
		<div className='flex my-5'>
			{Category.map((category, index) => {
				return (
					<button key={index} onClick={() => categoryChange(category)}>
						<Badge
							variant='outline'
							className='px-3 py-2 m-2 text-white duration-300 hover:bg-yellow-300 hover:bg-opacity-30'>
							{category}
						</Badge>
					</button>
				)
			})}
		</div>
	)
}

export default Categories
