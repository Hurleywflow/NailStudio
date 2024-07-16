import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useId } from "react";
function SkewScroll(): JSX.Element {
	const keyIndex = useId();
	const IMAGES_DATA = [
		{ id: 65, src: "/Images/nail-art/7.webp" },
		{ id: 66, src: "/Images/nail-art/8.webp" },
		{ id: 67, src: "/Images/nail-art/9.webp" },
		{ id: 68, src: "/Images/nail-art/10.webp" },
		{ id: 69, src: "/Images/nail-art/11.webp" },
		{ id: 70, src: "/Images/nail-art/12.webp" },
		{ id: 71, src: "/Images/nail-art/13.webp" },
		{ id: 72, src: "/Images/nail-art/14.webp" },
		{ id: 73, src: "/Images/nail-art/15.webp" },
		{ id: 74, src: "/Images/nail-art/16.webp" },
		{ id: 75, src: "/Images/nail-art/17.webp" },
		{ id: 76, src: "/Images/nail-art/18.webp" },
		{ id: 77, src: "/Images/nail-art/19.webp" },
		{ id: 78, src: "/Images/nail-art/20.webp" },
		{ id: 79, src: "/Images/nail-art/21.webp" },
		{ id: 80, src: "/Images/nail-art/22.webp" },
		{ id: 81, src: "/Images/nail-art/23.webp" },
		{ id: 82, src: "/Images/nail-art/24.webp" },
		{ id: 83, src: "/Images/nail-art/25.webp" },
		{ id: 84, src: "/Images/nail-art/26.webp" },
		{ id: 85, src: "/Images/nail-art/27.webp" },
		{ id: 86, src: "/Images/nail-art/28.webp" },
		{ id: 87, src: "/Images/nail-art/29.webp" },
		{ id: 88, src: "/Images/nail-art/30.webp" },
	];
	return (
		<div className='flex aspect-square w-full items-center justify-center  md:aspect-video '>
			<div className='relative size-full overflow-hidden bg-background'>
				{/* <!-- For some reason the white vignette effect don't work in this sandbox but if you uncomment the following lines in VSCode, they should work --> */}
				<div className='pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-background to-transparent' />
				<div className='pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-background to-transparent' />
				<div className='pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent' />
				<div className='pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent' />
				<div className='mx-auto grid h-[200px]  w-full animate-skew-scroll grid-cols-2 gap-3 hover:[animation-play-state:paused] sm:grid-cols-3 md:grid-cols-4'>
					{/* <!-- These are all the same components - if you're using React, you can use a map to iterate through all of them --> */}
					{/* map over the data and render a component for each item --> */}
					{IMAGES_DATA.map((img, _) => {
						return (
							<div
								key={keyIndex}
								className=' flex cursor-pointer items-center space-x-1 rounded-md border border-gray-100 p-1 shadow-md transition-all ease-linear hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl '
							>
								{/* avatar */}
								<div className='relative aspect-video w-full overflow-hidden rounded-sm bg-background shadow-sm'>
									<Suspense
										fallback={
											<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background p-10'>
												<Skeleton className='mx-5 aspect-video w-full rounded-xl' />
												<div className='space-y-2'>
													<Skeleton className='mx-auto h-4 w-60 flex-1' />
													<Skeleton className='mx-auto h-4 w-60 flex-1' />
												</div>
											</div>
										}
									>
										<LoadingImage
											src={img.src}
											className='size-full object-cover object-center'
											alt='Carousel image'
											sizes='(max-width:320px) 150px, (max-width:375px) 175px, (max-width:480px) 240px, (max-width:640px) 300px, (max-width:768px) 230px, 150px'
										/>
									</Suspense>
									{/* <Image
										alt='skew infinite scroll'
										src={img.src}
										// width={500}
										// height={500}
										fill
										sizes='150px'
										className='img scale-animation object-cover object-center'
									/> */}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default SkewScroll;

// Skew carousel
// 	keyframes: {
// 			'skew-scroll': {
// 				'0%': {
// 					transform:
// 						'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
// 				},
// 				'100%': {
// 					transform:
// 						'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
// 				},
// 			},
// 		},
// animation: {

// 			// Skew carousel
// 			'skew-scroll': 'skew-scroll 20s infinite linear ',

// 		},
