import CreateNoteForm from './CreateNoteForm'
import React from 'react'

const CreateNote = () => {
	return (
		<div className='flex flex-col items-center justify-start w-full min-h-screen'>
			<h2 className='pb-1 mt-20 text-4xl border-b-2 border-yellow-300 sm:text-5xl'>Create new note</h2>
			<CreateNoteForm />
		</div>
	)
}

export default CreateNote
