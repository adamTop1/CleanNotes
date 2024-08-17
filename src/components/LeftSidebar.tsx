'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
    const pathname = usePathname()
   
	return (
		<div className='flex flex-col justify-between w-2/12 h-screen border-r-2 border-yellow-300 '>
			<h1 className='mx-auto mt-10 text-4xl font-bold'>
				<Link href='/'>CleanNotes</Link>
			</h1>
            <nav className='mt-32'>
                <ul className='flex flex-col items-center w-full gap-4 text-xl '>
                    <li><Link href='/' className='duration-300 border-b border-gray-500 hover:border-yellow-300'>All notes</Link></li>
                    <li><Link href='/notes/favorite' className='text-yellow-300 duration-300 border-b border-gray-500'>Favorite notes</Link></li>
                    <li><Link href='/notes/deleted' className='duration-300 border-b border-gray-500 hover:text-yellow-300'>Deleted notes</Link></li>
                </ul>
            </nav>
			<Link href='/login' className='mx-auto my-32'>Login</Link>
		</div>
	)
}

export default LeftSidebar
