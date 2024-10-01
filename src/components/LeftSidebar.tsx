'use client'

import { signOut } from '@/auth'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
	const pathname = usePathname()

	const links = [
		{ href: '/notes', text: 'All notes' },
		{ href: '/notes/favorites', text: 'Favorite notes' },
		{ href: '/notes/deleted', text: 'Deleted notes' },
	]

	return (
		<div className='sticky top-0 flex flex-col justify-between w-2/12 h-screen border-r-2 border-yellow-300 '>
			<h1 className='mx-auto mt-10 text-4xl font-bold'>
				<Link href='/'>CleanNotes</Link>
			</h1>
			<nav className='mt-32'>
				<ul className='flex flex-col items-center w-full gap-4 text-xl '>
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
			<form
				action={async () => {
					'use server'
					await signOut()
				}}>
				<button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
					<div className='hidden md:block'>Sign Out</div>
				</button>
			</form>
		</div>
	)
}

export default LeftSidebar
