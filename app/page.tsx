/* eslint-disable tailwindcss/no-contradicting-classname */
import AnimatedText from "@/components/cc/NailStudioTitle/AnimatedText";
import TextGenerateEffectDemo from "@/components/cc/TextGenerateEffect/TextGenerateEffectDemo";
import RoyaltyCustomer from "@/components/cc/carousel/RoyaltyCustomer";
import { Container } from "@/components/cc/container/container";
import Hero from "@/components/cc/hero/Hero";
import Contact from "@/components/cc/imageSlider/Contact";
import Manicure from "@/components/cc/images-utils/verticalScroll/Manicure";
import NailArt from "@/components/cc/images-utils/verticalScroll/NailArt";
import Pedicure from "@/components/cc/images-utils/verticalScroll/Padicure";
import TitleHeadSection from "@/components/cc/infinite-moving-cards/TitleHeadSection";
import Loading from "@/components/cc/loading/Loading";
import MarqueeDemo from "@/components/cc/magicui/maquee/MarqueeDemo";
import NailCards from "@/components/cc/nailCards/NailCards";
import SkewScroll from "@/components/cc/skewScroll/SkewScroll";
import { Suspense, useMemo } from "react";
const Home = (): JSX.Element => {
	// const Home = async (): JSX.Element => {
	// 	await new Promise((resolve) => {
	// 		setTimeout(resolve, 5000);
	// 	});
	const AnimatedTextMemo = useMemo(() => {
		return AnimatedText;
	}, []);
	const SkewScrollMemo = useMemo(() => {
		return SkewScroll;
	}, []);
	const NailCardsMemo = useMemo(() => {
		return NailCards;
	}, []);
	const RoyaltyCustomerMemo = useMemo(() => {
		return RoyaltyCustomer;
	}, []);
	return (
		<main className='m-0 h-fit w-full  p-0'>
			<Container className='flex flex-col'>
				{/* Hero */}
				<div
					className='flex h-fit min-h-screen w-full items-center justify-center'
					id='home'
				>
					<Suspense fallback={<Loading className='h-fit min-h-screen' />}>
						<Hero />
					</Suspense>
				</div>
				{/* NailCards: Manicure, Pedicure, art */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center gap-10 overflow-hidden'>
					<Suspense fallback={<Loading className='h-fit min-h-screen' />}>
						<TitleHeadSection>Our Service Category</TitleHeadSection>
						<NailCardsMemo />
					</Suspense>
				</div>
				{/* OUr Service Gallery */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center gap-10'>
					<Suspense fallback={<Loading className='h-fit' />}>
						<TitleHeadSection>Our Service Gallery</TitleHeadSection>
						<SkewScrollMemo />
					</Suspense>
				</div>
				{/* NailStudio title */}
				<div className='mt-20 flex h-fit w-full items-center justify-center'>
					<Suspense fallback={<Loading className='h-fit' />}>
						<AnimatedTextMemo
							el='span'
							text={["NailStudio"]}
							className='bg-gradient-to-br from-foreground to-primary bg-clip-text text-6xl font-semibold text-transparent  md:text-7xl lg:text-8xl'
							repeatDelay={5000}
						/>
					</Suspense>
				</div>
				{/* Intro */}
				<div className='my-10 flex h-svh w-full items-center justify-center px-10 md:h-80 lg:max-w-screen-lg'>
					<Suspense fallback={<Loading className='h-fit' />}>
						<TextGenerateEffectDemo />
					</Suspense>
				</div>
				{/* Manicure */}
				<div className='relative flex h-fit  w-full flex-col items-center justify-center overflow-hidden'>
					<div
						className='absolute inset-0 -z-10 bg-background bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-neutral-950'
						id='manicure'
					>
						<div className='absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#9e83e2,transparent)]' />
					</div>
					<Suspense fallback={<Loading className='h-fit' />}>
						<Manicure />
					</Suspense>
				</div>
				{/* Pedicure */}
				<div className='relative flex h-fit  w-full flex-col items-center justify-center overflow-hidden bg-background bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] dark:bg-black'>
					<div
						className='absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'
						id='pedicure'
					/>
					<div className='absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
					<Suspense fallback={<Loading className='h-fit' />}>
						<Pedicure />
					</Suspense>
				</div>
				{/* Nail Art */}
				<div className='relative flex h-fit  w-full flex-col items-center justify-center overflow-hidden '>
					<div
						className='absolute inset-0 -z-10 size-full bg-background bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-950'
						id='nail-art'
					>
						<div className='absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#7eaeca,transparent)]' />
					</div>
					<Suspense fallback={<Loading className='h-fit' />}>
						<NailArt />
					</Suspense>
				</div>
				{/* Royalty Customer */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center'>
					<Suspense fallback={<Loading className='h-fit' />}>
						<TitleHeadSection>Delighted Customers</TitleHeadSection>
						<RoyaltyCustomerMemo />
					</Suspense>
				</div>
				{/* Customer Feedback */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center'>
					<Suspense fallback={<Loading className='h-fit' />}>
						<TitleHeadSection>
							Receive Trustworthy And Positive Customer's Feedback
						</TitleHeadSection>
					</Suspense>
					<Suspense fallback={<Loading className='h-fit' />}>
						<MarqueeDemo />
					</Suspense>
				</div>
				{/* Contact */}
				<div className='mt-20 h-fit w-full' id='contact'>
					<Suspense fallback={<Loading className='h-fit' />}>
						<Contact />
					</Suspense>
				</div>
			</Container>
		</main>
	);
};
export default Home;
