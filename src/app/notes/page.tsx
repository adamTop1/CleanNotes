import Categories from '@/components/Categories'
import NoNotes from '@/components/EmptyNotes'
import Notes from './Notes'
import { Category, getAllNotes, getFilteredNotes } from '@/db/notes'
import SearchNotes from '@/components/SearchNotes'

const Home = async ({
	searchParams,
}: {
	searchParams?: {
		query?: string
		category?: string
	}
}) => {
	const query = searchParams?.query || ''
	const category = searchParams?.category || null

	let content
	let modifiedCategory

	if (category !== null) {
		modifiedCategory = category.toUpperCase()
	}

	if (!query || !category) {
		const notes = await getAllNotes()
		content = notes.length === 0 ? <NoNotes /> : <Notes notes={notes} />
	}

	if (query || modifiedCategory) {
		const filteredNotes = await getFilteredNotes(query, modifiedCategory as Category)
		content =
			filteredNotes.length === 0 ? (
				<div className='mt-24 text-2xl'>There is no notes you are searching. Try another phase or create new one.</div>
			) : (
				<Notes notes={filteredNotes} />
			)
	}

	return (
		<div className='flex flex-col items-center min-h-screen '>
			<h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>All notes</h2>

			<SearchNotes />
			<Categories />

			{content}
		</div>
	)
}

export default Home
