import { business } from "@/lib/site";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function Contact(): JSX.Element {
	return (
		<section id='contact' className='relative overflow-clip bg-ink text-paper'>
			<Container className='py-24 md:py-32 lg:py-40'>
				<div className='grid gap-12 lg:grid-cols-12 lg:gap-10'>
					<div className='flex flex-col justify-between gap-14 lg:col-span-6'>
						<div>
							<SectionLabel index='08' inverted>
								Visit
							</SectionLabel>
							<h2
								data-reveal='mask'
								className='mt-6 max-w-xl font-display text-display-lg font-normal'
							>
								Come and sit with us.
							</h2>
							<p className='mt-6 max-w-md text-body-lg text-paper/65'>
								Tell us what you have in mind and we will find the right
								service for you. Appointments are made by phone.
							</p>
						</div>

						<div className='space-y-8'>
							<a
								href={business.phoneHref}
								className='group flex items-center justify-between gap-6 border-y border-paper/15 py-6 transition-colors hover:border-paper/40'
							>
								<span className='flex items-center gap-4'>
									<Phone className='size-5 text-wine' aria-hidden />
									<span className='font-display text-display-sm'>
										{business.phone}
									</span>
								</span>
								<ArrowUpRight
									className='size-6 text-paper/50 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper'
									aria-hidden
								/>
							</a>

							<div className='grid gap-6 sm:grid-cols-2'>
								<div>
									<p className='text-[0.6rem] uppercase tracking-[0.22em] text-paper/45'>
										Studio
									</p>
									<p className='mt-3 text-sm leading-relaxed text-paper/85'>
										{business.street}
										<br />
										{business.city}, {business.region} {business.postal}
									</p>
								</div>
								<div>
									<p className='text-[0.6rem] uppercase tracking-[0.22em] text-paper/45'>
										Directions
									</p>
									<a
										href={business.mapsUrl}
										target='_blank'
										rel='noreferrer'
										className='group mt-3 inline-flex items-center gap-2 text-sm text-paper/85 transition-colors hover:text-paper'
									>
										<MapPin className='size-4 text-wine' aria-hidden />
										Open in Google Maps
										<ArrowUpRight
											className='size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
											aria-hidden
										/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='lg:col-span-5 lg:col-start-8'>
						<div
							data-reveal='mask'
							className='relative aspect-[4/5] w-full overflow-hidden bg-paper/5'
						>
							<Image
								src='/Images/contact/1.webp'
								alt='A close-up of a red manicure finished at Nail Studio'
								fill
								sizes='(max-width: 1024px) 92vw, 38vw'
								className='object-cover object-center'
							/>
						</div>
						<p className='mt-4 text-[0.6rem] uppercase tracking-[0.18em] text-paper/45'>
							Red, glossed and finished by hand.
						</p>
					</div>
				</div>
			</Container>

			<a
				href={business.mapsUrl}
				target='_blank'
				rel='noreferrer'
				className='group relative block h-40 overflow-hidden border-t border-paper/15 sm:h-52'
			>
				<Image
					src='/Images/contact/map.webp'
					alt='Map showing Nail Studio at 1001 Rainbow Dr in Gadsden, Alabama'
					fill
					sizes='100vw'
					className='object-cover object-center opacity-70 grayscale transition-all duration-700 ease-out-expo group-hover:scale-[1.02] group-hover:opacity-90 group-hover:grayscale-0'
				/>
				<span className='absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/10' />
				<span className='absolute inset-0 flex items-center justify-center'>
					<span className='flex items-center gap-3 border border-paper/40 bg-ink/70 px-5 py-3 text-[0.6rem] uppercase tracking-[0.2em] text-paper backdrop-blur-sm'>
						<MapPin className='size-4' aria-hidden />
						{business.address}
					</span>
				</span>
			</a>
		</section>
	);
}
