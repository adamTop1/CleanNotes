import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Home = async () => {
	return (
		<div className='grid w-full h-screen grid-cols-2 col'>
			<div className='flex flex-col items-center justify-center gap-7'>
				<h2 className='text-3xl font-bold'>CleanNotes</h2>
				<p>Collect everything in one place!</p>
				<div className='flex gap-4 '>
					<Link href='/notes'>
						<Button className='text-black bg-yellow-400 border border-black hover:bg-yellow-400/85'>Get Started</Button>
					</Link>
					<Link href='/login'>
						<Button className='' variant='secondary'>
							Login
						</Button>
					</Link>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<Image src='/ideas-flow.svg' alt='notes' width={350} height={400} />
			</div>
		</div>
	)
}

export default Home
