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
	{ id: 1, src: "/Images/nail-art/1.webp", height: 400, width: 400 },
	{ id: 2, src: "/Images/nail-art/2.webp", height: 400, width: 400 },
	{ id: 3, src: "/Images/nail-art/3.webp", height: 400, width: 400 },
	{ id: 4, src: "/Images/nail-art/4.webp", height: 400, width: 400 },
	{ id: 5, src: "/Images/nail-art/5.webp", height: 400, width: 400 },
	{ id: 6, src: "/Images/nail-art/6.webp", height: 400, width: 400 },
	{ id: 7, src: "/Images/nail-art/7.webp", height: 400, width: 400 },
	{ id: 8, src: "/Images/nail-art/8.webp", height: 400, width: 400 },
	{ id: 9, src: "/Images/nail-art/9.webp", height: 400, width: 400 },
	{ id: 10, src: "/Images/nail-art/10.webp", height: 400, width: 400 },
	{ id: 11, src: "/Images/nail-art/11.webp", height: 400, width: 400 },
	{ id: 12, src: "/Images/nail-art/12.webp", height: 400, width: 400 },
	{ id: 13, src: "/Images/nail-art/13.webp", height: 400, width: 400 },
	{ id: 14, src: "/Images/nail-art/14.webp", height: 400, width: 400 },
	{ id: 15, src: "/Images/nail-art/15.webp", height: 400, width: 400 },
	{ id: 16, src: "/Images/nail-art/16.webp", height: 400, width: 400 },
	{ id: 17, src: "/Images/nail-art/17.webp", height: 400, width: 400 },
	{ id: 18, src: "/Images/nail-art/18.webp", height: 400, width: 400 },
	{ id: 19, src: "/Images/nail-art/19.webp", height: 400, width: 400 },
	{ id: 20, src: "/Images/nail-art/20.webp", height: 400, width: 400 },
	{ id: 21, src: "/Images/nail-art/21.webp", height: 400, width: 400 },
	{ id: 22, src: "/Images/nail-art/22.webp", height: 400, width: 400 },
	{ id: 23, src: "/Images/nail-art/23.webp", height: 400, width: 400 },
	{ id: 24, src: "/Images/nail-art/24.webp", height: 400, width: 400 },
	{ id: 25, src: "/Images/nail-art/25.webp", height: 400, width: 400 },
	{ id: 26, src: "/Images/nail-art/26.webp", height: 400, width: 400 },
	{ id: 27, src: "/Images/nail-art/27.webp", height: 400, width: 400 },
	{ id: 28, src: "/Images/nail-art/28.webp", height: 400, width: 400 },
	{ id: 29, src: "/Images/nail-art/29.webp", height: 400, width: 400 },
	{ id: 30, src: "/Images/nail-art/30.webp", height: 400, width: 400 },
];

function NailArt(): JSX.Element {
	return (
		<div className='flex flex-col items-center'>
			<MotionDiv
				className='mb-20 mt-10  flex w-[90%] max-w-screen-lg  flex-col items-center justify-center gap-2 text-base font-normal '
				initial={{ opacity: 0.3, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.9,
					ease: "easeInOut",
				}}
			>
				<TitleHeadSection>Nail Art</TitleHeadSection>
				<P>
					Nail art has been a timeless form of self-expression, spanning
					centuries and encompassing various mediums such as painting,
					sculpture, and photography. In contrast, manicures and pedicures
					represent beauty treatments that involve nail trimming, shaping, and
					polishing to enhance their appearance. These procedures include the
					removal of cuticles and softening of the skin to achieve a smooth and
					polished finish. These treatments are a popular method for
					self-pampering and nail maintenance. Our professional nail technicians
					offer a wide range of nail art styles to cater to your individual
					preferences and needs.
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
export default NailArt;
