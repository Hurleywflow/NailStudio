import { business, navLinks } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter(): JSX.Element {
	const year = new Date().getFullYear();

	return (
		<footer className='border-t border-paper/10 bg-ink text-paper'>
			<Container className='py-14 md:py-20'>
				<div className='grid gap-12 md:grid-cols-12'>
					<div className='md:col-span-5'>
						<Link
							href='/'
							className='inline-flex items-center gap-4'
							aria-label='Nail Studio, back to top'
						>
							<Image
								src='/Images/logo/logo.jpg'
								alt='Nail Studio crest'
								width={265}
								height={149}
								className='h-14 w-auto object-contain'
							/>
							<span className='font-display text-2xl leading-none'>
								Nail Studio
							</span>
						</Link>
						<p className='mt-6 max-w-xs text-sm leading-relaxed text-paper/60'>
							Manicure, pedicure and nail art in Gadsden, Alabama.
						</p>
					</div>

					<nav
						aria-label='Footer'
						className='grid grid-cols-2 gap-3 md:col-span-4 md:col-start-7'
					>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='w-fit text-[0.65rem] uppercase tracking-[0.18em] text-paper/60 transition-colors hover:text-paper'
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className='md:col-span-2 md:col-start-11 md:text-right'>
						<a
							href={business.phoneHref}
							className='text-sm text-paper/80 transition-colors hover:text-paper'
						>
							{business.phone}
						</a>
						<p className='mt-4 text-[0.6rem] uppercase leading-relaxed tracking-[0.16em] text-paper/40'>
							{business.street}
							<br />
							{business.city}, {business.region} {business.postal}
						</p>
					</div>
				</div>

				<div className='mt-14 flex flex-col gap-4 border-t border-paper/10 pt-6 text-[0.6rem] uppercase tracking-[0.16em] text-paper/40 sm:flex-row sm:items-center sm:justify-between'>
					<p>
						Copyright &copy; {year} NailStudio. All rights reserved.
					</p>
					<p>
						Designed and built by{" "}
						<a
							href='https://netcodedev.com'
							target='_blank'
							rel='noreferrer'
							className='text-paper/70 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper'
						>
							NetCode
						</a>
					</p>
				</div>
			</Container>
		</footer>
	);
}
