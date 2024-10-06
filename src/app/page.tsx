import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Home = async () => {

	return (
		<div className='z-10 grid h-screen grid-cols-2 col max-xl:mx-10 max-md:grid-cols-1'>
			<div className='flex flex-col items-center justify-center gap-7'>
				<h2 className='text-5xl font-bold max-md:text-4xl'>CleanNotes</h2>
				<p className='text-xl text-gray-300 max-w-[500px]  max-xl:text-base max-md:p-5'>
					Collect all your thoughts, tasks, and ideas in one place! Whether it is a to-do list, a creative idea, or a
					reminder, keep everything organized and easily accessible. No more scattered notes—have it all at your
					fingertips.
				</p>
				<div className='flex gap-4 mt-5 '>
					<Link href='/signin'>
						<Button className='text-black bg-yellow-400 border border-black hover:bg-yellow-400/85'>Sign In</Button>
					</Link>
					<Link href='/signup'>
						<Button variant='secondary'>Sign Up</Button>
					</Link>
					<div className='-z-10'>
						<BackgroundBeams />
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center max-md:hidden'>
				<Image src='/ideas-flow.svg' alt='notes' width={400} height={400} className='max-xl:w-[330px] max-xl:h-[330px]' />
			</div>
		</div>
	)
}

export default Home
