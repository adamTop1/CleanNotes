'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Badge } from './ui/badge'
import React from 'react'
import cn from 'clsx'

const Categories = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const categories = ['All', 'Personal', 'Work', 'Shopping', 'Other']

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

	return (
		<div className='flex mx-2 my-10 lg:my-5'>
			{categories.map((category, index) => {
				let isActive = false

				if (searchParams.get('category')?.toLowerCase() === category.toLowerCase()) {
					isActive = true
				} else if (category === 'All' && !searchParams.get('category')) {
					isActive = true
				} else {
					isActive = false
				}

				return (
					<button key={index} onClick={() => handleClick(category)}>
						<Badge
							variant='outline'
							className={cn('px-3 py-2 m-1 md:m-2 text-white duration-300 hover:bg-yellow-300 hover:bg-opacity-30', {
								'bg-yellow-300  bg-opacity-50': isActive,
							})}>
							{category}
						</Badge>
					</button>
				)
			})}
		</div>
	)
}

export default Categories
