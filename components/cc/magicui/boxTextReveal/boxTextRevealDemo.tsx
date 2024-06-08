import { H6 } from "../../text-utils/TextUtils";
import BoxReveal from "./BoxTextReveal";

async function BoxRevealDemo() {
	return (
		<div className='h-fit w-full items-center justify-center overflow-hidden '>
			<BoxReveal boxColor={"#e6bfff"} duration={0.9}>
				<H6>
					{" "}
					Looking for a truly exhilarating experience that will leave you
					feeling fully rejuvenated? Look no further! Our Nail Studio service is
					here to pamper you in style, giving you the chance to kick back,
					relax, and indulge in some much-needed self-care. Our team of experts
					is on hand to provide you with the ultimate manicure and pedicure
					experience, complete with a tranquil atmosphere and top-of-the-line
					services. But that's not all - we also offer event services that are
					perfect for birthdays, bridal parties, baby showers, graduations, and
					more. Whatever your needs, we're here to make sure you have an
					unforgettable time. So why wait? Come join us and let us help you look
					and feel your very best!{" "}
				</H6>
			</BoxReveal>
		</div>
	);
}

export default BoxRevealDemo;
