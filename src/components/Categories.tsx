'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Badge } from './ui/badge'
import React from 'react'

const Categories = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const handleClick = (category: string) => {
		const params = new URLSearchParams(searchParams)
		if (category !== 'All') {
			params.set('category', category)
		} else if (category === 'All') {
			params.delete('category')
		} else {
			params.delete('category')
		}
		router.push(`${pathname}?${params.toString()}`)
	}

	const Category = ['All', 'Personal', 'Work', 'Shopping', 'Other']

	return (
		<div className='flex my-5'>
			{Category.map((category, index) => {
				return (
					<button key={index} onClick={() => handleClick(category)}>
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
