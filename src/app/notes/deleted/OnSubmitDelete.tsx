'use client'

import { Badge } from '@/components/ui/badge'
import { deleteNoteAction } from '@/actions/notes'

const OnSubmitDelete = ({ noteId }: { noteId: string }) => {
	const deleteNote = async () => {
		if (confirm('Are you sure you want to delete this note?')) {
			await deleteNoteAction(noteId)
		}
	}

	const restoreNote = () => {}

	return (
		<div className='flex gap-4 '>
			<button onClick={deleteNote}>
				<Badge variant='destructive'>Delete</Badge>
			</button>
			<button onClick={restoreNote}>
				<Badge variant='secondary'>Restore</Badge>
			</button>
		</div>
	)
}

export default OnSubmitDelete
