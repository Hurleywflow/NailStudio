import InfiniteScrollingTextV1 from "@/components/cc/InfiniteScrollingText/InfiniteScrollingText";
import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
// import { MotionDiv } from "@/lib/framer";
import { AuroraBackground } from "./AuroraBackground";

function Hero(): JSX.Element {
	return (
		<div className='w-full'>
			<AuroraBackground>
				{/* <MotionDiv
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className='relative flex flex-col items-center justify-center gap-4 px-4'
				>
					<div className='text-center text-3xl font-bold dark:text-white md:text-7xl'>
						Background lights are cool you know.
					</div>
					<div className='py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl'>
						And this, is chemical burn.
					</div>
				</MotionDiv> */}
				<div className='mx-auto flex size-full flex-col items-start justify-end overflow-hidden'>
					<div className='relative size-full '>
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
								src='/Images/hero/hero.png'
								className='mb-4 size-full  object-cover object-center hover:scale-100 '
								alt='hero'
								sizes='(max-width: 430px) 420px,(max-width: 640px) 620px, (max-width: 768px) 740px, (max-width: 1024px) 1000px, 1280px'
							/>
						</Suspense>
					</div>
					<div className='absolute bottom-10 w-full max-w-screen-2xl'>
						<InfiniteScrollingTextV1 />
					</div>
				</div>
			</AuroraBackground>
		</div>
	);
}
export default Hero;
