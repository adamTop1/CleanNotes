import { Button } from '@/components/ui/button'
import { getNoteById } from '@/db/notes'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const Note = async ({ params }: { params: { noteId: string } }) => {
	const note = await getNoteById(params.noteId)

	if (note === null) return notFound()

	const date = new Date(note.createdAt).toLocaleDateString()

	return (
		<div className='flex flex-col items-start min-h-screen mx-40 '>
			<h2 className='pb-1 mx-auto my-20 text-5xl border-b-2 border-yellow-300'>Note</h2>
			<div className='flex flex-col break-words gap-7'>
				<div >
					<p className='text-2xl font-bold'>Title</p>
					<p className='text-gray-400'>{note.title}</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>Description</p>
					<p className='text-gray-400'>{note.description}</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>Is this your one of your favorite notes?</p>
					<p className='text-gray-400 capitalize'>{note.isFavorite.toString()}</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>Category of the note is...</p>
					<p className='text-gray-400'>{note.category}</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>You created this note at...</p>
					<p className='text-gray-400'>{date}</p>
				</div>
               <Link href='/notes'><Button className='text-black bg-yellow-300 bg-opacity-75 hover:bg-yellow-300 hover:bg-opacity-55 hover:text-black'>Get back to all notes</Button></Link>
			</div>
		</div>
	)
}

export default Note
