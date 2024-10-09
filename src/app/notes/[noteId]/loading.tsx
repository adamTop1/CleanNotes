const LoadingNotePage = () => {

	return (
		<div className='flex flex-col items-start min-h-screen mx-10 lg:mx-40 '>
			<h2 className='pb-1 mx-auto my-20 text-5xl border-b-2 border-yellow-300'>Note</h2>
			<div className='flex flex-col break-words gap-7'>
				<div >
					<p className='text-2xl font-bold'>Title</p>
					<p className='text-gray-400'>...</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>Description</p>
					<p className='text-gray-400'>.....</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>Is this your one of your favorite notes?</p>
					<p className='text-gray-400 capitalize'>...</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>Category of the note is...</p>
					<p className='text-gray-400'>...</p>
				</div>
				<div>
					<p className='text-2xl font-bold'>You created this note at...</p>
					<p className='text-gray-400'>...</p>
				</div>
			</div>
		</div>
	)
}

export default LoadingNotePage
