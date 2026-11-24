import { business } from "@/lib/site";
import { ArrowDownRight, ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function Hero(): JSX.Element {
	return (
		<section className='relative overflow-clip bg-paper pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-16'>
			<Container className='grid min-h-[calc(100svh-9rem)] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8'>
				<div className='flex flex-col justify-between gap-12 lg:col-span-7'>
					<div>
						<SectionLabel index='—' className='mb-10'>
							Nail Studio · Gadsden, Alabama
						</SectionLabel>
						<h1 className='font-display text-display-xl font-normal text-ink'>
							<span data-hero-line className='block overflow-hidden pb-1'>
								<span
									className='block'
									style={{ "--delay": "80ms" } as CSSProperties}
								>
									The quiet art
								</span>
							</span>
							<span data-hero-line className='block overflow-hidden pb-1'>
								<span
									className='block italic text-wine'
									style={{ "--delay": "200ms" } as CSSProperties}
								>
									of beautiful
								</span>
							</span>
							<span data-hero-line className='block overflow-hidden pb-1'>
								<span
									className='block'
									style={{ "--delay": "320ms" } as CSSProperties}
								>
									hands.
								</span>
							</span>
						</h1>
					</div>

					<div className='flex flex-col gap-10'>
						<p
							data-hero-fade
							className='max-w-md text-body-lg text-clay'
							style={{ "--delay": "520ms" } as CSSProperties}
						>
							Manicures, pedicures and hand-painted nail art, practised
							slowly in the heart of Gadsden.
						</p>

						<div
							data-hero-fade
							className='flex flex-col gap-4 sm:flex-row sm:items-center'
							style={{ "--delay": "640ms" } as CSSProperties}
						>
							<a
								href={business.phoneHref}
								className='group inline-flex items-center justify-between gap-6 rounded-full bg-wine px-6 py-4 text-paper transition-colors hover:bg-ink'
							>
								<span className='flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em]'>
									<Phone className='size-4' aria-hidden />
									Book an appointment
								</span>
								<ArrowUpRight
									className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
									aria-hidden
								/>
							</a>
							<Link
								href='#nail-art'
								className='group inline-flex items-center gap-3 px-2 py-4 text-[0.65rem] uppercase tracking-[0.2em] text-clay transition-colors hover:text-ink'
							>
								See the work
								<ArrowDownRight
									className='size-4 transition-transform duration-300 group-hover:translate-y-0.5'
									aria-hidden
								/>
							</Link>
						</div>

						<div className='flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-[0.6rem] uppercase tracking-[0.2em] text-clay'>
							<span>Manicure</span>
							<span className='size-1 rounded-full bg-wine' aria-hidden />
							<span>Pedicure</span>
							<span className='size-1 rounded-full bg-wine' aria-hidden />
							<span>Nail Art</span>
						</div>
					</div>
				</div>

				<div className='flex flex-col lg:col-span-5'>
					<figure
						data-hero-clip
						className='relative aspect-[4/5] w-full overflow-hidden rounded-t-[9rem] bg-bone sm:rounded-t-[12rem]'
					>
						<Image
							src='/Images/contact/2.webp'
							alt='A guest with a red manicure, photographed at Nail Studio in Gadsden'
							fill
							priority
							sizes='(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 38vw'
							className='object-cover object-[50%_28%] mix-blend-multiply'
							data-hero-media
						/>
						<span className='pointer-events-none absolute inset-0 rounded-t-[9rem] ring-1 ring-inset ring-ink/10 sm:rounded-t-[12rem]' />
					</figure>
					<div className='mt-4 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-clay'>
						<span>A finished set</span>
						<span>{business.city}, {business.region}</span>
					</div>
				</div>
			</Container>
		</section>
	);
}
