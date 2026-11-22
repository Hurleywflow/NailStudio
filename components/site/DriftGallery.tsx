import type { GalleryImage } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

type DriftGalleryProps = {
	id: string;
	index: string;
	eyebrow: string;
	title: string;
	copy: string;
	images: GalleryImage[];
};

export function DriftGallery({
	id,
	index,
	eyebrow,
	title,
	copy,
	images,
}: DriftGalleryProps): JSX.Element {
	const half = Math.ceil(images.length / 2);
	const firstColumn = images.slice(0, half);
	const secondColumn = images.slice(half);

	return (
		<section
			id={id}
			className='relative overflow-clip bg-bone py-24 md:py-32 lg:py-40'
		>
			<Container className='grid gap-12 lg:grid-cols-12 lg:gap-8'>
				<div className='lg:sticky lg:top-28 lg:col-span-4 lg:h-fit'>
					<SectionLabel index={index}>{eyebrow}</SectionLabel>
					<h2 className='mt-6 max-w-md font-display text-display-lg font-normal'>
						{title}
					</h2>
					<p className='mt-6 max-w-md text-body-lg text-clay'>{copy}</p>
					<Link
						href='#contact'
						className='group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-[0.65rem] uppercase tracking-[0.2em] text-ink transition-colors hover:border-wine hover:text-wine'
					>
						Book a pedicure
						<span className='transition-transform duration-300 group-hover:translate-x-1'>
							→
						</span>
					</Link>
				</div>

				<div className='grid grid-cols-2 gap-3 md:gap-4 lg:col-span-8'>
					<div data-drift='up' className='flex flex-col gap-3 md:gap-4'>
						{firstColumn.map((image) => (
							<figure
								key={image.src}
								className='group relative aspect-[4/5] overflow-hidden bg-paper'
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									sizes='(max-width: 1024px) 45vw, 26vw'
									className='object-cover object-center transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]'
								/>
							</figure>
						))}
					</div>
					<div
						data-drift='down'
						className='mt-12 flex flex-col gap-3 md:mt-20 md:gap-4'
					>
						{secondColumn.map((image) => (
							<figure
								key={image.src}
								className='group relative aspect-[4/5] overflow-hidden bg-paper'
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									sizes='(max-width: 1024px) 45vw, 26vw'
									className='object-cover object-center transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]'
								/>
							</figure>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
