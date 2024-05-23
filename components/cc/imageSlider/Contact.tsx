"use client";
import ShimmerButton from "@/components/cc/button/ShimmerButton";
import LoadingImage from "@/components/cc/loading-image/LoadingImage";
import { H6 } from "@/components/cc/text-utils/TextUtils";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";
import TitleHeadSection from "../infinite-moving-cards/TitleHeadSection";
import { ImagesSlider } from "./ImagesSlider";

function Contact(): JSX.Element {
	const images = [
		"/Images/contact/1.webp",
		"/Images/contact/2.webp",
		// "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];
	return (
		<div className='flex h-fit w-full flex-col items-center justify-center'>
			<TitleHeadSection>Contact</TitleHeadSection>
			<ImagesSlider className='h-80 rounded-md md:h-[25rem]' images={images}>
				<motion.div
					initial={{ opacity: 0.3, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.9,
						ease: "easeInOut",
					}}
					className='z-20 flex flex-col items-center justify-center gap-10'
				>
					<H6 className='text-stone-300'>
						<i>
							What are you looking for? <br /> Let us provide a service that
							leaves you feeling fully rejuvenated.
						</i>
					</H6>
					<Link href='tel:+12565462553'>
						<ShimmerButton className='text-center text-2xl font-bold md:text-6xl'>
							Book now
						</ShimmerButton>
					</Link>
				</motion.div>
			</ImagesSlider>
			<div className='relative mt-20 h-40 w-full overflow-hidden rounded-md md:h-60'>
				<Link
					href='https://www.google.com/maps/dir//Nail+Studio+1001+Rainbow+Dr+%2335+Gadsden,+AL+35901+United+States/@33.9950333,-86.0083732,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x888a396362bd9259:0x11749f1074b66395!2m2!1d-86.0077295!2d33.9943662?entry=ttu'
					target='_blank'
				>
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
							src='/Images/contact/map.webp'
							className='object-cover object-center'
							alt='Carousel image'
							sizes='max-width: 640px) 320px, (max-width: 768px) 650px, (max-width: 1024px) 900px, (max-width: 1280px) 1200px, (max-width: 1536px) 1500px, 1280px'
						/>
					</Suspense>
				</Link>
			</div>
		</div>
	);
}
export default Contact;
