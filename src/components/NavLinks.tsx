'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
    const pathname = usePathname()

	const links = [
		{ href: '/notes', text: 'All notes' },
		{ href: '/notes/favorites', text: 'Favorite notes' },
		{ href: '/notes/deleted', text: 'Deleted notes' },
	]

	return (
		<nav className='mt-32'>
			<ul className='flex flex-col items-center w-full gap-4 text-2xl lg:text-lg xl:text-xl '>
				{links.map((link, index) => {
					const isActive = pathname === link.href
					return (
						<li key={index}>
							<Link
								href={link.href}
								className={cn('duration-300 border-b border-gray-500 hover:border-yellow-300', {
									'border-yellow-300': isActive,
								})}>
								{link.text}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default NavLinks
