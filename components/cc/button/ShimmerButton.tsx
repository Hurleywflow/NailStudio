/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { MotionButton } from "@/lib/framer";
import { cn } from "@/lib/utils";
import type React from "react";

type ShimmerButtonProps = {
	className?: string;
	children?: React.ReactNode;
};

const ShimmerButton = ({
	className,
	children,
}: ShimmerButtonProps): JSX.Element => {
	return (
		<MotionButton
			className='inline-flex overflow-hidden rounded-lg bg-[linear-gradient(120deg,#000000_calc(var(--shimmer-button-x)-25%),#f6f6f6_var(--shimmer-button-x),#000000_calc(var(--shimmer-button-x)+25%))] [--shimmer-button-x:0%]'
			initial={
				{
					scale: 1,
					"--shimmer-button-x": "-100%",
				} as any
			}
			animate={
				{
					"--shimmer-button-x": "200%",
				} as any
			}
			transition={{
				stiffness: 500,
				damping: 20,
				type: "spring",
				"--shimmer-button-x": {
					duration: 3,
					repeat: Number.POSITIVE_INFINITY,
					ease: [0.445, 0.05, 0.55, 0.95],
				},
			}}
			whileTap={{
				scale: 0.95,
			}}
			whileHover={{
				scale: 1.05,
			}}
		>
			<Button
				className={cn(
					"m-0.5 h-16 w-[90vw] max-w-screen-md px-4 py-1 backdrop-blur-sm md:h-20 lg:h-24",
					className,
				)}
			>
				{children}
			</Button>
		</MotionButton>
	);
};

export default ShimmerButton;
