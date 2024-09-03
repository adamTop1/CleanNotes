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
	const allNotes = await getAllNotes()

	return (
		<div className='flex flex-col items-center min-h-screen '>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>All notes</h2>

			{allNotes.length === 0 && <NoNotes />}

			<SearchNotes />
			
			{filteredNotes.length === 0 ? (
				<>
					<div className='flex flex-col items-center my-12 text-2xl'>
						<p>There is no notes you are trying to search. Try another phase or create one.</p>
						<p>Below are all notes.</p>
					</div>
					<Notes notes={allNotes} />
				</>
			) : (
				<>
					<Categories />
					<Notes notes={filteredNotes} />
				</>
			)}
		</div>
	)
}

export default Home
