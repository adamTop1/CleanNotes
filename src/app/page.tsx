import Categories from '@/components/Categories'
import NoNotes from '@/components/EmptyNotes'
import Notes from './notes/Notes'
import { getAllNotes, getFilteredNotes } from '@/db/notes'
import SearchNotes from '@/components/SearchNotes'

const Home = async ({
	searchParams,
}: {
	searchParams?: {
		query?: string
	}
}) => {
	
	const categoryChange = async (val: string) => {
		'use server'
		console.log(val)
	}

	const query = searchParams?.query

	let content

	if (!query) {
		const notes = await getAllNotes()
		content =
			notes.length === 0 ? (
				<NoNotes />
			) : (
				<>
					<Categories categoryChange={categoryChange} />
					<Notes notes={notes} />
				</>
			)
	}

	if (query) {
		const filteredNotes = await getFilteredNotes(query)
		content =
			filteredNotes.length === 0 ? (
				<div className='mt-24 text-2xl'>There is no notes you are searching. Try another phase or create new one.</div>
			) : (
				<>
					<Categories categoryChange={categoryChange} />
					<Notes notes={filteredNotes} />
				</>
			)
	}

	return (
		<div className='flex flex-col items-center min-h-screen '>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>All notes</h2>

			<SearchNotes />

			{content}
		</div>
	)
}

export default Home