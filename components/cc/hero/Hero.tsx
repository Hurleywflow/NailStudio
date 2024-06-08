import InfiniteScrollingTextV1 from "@/components/cc/InfiniteScrollingText/InfiniteScrollingText";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Suspense } from "react";
// import { MotionDiv } from "@/lib/framer";
import { AuroraBackground } from "./AuroraBackground";

/**
 * Renders the Hero component, which includes an AuroraBackground, a LoadingImage, and an InfiniteScrollingTextV1 component.
 * The Hero component is responsible for displaying the main hero section of the application, including the background animation and the main content.
 * @returns {JSX.Element} The rendered Hero component.
 */
function Hero(): JSX.Element {
	return (
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
			<div className='mx-auto flex h-[100vh] w-screen max-w-screen-2xl flex-col items-start justify-end overflow-hidden'>
				<div className='relative w-screen aspect-[910/694] max-w-screen-2xl  '>
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
						<Image
							src='/Images/hero/hero.png'
							className='object-center'
							alt='hero'
							priority
							fill
							sizes='(max-width: 430px) 380px,(max-width: 640px) 520px, (max-width: 768px) 680px, (max-width: 1024px) 900px, 1100px'
						/>
					</Suspense>
				</div>
				<div className='absolute bottom-10 w-full max-w-screen-2xl md:bottom-14'>
					<InfiniteScrollingTextV1 />
				</div>
			</div>
		</AuroraBackground>
	);
}
export default Hero;
