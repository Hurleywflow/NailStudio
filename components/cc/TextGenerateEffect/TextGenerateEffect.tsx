import { MotionDiv, MotionSpan } from "@/lib/framer";
import { cn } from "@/lib/utils";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useId } from "react";

const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}): JSX.Element => {
	const [scope, animate] = useAnimate();
	const keyID = useId();
	const wordsArray = words.split(" ");
	useEffect(() => {
		void animate(
			"span",
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.03),
			},
		);
	}, [animate]);

	const renderWords = (): JSX.Element => {
		return (
			<MotionDiv ref={scope}>
				{wordsArray.map((word, _idx) => {
					return (
						<MotionSpan
							key={keyID}
							className='text-foreground-700 shadow-foreground-400 text-balance text-center text-xl opacity-0 text-shadow-lg dark:text-foreground md:text-2xl'
						>
							{word}{" "}
						</MotionSpan>
					);
				})}
			</MotionDiv>
		);
	};

	return (
		<div className={cn("", className)}>
			<div className='mt-4'>
				<div className=' text-balance text-2xl leading-snug tracking-wide'>
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
export default TextGenerateEffect;
