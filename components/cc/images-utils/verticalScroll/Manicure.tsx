import { P } from "@/components/cc/text-utils/TextUtils";
import { MotionDiv } from "@/lib/framer";
import TitleHeadSection from "../../infinite-moving-cards/TitleHeadSection";
import ParallaxScroll from "./ParallaxScroll";

type CardType = {
	src: string;
	id: number;
	height: number;
	width: number;
};
const IMAGES_DATA: CardType[] = [
	{ id: 1, src: "/Images/manicure/1.webp", height: 400, width: 400 },
	{ id: 2, src: "/Images/manicure/2.webp", height: 400, width: 400 },
	{ id: 3, src: "/Images/manicure/3.webp", height: 400, width: 400 },
	{ id: 4, src: "/Images/manicure/4.webp", height: 400, width: 400 },
	{ id: 5, src: "/Images/manicure/5.webp", height: 400, width: 400 },
	{ id: 6, src: "/Images/manicure/6.webp", height: 400, width: 400 },
	{ id: 7, src: "/Images/manicure/7.webp", height: 400, width: 400 },
	{ id: 8, src: "/Images/manicure/8.webp", height: 400, width: 400 },
	{ id: 9, src: "/Images/manicure/9.webp", height: 400, width: 400 },
	{ id: 10, src: "/Images/manicure/10.webp", height: 400, width: 400 },
	{ id: 11, src: "/Images/manicure/11.webp", height: 400, width: 400 },
	{ id: 12, src: "/Images/manicure/12.webp", height: 400, width: 400 },
	{ id: 13, src: "/Images/manicure/13.webp", height: 400, width: 400 },
	{ id: 14, src: "/Images/manicure/14.webp", height: 400, width: 400 },
	{ id: 15, src: "/Images/manicure/15.webp", height: 400, width: 400 },
	{ id: 16, src: "/Images/manicure/16.webp", height: 400, width: 400 },
	{ id: 17, src: "/Images/manicure/17.webp", height: 400, width: 400 },
	{ id: 18, src: "/Images/manicure/18.webp", height: 400, width: 400 },
	{ id: 19, src: "/Images/manicure/19.webp", height: 400, width: 400 },
	{ id: 20, src: "/Images/manicure/20.webp", height: 400, width: 400 },
	{ id: 21, src: "/Images/manicure/21.webp", height: 400, width: 400 },
	{ id: 22, src: "/Images/manicure/22.webp", height: 400, width: 400 },
	{ id: 23, src: "/Images/manicure/23.webp", height: 400, width: 400 },
	{ id: 24, src: "/Images/manicure/24.webp", height: 400, width: 400 },
	{ id: 25, src: "/Images/manicure/25.webp", height: 400, width: 400 },
	// { id: 26, src: "/Images/manicure/26.webp", height: 400, width: 400 },
	// { id: 27, src: "/Images/manicure/27.webp", height: 400, width: 400 },
	// { id: 28, src: "/Images/manicure/28.webp", height: 400, width: 400 },
	// { id: 29, src: "/Images/manicure/29.webp", height: 400, width: 400 },
	// { id: 30, src: "/Images/manicure/30.webp", height: 400, width: 400 },
	// { id: 31, src: "/Images/manicure/31.webp", height: 400, width: 400 },
	// { id: 32, src: "/Images/manicure/32.webp", height: 400, width: 400 },
	// { id: 33, src: "/Images/manicure/33.webp", height: 400, width: 400 },
	// { id: 34, src: "/Images/manicure/34.webp", height: 400, width: 400 },
	// { id: 35, src: "/Images/manicure/35.webp", height: 400, width: 400 },
	// { id: 36, src: "/Images/manicure/36.webp", height: 400, width: 400 },
	// { id: 37, src: "/Images/manicure/37.webp", height: 400, width: 400 },
	// { id: 38, src: "/Images/manicure/38.webp", height: 400, width: 400 },
	// { id: 39, src: "/Images/manicure/39.webp", height: 400, width: 400 },
	// { id: 40, src: "/Images/manicure/40.webp", height: 400, width: 400 },
	// { id: 41, src: "/Images/manicure/41.webp", height: 400, width: 400 },
	// { id: 42, src: "/Images/manicure/42.webp", height: 400, width: 400 },
	// { id: 43, src: "/Images/manicure/43.webp", height: 400, width: 400 },
	// { id: 44, src: "/Images/manicure/44.webp", height: 400, width: 400 },
	// { id: 45, src: "/Images/manicure/45.webp", height: 400, width: 400 },
	// { id: 46, src: "/Images/manicure/46.webp", height: 400, width: 400 },
	// { id: 47, src: "/Images/manicure/47.webp", height: 400, width: 400 },
	// { id: 48, src: "/Images/manicure/48.webp", height: 400, width: 400 },
	// { id: 49, src: "/Images/manicure/49.webp", height: 400, width: 400 },
	// { id: 50, src: "/Images/manicure/50.webp", height: 400, width: 400 },
	// { id: 51, src: "/Images/manicure/51.webp", height: 400, width: 400 },
	// { id: 52, src: "/Images/manicure/52.webp", height: 400, width: 400 },
	// { id: 53, src: "/Images/manicure/53.webp", height: 400, width: 400 },
	// { id: 54, src: "/Images/manicure/54.webp", height: 400, width: 400 },
	// { id: 55, src: "/Images/manicure/55.webp", height: 400, width: 400 },
	// { id: 56, src: "/Images/manicure/56.webp", height: 400, width: 400 },
	// { id: 57, src: "/Images/manicure/57.webp", height: 400, width: 400 },
	// { id: 58, src: "/Images/manicure/58.webp", height: 400, width: 400 },
];

function Manicure(): JSX.Element {
	return (
		<div className='flex h-fit w-full flex-col items-center'>
			<MotionDiv
				className='mb-20 mt-10  flex w-[90%] max-w-screen-lg  flex-col items-center justify-center gap-2 text-base font-normal'
				initial={{ opacity: 0.3, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.9,
					ease: "easeInOut",
				}}
			>
				<TitleHeadSection>Manicure</TitleHeadSection>
				<P>
					When it comes to getting a manicure, selecting a spa that strictly
					adheres to hygiene standards to eliminate any risk of infection from
					the tools and products used is essential. A manicure treatment
					typically involves the use of paraffin wax, oils, and lotions to
					exfoliate the skin, moisturise the cuticles, and soften the nails.
					This process removes dry cells, leaving your hands smooth and
					rejuvenated. If you’re looking to pamper yourself and give your hands
					the care they deserve, a manicure from a reputable spa is the perfect
					choice. Our professional nail technicians offer a variety of manicure
					styles to meet your needs.
				</P>
			</MotionDiv>
			<div className='relative size-full'>
				{/* <div className='pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-background to-transparent' /> */}
				<div className='pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-background to-transparent' />
				<ParallaxScroll images={IMAGES_DATA} />
			</div>
		</div>
	);
}
export default Manicure;
