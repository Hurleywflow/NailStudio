import { business, services } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function Services(): JSX.Element {
	return (
		<section id='services' className='bg-paper py-24 md:py-32 lg:py-40'>
			<Container>
				<div className='flex flex-col gap-8 md:flex-row md:items-end md:justify-between'>
					<div>
						<SectionLabel index='02'>Services</SectionLabel>
						<h2
							data-reveal='mask'
							className='mt-6 max-w-2xl font-display text-display-lg font-normal'
						>
							Three ways to be looked after.
						</h2>
					</div>
					<p
						data-reveal
						className='max-w-xs text-sm leading-relaxed text-clay'
					>
						Every service begins with a conversation. Call the studio to
						talk through what you have in mind.
					</p>
				</div>

				<div className='mt-14 border-t border-line'>
					{services.map((service) => (
						<Link
							key={service.slug}
							href={service.href}
							className='group grid grid-cols-[2.5rem_1fr_10rem] items-center gap-4 border-b border-line py-7 md:grid-cols-[3.5rem_1fr_12rem_2rem] md:gap-8 md:py-9'
						>
							<span className='text-eyebrow text-wine'>
								{service.index}
							</span>

							<span className='block'>
								<span className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
									<span className='font-display text-display-md font-normal leading-none transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5'>
										{service.title}
									</span>
									<span className='text-sm text-clay'>
										{service.summary}
									</span>
								</span>
							</span>

							<span className='relative aspect-[3/2] w-full overflow-hidden bg-bone md:w-[12rem] md:shrink-0'>
								<Image
									src={service.image}
									alt={service.alt}
									fill
									sizes='12rem'
									className='object-cover object-center transition-transform duration-700 ease-out-expo group-hover:scale-105'
								/>
							</span>

							<span className='flex justify-end'>
								<ArrowUpRight
									className='size-5 text-clay transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-wine'
									aria-hidden
								/>
							</span>
						</Link>
					))}
				</div>

				<div className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
					<p className='text-sm text-clay'>
						Not sure which service you need? We are happy to advise.
					</p>
					<a
						href={business.phoneHref}
						className='group inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-ink transition-colors hover:text-wine'
					>
						Call {business.phone}
						<ArrowUpRight
							className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
							aria-hidden
						/>
					</a>
				</div>
			</Container>
		</section>
	);
}
