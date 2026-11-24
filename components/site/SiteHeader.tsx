import { Button } from "@/components/ui/button";
import { business, navLinks } from "@/lib/site";
import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function SiteHeader(): JSX.Element {
	return (
		<header className='sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md'>
			<Container className='flex h-20 items-center justify-between gap-4'>
				<Link
					href='/'
					className='group flex items-baseline gap-3'
					aria-label='Nail Studio, back to top'
				>
					<span className='font-display text-2xl leading-none tracking-tight transition-colors group-hover:text-wine'>
						Nail Studio
					</span>
					<span className='hidden text-[0.6rem] uppercase tracking-[0.22em] text-clay sm:block'>
						Gadsden, AL
					</span>
				</Link>

				<nav
					aria-label='Primary'
					className='hidden items-center gap-7 lg:flex'
				>
					{navLinks.slice(0, 5).map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className='relative py-2 text-[0.65rem] uppercase tracking-[0.2em] text-clay transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-wine after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
						>
							{link.label}
						</Link>
					))}
				</nav>

				<div className='flex items-center gap-1 sm:gap-2'>
					<a
						href={business.phoneHref}
						className='mr-2 hidden text-[0.65rem] uppercase tracking-[0.16em] text-clay transition-colors hover:text-wine xl:block'
					>
						{business.phone}
					</a>
					<Button
						asChild
						className='h-10 rounded-full bg-wine px-5 text-[0.625rem] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-ink'
					>
						<Link href={business.phoneHref}>Book</Link>
					</Button>
					<MobileNav />
				</div>
			</Container>
		</header>
	);
}
