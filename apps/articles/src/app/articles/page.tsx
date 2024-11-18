import Link from 'next/link'

const Page = () => {
	return (
		<div className='flex justify-center items-center min-h-screen w-full'>
			<div>
				<h1 className='text-2xl font-bold text-center'>ARTICLES</h1>
				<p className='text-center'>Make with love by <strong className='text-green-600'>wahyu agus arifin</strong></p>
				<div className='flx justify-center mt-10'>
					<div className="flex gap-4 items-center justify-center">
						<Link
							className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
							href="/"
							prefetch
						>
							MAIN
						</Link>
						<Link
							className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
							href="/articles"
							prefetch
						>
							MICRO (ARTICLES) apps/articles
						</Link>
						<Link
							className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
							href="/docs"
							prefetch
						>
							MICRO (DOCS) apps/docs
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page