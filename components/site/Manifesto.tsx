import { services } from "@/lib/site";
import Image from "next/image";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function Manifesto(): JSX.Element {
	return (
		<section className='relative overflow-clip bg-bone py-24 md:py-32 lg:py-40'>
			<Container className='grid gap-12 lg:grid-cols-12 lg:gap-8'>
				<div className='lg:col-span-4'>
					<SectionLabel index='01'>The studio</SectionLabel>
					<div
						data-reveal='mask'
						className='relative mt-8 aspect-[4/5] w-full overflow-hidden bg-paper'
					>
						<Image
							src='/Images/manicure/13.webp'
							alt='A deep red manicure with a gloss finish'
							fill
							priority
							sizes='(max-width: 1024px) 90vw, 30vw'
							className='object-cover object-center'
						/>
					</div>
					<p className='mt-4 max-w-64 text-[0.6rem] uppercase leading-relaxed tracking-[0.18em] text-clay'>
						A finished set, photographed at the studio.
					</p>
				</div>

				<div className='lg:col-span-7 lg:col-start-6'>
					<h2
						data-reveal='mask'
						className='max-w-3xl font-display text-display-lg font-normal'
					>
						A slower kind of beauty.
					</h2>

					<div
						data-reveal
						className='mt-8 max-w-2xl space-y-6 text-body-lg text-clay'
					>
						<p>
							Looking for an experience that leaves you feeling fully
							rejuvenated? Our studio is here to pamper you in style — a
							chance to kick back, relax and indulge in some much-needed
							self-care.
						</p>
						<p>
							Our team provides the ultimate manicure and pedicure
							experience, complete with a tranquil atmosphere and
							top-of-the-line service. We also offer event services for
							birthdays, bridal parties, baby showers and graduations.
						</p>
					</div>

					<blockquote
						data-reveal
						className='mt-12 max-w-xl border-l border-wine pl-6 font-display text-display-sm italic text-ink'
					>
						Look and feel your very best.
					</blockquote>

					<ul className='mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-[0.6rem] uppercase tracking-[0.2em] text-clay'>
						{services.map((service) => (
							<li key={service.slug}>{service.title}</li>
						))}
						<li>Events</li>
					</ul>
				</div>
			</Container>
		</section>
	);
}
