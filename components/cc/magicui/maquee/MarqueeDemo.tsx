import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import LoadingImage from "../../loading-image/LoadingImage";
import Marquee from "./Marquee";

type CardType = {
	src: string;
	id: number;
};
const testimonials: CardType[] = [
	{ id: 1, src: "/Images/feedback/1.webp" },
	{ id: 2, src: "/Images/feedback/2.webp" },
	{ id: 3, src: "/Images/feedback/3.webp" },
	{ id: 4, src: "/Images/feedback/4.webp" },
	{ id: 5, src: "/Images/feedback/5.webp" },
	{ id: 6, src: "/Images/feedback/6.webp" },
	{ id: 7, src: "/Images/feedback/7.webp" },
	{ id: 8, src: "/Images/feedback/8.webp" },
	{ id: 9, src: "/Images/feedback/9.webp" },
	{ id: 10, src: "/Images/feedback/10.webp" },
	{ id: 11, src: "/Images/feedback/11.webp" },
	{ id: 12, src: "/Images/feedback/12.webp" },
	{ id: 13, src: "/Images/feedback/13.webp" },
	{ id: 14, src: "/Images/feedback/14.webp" },
	{ id: 15, src: "/Images/feedback/15.webp" },
	{ id: 16, src: "/Images/feedback/16.webp" },
	{ id: 17, src: "/Images/feedback/17.webp" },
	{ id: 18, src: "/Images/feedback/18.webp" },
	{ id: 19, src: "/Images/feedback/19.webp" },
	{ id: 20, src: "/Images/feedback/20.webp" },

];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
	src,
}: {
	src: CardType["src"];
}): JSX.Element => {
	return (
		<Card className='relative h-52 w-[350px] max-w-full cursor-pointer overflow-hidden bg-[#202020] md:w-[450px]'>
			<CardContent>
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
						src={src}
						className='size-full object-contain object-center'
						alt='Carousel image'
						sizes='380px'
					/>
				</Suspense>
			</CardContent>
		</Card>
	);
};

const MarqueeDemo = (): JSX.Element => {
	return (
		<div className='relative flex size-full flex-col items-center justify-center gap-2 overflow-hidden rounded-md p-2'>
			<Marquee pauseOnHover className='[--duration:190s]'>
				{firstRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className=' w-full border-t-4 border-dashed border-border' />
			<Marquee reverse pauseOnHover className='[--duration:190s]'>
				{secondRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background md:w-1/4' />
			<div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background md:w-1/4' />
		</div>
	);
};

export default MarqueeDemo;
