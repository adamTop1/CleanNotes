import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import OnSubmitDelete from './OnSubmitDelete'
import { SlArrowRight } from "react-icons/sl";
import Link from 'next/link';


const DeletedNotes = async ({
	trashNotes,
}: {
	trashNotes: {
		id: string
		title: string
		description: string
		isFavorite: boolean
		inTrash: boolean
		createdAt: Date
		userId: string
	}[]
}) => {
	return (
		<div className='grid gap-4 mx-6 grid-cols-2 xl:mx-10 my-10 min-[1200px]:grid-cols-3 min-[1600px]:grid-cols-4 max-md:flex max-md:flex-col'>
			{trashNotes.map((note, index) => {
				const formattedDate = new Date(note.createdAt).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})
				const description = note.description.length > 100 ? note.description.substring(0, 100) + '...' : note.description
				return (
					<Card key={index} className='flex flex-col justify-between text-white bg-zinc-800 border-zinc-700 min-w-[300px]'>
						<CardHeader>
							<CardTitle>{note.title}</CardTitle>
							<CardDescription className='break-words' >{description}</CardDescription>
						</CardHeader>
						<CardFooter>
							<div className='flex flex-col justify-between w-full'>
								<p className='text-sm'>Date: {formattedDate}</p>
								<div className='flex items-center justify-between mt-5 text-xl text-zinc-400'>
									<OnSubmitDelete noteId={note.id}/>
									<Link href={`/notes/${note.id}`}>
										<SlArrowRight className='mx-1 text-3xl text-white duration-150 cursor-pointer hover:scale-75 ' />
									</Link>
								</div>
							</div>
						</CardFooter>
					</Card>
				)
			})}
		</div>
	)
}

export default DeletedNotes
