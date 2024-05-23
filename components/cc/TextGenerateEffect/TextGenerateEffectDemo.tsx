"use client";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
const TextGenerateEffect = dynamic(async () => import("./TextGenerateEffect"));

const TextGenerateEffectDemo = (): JSX.Element => {
	const TextGenerateEffectMemo = useMemo(() => {
		return TextGenerateEffect;
	}, []);
	const ref = useRef(null);
	const isInView = useInView(ref);
	const words =
		"Looking for a truly exhilarating experience that will leave you feeling fully rejuvenated? Look no further! Our Nail Studio service is here to pamper you in style, giving you the chance to kick back, relax, and indulge in some much-needed self-care. Our team of experts is on hand to provide you with the ultimate manicure and pedicure experience, complete with a tranquil atmosphere and top-of-the-line services. But that's not all - we also offer event services that are perfect for birthdays, bridal parties, baby showers, graduations, and more. Whatever your needs, we're here to make sure you have an unforgettable time. So why wait? Come join us and let us help you look and feel your very best!";

	return (
		<div ref={ref}>
			{isInView && <TextGenerateEffectMemo words={words} className='' />}
		</div>
	);
};
export default TextGenerateEffectDemo;
