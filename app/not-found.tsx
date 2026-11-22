import Link from "next/link";

export default function NotFound(): JSX.Element {
	return (
		<main className='flex min-h-[70svh] items-center bg-paper'>
			<div className='mx-auto w-full max-w-[96rem] px-5 sm:px-8 lg:px-12 xl:px-16'>
				<p className='text-eyebrow uppercase text-wine'>404</p>
				<h1 className='mt-6 max-w-2xl font-display text-display-lg font-normal'>
					This page has been filed away.
				</h1>
				<p className='mt-6 max-w-md text-body-lg text-clay'>
					The page you were looking for could not be found or has moved.
				</p>
				<Link
					href='/'
					className='mt-10 inline-flex rounded-full bg-wine px-6 py-4 text-[0.65rem] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink'
				>
					Back to the studio
				</Link>
			</div>
		</main>
	);
}
