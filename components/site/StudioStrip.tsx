import { studioPhotos } from "@/lib/site";
import Image from "next/image";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function StudioStrip(): JSX.Element {
	return (
		<section className='relative overflow-clip bg-bone py-24 md:py-32'>
			<Container>
				<div className='flex flex-col gap-8 md:flex-row md:items-end md:justify-between'>
					<div>
						<SectionLabel index='07'>In the chair</SectionLabel>
						<h2
							data-reveal='mask'
							className='mt-6 max-w-lg font-display text-display-md font-normal'
						>
							The people who sit here.
						</h2>
					</div>
					<p className='max-w-xs text-[0.6rem] uppercase leading-relaxed tracking-[0.18em] text-clay'>
						A few guests, photographed at the studio. Swipe to look through.
					</p>
				</div>
			</Container>

			<div className='gallery-scroller mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 sm:gap-4 sm:px-8 md:mt-16 lg:px-12 xl:px-16'>
				{studioPhotos.map((photo, position) => (
					<figure
						key={photo.src}
						className='group w-[62vw] shrink-0 snap-start sm:w-[34vw] md:w-[24vw] lg:w-[19rem]'
					>
						<div className='relative aspect-[3/4] overflow-hidden bg-paper'>
							<Image
								src={photo.src}
								alt={photo.alt}
								fill
								sizes='(max-width: 640px) 62vw, (max-width: 1024px) 30vw, 19rem'
								className='object-cover object-center transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]'
							/>
						</div>
						<figcaption className='mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.18em] text-clay'>
							<span>Nail Studio</span>
							<span>{String(position + 1).padStart(2, "0")}</span>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	);
}
