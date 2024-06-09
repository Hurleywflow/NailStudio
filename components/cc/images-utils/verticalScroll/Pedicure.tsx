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
	{ id: 1, src: "/Images/pedicure/1.webp", height: 400, width: 400 },
	{ id: 2, src: "/Images/pedicure/2.webp", height: 400, width: 400 },
	{ id: 3, src: "/Images/pedicure/3.webp", height: 400, width: 400 },
	{ id: 4, src: "/Images/pedicure/4.webp", height: 400, width: 400 },
	{ id: 5, src: "/Images/pedicure/5.webp", height: 400, width: 400 },
	{ id: 6, src: "/Images/pedicure/6.webp", height: 400, width: 400 },
	{ id: 7, src: "/Images/pedicure/7.webp", height: 400, width: 400 },
	{ id: 8, src: "/Images/pedicure/8.webp", height: 400, width: 400 },
	{ id: 9, src: "/Images/pedicure/9.webp", height: 400, width: 400 },
	{ id: 10, src: "/Images/pedicure/10.webp", height: 400, width: 400 },
	{ id: 11, src: "/Images/pedicure/11.webp", height: 400, width: 400 },
	{ id: 12, src: "/Images/pedicure/12.webp", height: 400, width: 400 },
	{ id: 13, src: "/Images/pedicure/13.webp", height: 400, width: 400 },
	{ id: 14, src: "/Images/pedicure/14.webp", height: 400, width: 400 },
	{ id: 15, src: "/Images/pedicure/15.webp", height: 400, width: 400 },
	{ id: 16, src: "/Images/pedicure/16.webp", height: 400, width: 400 },
	{ id: 17, src: "/Images/pedicure/17.webp", height: 400, width: 400 },
	{ id: 18, src: "/Images/pedicure/18.webp", height: 400, width: 400 },
];

function Pedicure(): JSX.Element {
	return (
		<div className='flex h-fit w-full flex-col items-center'>
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
				<TitleHeadSection>Pedicure</TitleHeadSection>
				<P>
					Maintaining the hygiene and growth of toenails is crucial for overall
					foot health. A pedicure is a highly effective beauty treatment that
					addresses issues like ingrown and brittle nails and prevents the
					accumulation of harmful germs. It’s essential to guarantee that the
					tools and supplies used during a pedicure are thoroughly clean and
					sterile to minimise the risk of infections. We offer a range of
					pedicure styles to meet your needs, provided by our professional nail
					technicians.
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
export default Pedicure;
