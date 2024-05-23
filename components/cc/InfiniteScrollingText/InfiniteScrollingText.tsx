/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const InfiniteScrollingTextV1 = (): JSX.Element => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const [rotation, setRotation] = useState(0);

	const maxRotation = 8;
	useEffect(() => {
		const handleMouseMove = (e: { clientX: number; clientY: any }): void => {
			setCursorPosition({ x: e.clientX, y: e.clientY });

			const midpoint = window.innerWidth / 2;

			const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
			const rotation = (distanceFromMidpoint / midpoint) * maxRotation;

			setRotation(e.clientX > midpoint ? rotation : -rotation);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className=' flex w-full overflow-hidden'>
			{/* <div className='pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent' />
			<div className='pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent' /> */}
			<div
				className={`following-tooltip duration-[0.4s] fixed z-[99] flex h-8 w-56 items-center justify-center rounded-3xl bg-primary px-12 py-[1.4rem]  font-bold text-primary-foreground transition-opacity ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
				style={{
					top: `${cursorPosition.y}px`,
					left: `${cursorPosition.x}px`,
					transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
				}}
			>
				<p>Welcome to Nail Studio</p>
			</div>
			<div className='w-vw relative flex overflow-hidden'>
				<motion.div
					className='whitespace-nowrap '
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
					animate={{
						x: [0, -1000],
						transition: {
							repeat: Number.POSITIVE_INFINITY,
							duration: 20,
							ease: "linear",
						},
					}}
				>
					<Link href='/components'>
						<div className='w-full '>
							<h1 className=' m-0 w-full  grow cursor-pointer text-[7rem] font-[500] text-stone-400 transition-all  hover:text-stone-300 dark:text-stone-300 dark:hover:text-stone-200  md:text-[8rem] lg:text-[10rem]'>
								Indulge in a rejuvenating experience with our Nail Studio
								service. Let us take care of you while you relax. - Indulge in a
								rejuvenating experience with our Nail Studio service. Let us
								take care of you while you relax. - Indulge in a rejuvenating
								experience with our Nail Studio service. Let us take care of you
								while you relax. -
							</h1>
						</div>
					</Link>
				</motion.div>
			</div>
		</div>
	);
};
export default InfiniteScrollingTextV1;
