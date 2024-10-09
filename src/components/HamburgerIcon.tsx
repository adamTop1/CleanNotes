'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HamburgerIcon = ({ signOutFn }: any) => {
	const [isOpen, setIsOpen] = useState(false)

	const openNavFn = () => {
		setIsOpen(!isOpen)
	}
	const pathname = usePathname()

	const links = [
		{ href: '/notes', text: 'All notes' },
		{ href: '/notes/favorites', text: 'Favorite notes' },
		{ href: '/notes/deleted', text: 'Deleted notes' },
	]

	const closeNav = () => {
		setTimeout(() => {
			setIsOpen(false)
		}, 1200)
	}

	return (
		<>
			<div className='fixed top-0 right-0 z-20' onClick={openNavFn}>
				<RxHamburgerMenu className='w-12 h-12 p-2 mt-5 mr-5 text-yellow-300 bg-black border border-yellow-300 rounded-full cursor-pointer ' />
			</div>
			<div className={cn('fixed top-0 left-0 z-10 hidden w-full h-full bg-black', { block: isOpen })}>
				<div className='flex flex-col items-center justify-between'>
					<h1 className='mx-auto mt-20 text-4xl font-bold lg:text-2xl xl:text-4xl'>
						<Link href='/'>CleanNotes</Link>
					</h1>
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
											})}
											onClick={closeNav}>
											{link.text}
										</Link>
									</li>
								)
							})}
						</ul>
					</nav>
					<form action={signOutFn}>
						<button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-zinc-800 p-3 text-sm font-medium  hover:text-yellow-300 md:flex-none md:justify-start md:p-2 md:px-3 mb-5 mt-20 '>
							<div className='md:block'>Sign Out</div>
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default HamburgerIcon
