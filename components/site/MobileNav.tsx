"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { business, navLinks } from "@/lib/site";
import { ArrowUpRight, Menu, Phone } from "lucide-react";
import Link from "next/link";

export function MobileNav(): JSX.Element {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='rounded-full text-ink hover:bg-bone lg:hidden'
				>
					<Menu className='size-5' />
					<span className='sr-only'>Open menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side='right'
				className='flex w-full max-w-sm flex-col border-line bg-paper p-8 sm:max-w-md'
			>
				<SheetTitle className='font-display text-2xl font-normal'>
					Nail Studio
				</SheetTitle>
				<SheetDescription className='text-eyebrow uppercase text-clay'>
					Gadsden, Alabama
				</SheetDescription>

				<nav
					aria-label='Mobile'
					className='mt-12 flex flex-col divide-y divide-line border-y border-line'
				>
					{navLinks.map((link, position) => (
						<SheetClose asChild key={link.href}>
							<Link
								href={link.href}
								className='group flex items-baseline justify-between gap-4 py-5 transition-colors hover:text-wine'
							>
								<span className='font-display text-3xl font-normal leading-none'>
									{link.label}
								</span>
								<span className='text-eyebrow text-clay'>
									{String(position + 1).padStart(2, "0")}
								</span>
							</Link>
						</SheetClose>
					))}
				</nav>

				<div className='mt-auto space-y-5 pt-10'>
					<a
						href={business.phoneHref}
						className='group flex items-center justify-between gap-3 rounded-full bg-wine px-5 py-4 text-paper transition-colors hover:bg-ink'
					>
						<span className='flex items-center gap-3 text-xs uppercase tracking-[0.18em]'>
							<Phone className='size-4' aria-hidden />
							Call to book
						</span>
						<ArrowUpRight
							className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
							aria-hidden
						/>
					</a>
					<p className='text-xs leading-relaxed text-clay'>
						{business.address}
					</p>
				</div>
			</SheetContent>
		</Sheet>
	);
}
