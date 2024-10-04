import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Home = async () => {

	return (
		<div className='z-10 grid w-full h-screen grid-cols-2 col'>
			<div className='flex flex-col items-center justify-center gap-7'>
				<h2 className='text-5xl font-bold'>CleanNotes</h2>
				<p className='text-xl text-gray-300 max-w-[500px]'>
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
			<div className='flex items-center justify-center'>
				<Image src='/ideas-flow.svg' alt='notes' width={400} height={400} />
			</div>
		</div>
	)
}

export default Home
