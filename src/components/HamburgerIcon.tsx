'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'
import NavLinks from './NavLinks'

const HamburgerIcon = ({ signOutFn }: any) => {
	const [isOpen, setIsOpen] = useState(false)

	const openNavFn = () => {
		setIsOpen(!isOpen)
	}


	return (
		<>
			<div className='fixed top-0 right-0 z-20' onClick={openNavFn}>
				<RxHamburgerMenu className='w-10 h-10 p-2 mt-5 mr-5 text-yellow-300 cursor-pointer' />
			</div>
			<div className={cn('fixed top-0 left-0 z-10 hidden w-full h-full bg-black', { block: isOpen })}>
				<div className='flex flex-col items-center justify-between'>
					<h1 className='mx-auto mt-20 text-4xl font-bold lg:text-2xl xl:text-4xl'>
						<Link href='/'>CleanNotes</Link>
					</h1>
					<NavLinks setIsOpen={setIsOpen} />
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
