"use client";
import TitleHeadSection from "@/components/cc/infinite-moving-cards/TitleHeadSection";
import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Suspense, useEffect, useId, useState } from "react";
type CardType = {
	src: string;
	id: number;
	title: string;
	link: string;
};
const ImagesData: CardType[] = [
	{
		id: 1,
		src: "/Images/contact/1.webp",
		title: "Manicure",
		link: "/#manicure",
	},
	{
		id: 2,
		src: "/Images/pedicure/2.webp",
		title: "Pedicure",
		link: "/#pedicure",
	},
	{
		id: 3,
		src: "/Images/nail-art/15.webp",
		title: "Nail Art",
		link: "/#nail-art",
	},
];
const NailCards = (): JSX.Element => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const keyId = useId();
	useEffect(() => {
		if (!api) {
			return;
		}
		setTimeout(() => {
			if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
				setCurrent(0);
				api.scrollTo(0);
			} else {
				api.scrollNext();
				setCurrent(current + 1);
			}
		}, 3000);
	}, [api, current]);
	return (
		<div className='relative w-full max-w-screen-2xl'>
			<div className='pointer-events-none absolute -left-1 z-10 h-full w-40 bg-gradient-to-r from-background to-transparent' />
			<div className='pointer-events-none absolute -right-1 z-10 h-full w-40 bg-gradient-to-l from-background to-transparent' />
			<div className='mx-auto'>
				<div className='flex flex-col gap-10'>
					<Carousel setApi={setApi} className='w-full'>
						<CarouselContent>
							{ImagesData.map((item, _index) => (
								<CarouselItem className=' lg:basis-1/2' key={keyId}>
									<Link href={item.link}>
										<div className='relative aspect-video w-full overflow-hidden rounded-md'>
											<Suspense
												fallback={
													<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
														<Skeleton className='aspect-video w-4/5 rounded-xl' />
														<div className='flex w-full flex-col items-center justify-center space-y-2'>
															<Skeleton className='h-4 w-3/5 ' />
															<Skeleton className='h-4 w-3/5 ' />
														</div>
													</div>
												}
											>
												<LoadingImage
													src={item.src}
													className='size-full object-cover  object-center'
													alt='Carousel image'
													sizes='(max-width: 430px) 120px,(max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 310px, 500px'
												/>
												<div className='absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-background'>
													<TitleHeadSection className=''>
														{item.title}
													</TitleHeadSection>
												</div>
											</Suspense>
										</div>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
};
export default NailCards;
