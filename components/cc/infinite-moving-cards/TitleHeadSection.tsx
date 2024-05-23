import { H4 } from "@/components/cc/text-utils/TextUtils";
import { MotionDiv } from "@/lib/framer";
import { cn } from "@/lib/utils";
import type React from "react";

type Props = {
	className?: string;
	children: React.ReactNode;
};

function TitleHeadSection({
	className,
	children,
}: Readonly<Props>): JSX.Element {
	return (
		<MotionDiv
			className='my-10  flex w-[90%] max-w-screen-lg  flex-col items-center justify-center gap-2 text-base font-normal text-muted-foreground'
			initial={{ opacity: 0.3, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.3,
				duration: 0.9,
				ease: "easeInOut",
			}}
		>
			<H4
				className={cn(
					"bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent",
					className,
				)}
			>
				{children}
			</H4>
		</MotionDiv>
	);
}
export default TitleHeadSection;
