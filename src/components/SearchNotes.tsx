'use client'

import { Input } from './ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SearchNotes = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	function handleSearch(searchTerm: string) {
		const params = new URLSearchParams(searchParams)
		if (searchTerm) {
			params.set('query', searchTerm)
		} else {
			params.delete('query')
		}
		router.push(`${pathname}?${params.toString()}`)
	}

	return (
		<Input
			placeholder='Search note...'
			className='w-1/2 mt-2 border-white outline-none bg-zinc-800'
			onChange={e => {
				handleSearch(e.target.value)
			}}
			defaultValue={searchParams.get('query')?.toString()}
		/>
	)
}

export default SearchNotes
