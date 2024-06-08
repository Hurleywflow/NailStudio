/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Suspense, useEffect, useRef } from "react";

const RoyaltyCustomer = (): JSX.Element => {
	type SplideInstance = {
		sync: (splide: SplideInstance) => void;
		splide: SplideInstance;
	};

	const slides = [
		{
			imageUrl: "/Images/customer/1.webp",
			title: "Slide 1",
			description: "This is the first slide description.",
		},
		{
			imageUrl: "/Images/customer/2.webp",
			title: "Slide n",
			description: "This is the nth slide description.",
		},
		{
			imageUrl: "/Images/customer/3.webp",
			title: "Slide 3",
			description: "This is the third slide description.",
		},
		{
			imageUrl: "/Images/customer/4.webp",
			title: "Slide 4",
			description: "This is the fourth slide description.",
		},
		{
			imageUrl: "/Images/customer/5.webp",
			title: "Slide 5",
			description: "This is the fifth slide description.",
		},
		{
			imageUrl: "/Images/customer/6.webp",
			title: "Slide 6",
			description: "This is the sixth slide description.",
		},
		{
			imageUrl: "/Images/customer/7.webp",
			title: "Slide 7",
			description: "This is the seventh slide description.",
		},
		{
			imageUrl: "/Images/customer/8.webp",
			title: "Slide 8",
			description: "This is the eighth slide description.",
		},
		{
			imageUrl: "/Images/customer/9.webp",
			title: "Slide n+1",
			description: "This is the (n+1)th slide description.",
		},
		{
			imageUrl: "/Images/customer/10.webp",
			title: "Slide 10",
			description: "This is the tenth slide description.",
		},
		{
			imageUrl: "/Images/customer/11.webp",
			title: "Slide 11",
			description: "This is the eleventh slide description.",
		},
		{
			imageUrl: "/Images/customer/12.webp",
			title: "Slide 12",
			description: "This is the twelfth slide description.",
		},
		{
			imageUrl: "/Images/customer/13.webp",
			title: "Slide 13",
			description: "This is the thirteenth slide description.",
		},
		{
			imageUrl: "/Images/customer/14.webp",
			title: "Slide 14",
			description: "This is the fourteenth slide description.",
		},
		{
			imageUrl: "/Images/customer/15.webp",
			title: "Slide 15",
			description: "This is the fifteenth slide description.",
		},
		{
			imageUrl: "/Images/customer/16.webp",
			title: "Slide 16",
			description: "This is the sixteenth slide description.",
		},
		{
			imageUrl: "/Images/customer/17.webp",
			title: "Slide 17",
			description: "This is the seventeenth slide description.",
		},
		{
			imageUrl: "/Images/customer/18.webp",
			title: "Slide 18",
			description: "This is the eighteenth slide description.",
		},
		{
			imageUrl: "/Images/customer/19.webp",
			title: "Slide 19",
			description: "This is the nineteenth slide description.",
		},
		{
			imageUrl: "/Images/customer/20.webp",
			title: "Slide 20",
			description: "This is the twentieth slide description.",
		},
		{
			imageUrl: "/Images/customer/21.webp",
			title: "Slide 21",
			description: "This is the twenty-first slide description.",
		},
		{
			imageUrl: "/Images/customer/22.webp",
			title: "Slide 22",
			description: "This is the twenty-second slide description.",
		},
		{
			imageUrl: "/Images/customer/23.webp",
			title: "Slide 23",
			description: "This is the twenty-third slide description.",
		},
		{
			imageUrl: "/Images/customer/24.webp",
			title: "Slide 24",
			description: "This is the twenty-fourth slide description.",
		},
		{
			imageUrl: "/Images/customer/25.webp",
			title: "Slide 25",
			description: "This is the twenty five slide description.",
		},
	];

	const primaryRef = useRef<SplideInstance | null>(null);
	const secondaryRef = useRef<SplideInstance | null>(null);

	useEffect(() => {
		if (primaryRef.current !== null && secondaryRef.current !== null) {
			primaryRef.current.sync(secondaryRef.current.splide);
		}
	}, []);

	return (
		<div className='mb-5 w-full'>
			<Splide
				options={{
					rewind: true,
					pagination: false,
					arrows: true,
					autoplay: true,
					type: "loop",
					interval: 7000,
					pauseOnHover: true,
					pauseOnFocus: false,
					resetProgress: false,
					centerMode: true,
					gap: "1rem",
				}}
				aria-label='Carousel with Autoplay'
				ref={primaryRef}
			>
				{slides.map((slide, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<SplideSlide key={index}>
						<div className='relative mb-4 flex aspect-square w-full cursor-grab flex-col items-center overflow-hidden rounded-md md:aspect-video'>
							<Suspense
								fallback={
									<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
										<Skeleton className='aspect-video w-4/5 rounded-xl' />
										<div className='flex w-full flex-col items-center justify-center space-y-2'>
											<Skeleton className='h-4 w-3/5' />
											<Skeleton className='h-4 w-3/5' />
										</div>
									</div>
								}
							>
								<LoadingImage
									src={slide.imageUrl}
									className='mb-4 size-full  object-contain object-center '
									alt={slide.title}
									sizes='max-width: 640px) 420px, (max-width: 768px) 720px, (max-width: 1024px) 800px, (max-width: 1280px) 900px, 900px'
								/>
							</Suspense>
						</div>
					</SplideSlide>
				))}
			</Splide>

			<Splide
				style={{
					margin: "1rem",
				}}
				options={{
					fixedWidth: 100,
					fixedHeight: 60,
					isNavigation: true,
					gap: 10,
					focus: "center",
					pagination: true,
					arrows: false,
					cover: true,
					breakpoints: {
						600: {
							fixedWidth: 66,
							fixedHeight: 40,
						},
					},
				}}
				ref={secondaryRef}
			>
				{slides.map((slide, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<SplideSlide key={index} className=''>
						<div className='relative flex  aspect-video w-full flex-col items-center overflow-hidden rounded-md'>
							<Suspense
								fallback={
									<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
										<Skeleton className='aspect-video w-4/5 rounded-xl' />
										<div className='flex w-full flex-col items-center justify-center space-y-2'>
											<Skeleton className='h-4 w-3/5' />
											<Skeleton className='h-4 w-3/5' />
										</div>
										{/* <p className='text-center text-2xl text-tertiary-primary tracking-wider animate-pulse '>
															Loading...
														</p> */}
									</div>
								}
							>
								<LoadingImage
									src={slide.imageUrl}
									className='size-full object-cover '
									alt={slide.title}
									sizes='100px'
								/>
							</Suspense>
						</div>
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};
export default RoyaltyCustomer;
