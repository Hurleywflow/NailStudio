/* eslint-disable tailwindcss/no-contradicting-classname */
import Container from "@/components/cc/container/container";
import Loading from "@/components/cc/loading/Loading";
import dynamic from "next/dynamic";

const DynamicBoxRevealDemo = dynamic(
	async () => import("@/components/cc/magicui/boxTextReveal/boxTextRevealDemo"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);

const DynamicHero = dynamic(() => import("@/components/cc/hero/Hero"), {
	ssr: true, // Set to true if you want server-side rendering
	loading: () => <Loading />, // Display the loading component while loading
});

const DynamicAnimatedText = dynamic(
	async () => import("@/components/cc/NailStudioTitle/AnimatedText"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);

const DynamicRoaltyCustomer = dynamic(
	async () => import("@/components/cc/carousel/RoyaltyCustomer"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);
const DynamicContact = dynamic(
	async () => import("@/components/cc/imageSlider/Contact"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />, // Display the loading component while loading
	},
);
const DynamicManicure = dynamic(
	async () => import("@/components/cc/images-utils/verticalScroll/Manicure"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);

const DynamicPedicure = dynamic(
	async () => import("@/components/cc/images-utils/verticalScroll/Padicure"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);
const DynamicNailArt = dynamic(
	async () => import("@/components/cc/images-utils/verticalScroll/NailArt"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);
import TitleHeadSection from "@/components/cc/infinite-moving-cards/TitleHeadSection";
const DynamicMarqueeDemo = dynamic(
	async () => import("@/components/cc/magicui/maquee/MarqueeDemo"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);
const DynamicNailCards = dynamic(
	async () => import("@/components/cc/nailCards/NailCards"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);
const DynamicSkewScroll = dynamic(
	async () => import("@/components/cc/skewScroll/SkewScroll"),
	{
		ssr: true, // Set to true if you want server-side rendering
		loading: () => <Loading />,
	},
);
const Home = (): JSX.Element => {
	// const Home = async (): JSX.Element => {
	// 	await new Promise((resolve) => {
	// 		setTimeout(resolve, 5000);
	// 	});

	return (
		<main className='h-fit w-full'>
			<Container className='flex flex-col'>
				{/* Hero */}
				<div
					className='flex h-svh w-full items-center justify-center'
					id='home'
				>
					<DynamicHero />
				</div>
				{/* NailCards: Manicure, Pedicure, art */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center gap-10 overflow-hidden'>
					<TitleHeadSection>Our Service Category</TitleHeadSection>
					<DynamicNailCards />
				</div>
				{/* Our Service Gallery */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center gap-10'>
					<TitleHeadSection>Our Service Gallery</TitleHeadSection>
					<DynamicSkewScroll />
				</div>
				{/* NailStudio title */}
				<div className='mt-20 flex h-fit w-full items-center justify-center'>
					<DynamicAnimatedText
						el='span'
						text={["NailStudio"]}
						className='bg-gradient-to-br from-foreground to-primary bg-clip-text text-6xl font-semibold text-transparent  md:text-7xl lg:text-8xl'
						repeatDelay={5000}
					/>
				</div>
				{/* Intro */}
				<div className='my-10 flex h-fit w-full items-center justify-center px-10 md:h-96 lg:max-w-screen-lg'>
					<DynamicBoxRevealDemo />
				</div>
				{/* Manicure */}
				<div className='relative flex h-fit  w-full flex-col items-center justify-center overflow-hidden'>
					<div
						className='absolute inset-0 -z-10 bg-background bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-neutral-950'
						id='manicure'
					>
						<div className='absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#9e83e2,transparent)]' />
					</div>
					<DynamicManicure />
				</div>
				{/* Pedicure */}
				<div className='relative flex h-fit  w-full flex-col items-center justify-center overflow-hidden bg-background bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] dark:bg-black'>
					<div
						className='absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'
						id='pedicure'
					/>
					<div className='absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
					<DynamicPedicure />
				</div>
				{/* Nail Art */}
				<div className='relative flex h-fit  w-full flex-col items-center justify-center overflow-hidden '>
					<div
						className='absolute inset-0 -z-10 size-full bg-background bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-950'
						id='nail-art'
					>
						<div className='absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#7eaeca,transparent)]' />
					</div>
					<DynamicNailArt />
				</div>
				{/* Royalty Customer */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center'>
					<TitleHeadSection>Delighted Customers</TitleHeadSection>
					<DynamicRoaltyCustomer />
				</div>
				{/* Customer Feedback */}
				<div className='mt-20 flex h-fit w-full flex-col items-center justify-center'>
					<TitleHeadSection>
						Receive Trustworthy And Positive Customer's Feedback
					</TitleHeadSection>
					<DynamicMarqueeDemo />
				</div>
				{/* Contact */}
				<div className='mt-20 h-fit w-full' id='contact'>
					<DynamicContact />
				</div>
			</Container>
		</main>
	);
};
export default Home;
