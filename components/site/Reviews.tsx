import { reviews } from "@/lib/site";
import { Star } from "lucide-react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function Reviews(): JSX.Element {
	return (
		<section
			id='reviews'
			className='relative overflow-clip border-t border-line bg-paper py-24 md:py-32 lg:py-40'
		>
			<Container>
				<div className='grid gap-10 lg:grid-cols-12 lg:gap-8'>
					<div className='lg:col-span-4'>
						<SectionLabel index='06'>Reviews</SectionLabel>
						<h2
							data-reveal='mask'
							className='mt-6 max-w-sm font-display text-display-lg font-normal'
						>
							In their words.
						</h2>
					</div>
					<p
						data-reveal
						className='max-w-md text-sm leading-relaxed text-clay lg:col-span-4 lg:col-start-6 lg:pt-2'
					>
						Guests write to us after their appointments. These are their
						reviews, published as they were left.
					</p>
				</div>

				<ul className='mt-16 grid gap-x-10 gap-y-12 border-t border-line pt-12 md:grid-cols-2 lg:grid-cols-3'>
					{reviews.map((review) => (
						<li key={review.name} data-reveal className='flex flex-col gap-5'>
							<span
								className='flex items-center gap-1 text-wine'
								aria-label={`${review.stars} out of 5 stars`}
							>
								{Array.from({ length: review.stars }).map((_, position) => (
									<Star
										// Decorative, fixed-length list of identical stars.
										// eslint-disable-next-line react/no-array-index-key
										key={`${review.name}-star-${position}`}
										className='size-3.5 fill-current'
										aria-hidden
									/>
								))}
							</span>
							<blockquote className='text-body-lg leading-relaxed text-ink'>
								{review.quote}
							</blockquote>
							<cite className='mt-auto text-[0.6rem] uppercase not-italic tracking-[0.2em] text-clay'>
								{review.name}
							</cite>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
