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
	const query = searchParams?.query || ''

	const filteredNotes = await getFilteredNotes(query)
	const activeFilteredNotes = filteredNotes.filter(note => note.inTrash === false)

	const allNotes = await getAllNotes()
	const activeAllNotes = allNotes.filter(note => note.inTrash === false)

	return (
		<div className='flex flex-col items-center min-h-screen '>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>All notes</h2>

			{activeAllNotes.length === 0 && <NoNotes />}

			<SearchNotes />
			{activeFilteredNotes.length === 0 ? (
				<>
					<div className='flex flex-col items-center my-12 text-2xl'>
						<p>There is no notes you are trying to search. Try another phase or create one.</p>
						<p>Below are all notes.</p>
					</div>
					<Notes notes={activeAllNotes} />
				</>
			) : (
				<>
					<Categories />
					<Notes notes={activeFilteredNotes} />
				</>
			)}
		</div>
	)
}

export default Home
