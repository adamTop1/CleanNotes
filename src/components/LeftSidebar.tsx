import { signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'

const LeftSidebar = () => {
	return (
		<div className='sticky top-0 flex flex-col items-center justify-between w-2/12 h-screen border-r-2 border-yellow-300 '>
			<h1 className='mx-auto mt-10 text-4xl font-bold'>
				<Link href='/'>CleanNotes</Link>
			</h1>
			<NavLinks />
			<form
				action={async () => {
					'use server'
					await signOut()
				}}>
				<button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-zinc-800 p-3 text-sm font-medium  hover:text-yellow-300 md:flex-none md:justify-start md:p-2 md:px-3 mb-5'>
					<div className='hidden md:block'>Sign Out</div>
				</button>
			</form>
		</div>
	)
}

export default LeftSidebar
