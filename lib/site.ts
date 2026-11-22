export type Service = {
	slug: string;
	index: string;
	title: string;
	summary: string;
	copy: string;
	image: string;
	alt: string;
	href: string;
};

export type GalleryImage = {
	src: string;
	alt: string;
};

export type Review = {
	name: string;
	quote: string;
	stars: number;
};

export const business = {
	name: "Nail Studio",
	street: "1001 Rainbow Dr #35",
	city: "Gadsden",
	region: "AL",
	postal: "35901",
	address: "1001 Rainbow Dr #35, Gadsden, AL 35901",
	phone: "+1 256 546 2553",
	phoneHref: "tel:+12565462553",
	mapsUrl:
		"https://www.google.com/maps/dir//Nail+Studio+1001+Rainbow+Dr+%2335+Gadsden,+AL+35901+United+States/@33.9950333,-86.0083732,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x888a396362bd9259:0x11749f1074b66395!2m2!1d-86.0077295!2d33.9943662?entry=ttu",
} as const;

export const navLinks = [
	{ label: "Services", href: "#services" },
	{ label: "Manicure", href: "#manicure" },
	{ label: "Pedicure", href: "#pedicure" },
	{ label: "Nail Art", href: "#nail-art" },
	{ label: "Reviews", href: "#reviews" },
	{ label: "Visit", href: "#contact" },
] as const;

export const services: Service[] = [
	{
		slug: "manicure",
		index: "01",
		title: "Manicure",
		summary: "Shaped, softened and finished by hand.",
		copy: "A manicure uses paraffin wax, oils and lotions to exfoliate the skin, moisturise the cuticles and soften the nails. Our technicians work to strict hygiene standards and offer a range of manicure styles to suit you.",
		image: "/Images/manicure/13.webp",
		alt: "Deep red manicure with a gloss finish, photographed at Nail Studio",
		href: "#manicure",
	},
	{
		slug: "pedicure",
		index: "02",
		title: "Pedicure",
		summary: "A reset for the ground you walk on.",
		copy: "A pedicure addresses ingrown and brittle nails and helps prevent the build-up of germs, with thoroughly cleaned and sterile tools. Our technicians offer a range of pedicure styles to keep your feet healthy and comfortable.",
		image: "/Images/pedicure/1.webp",
		alt: "Hand-painted floral pedicure in blue and coral, photographed at Nail Studio",
		href: "#pedicure",
	},
	{
		slug: "nail-art",
		index: "03",
		title: "Nail Art",
		summary: "A small canvas, taken seriously.",
		copy: "Nail art is a form of self-expression — painted, sculpted and finished by hand. From a single accent to a full set, our technicians work with your ideas and a wide range of styles.",
		image: "/Images/nail-art/1.webp",
		alt: "Blue hand-painted nail art with fine swirl detail",
		href: "#nail-art",
	},
];

export const manicureGallery: GalleryImage[] = [
	{ src: "/Images/manicure/1.webp", alt: "Soft pink and white manicure with gold detail" },
	{ src: "/Images/manicure/13.webp", alt: "Deep red glossy manicure" },
	{ src: "/Images/manicure/2.webp", alt: "White French manicure with silver detail" },
	{ src: "/Images/manicure/15.webp", alt: "Black French manicure" },
	{ src: "/Images/manicure/24.webp", alt: "Lilac manicure with fine line work" },
	{ src: "/Images/manicure/29.webp", alt: "Nude manicure with gold accent and rings" },
	{ src: "/Images/manicure/31.webp", alt: "Almond-shaped white manicure" },
	{ src: "/Images/manicure/34.webp", alt: "Pink glitter manicure" },
	{ src: "/Images/manicure/45.webp", alt: "White manicure with lace detail" },
	{ src: "/Images/manicure/8.webp", alt: "Red manicure with floral accent" },
];

export const pedicureGallery: GalleryImage[] = [
	{ src: "/Images/pedicure/1.webp", alt: "Floral pedicure in blue and coral" },
	{ src: "/Images/pedicure/10.webp", alt: "Nude pedicure with a soft gloss finish" },
	{ src: "/Images/pedicure/11.webp", alt: "Striped pedicure in pink, blue and violet" },
	{ src: "/Images/pedicure/12.webp", alt: "Sheer nude pedicure with a clean square shape" },
	{ src: "/Images/pedicure/13.webp", alt: "Blue pedicure with gem detail" },
	{ src: "/Images/pedicure/2.webp", alt: "Pink and white pedicure with silver detail" },
	{ src: "/Images/pedicure/6.webp", alt: "White pedicure with green leaf detail" },
	{ src: "/Images/pedicure/7.webp", alt: "Pale yellow pedicure with daisy detail" },
];

export const nailArtGallery: GalleryImage[] = [
	{ src: "/Images/nail-art/1.webp", alt: "Blue hand-painted swirl nail art" },
	{ src: "/Images/nail-art/2.webp", alt: "Blue floral nail art" },
	{ src: "/Images/nail-art/4.webp", alt: "Purple and white floral nail art" },
	{ src: "/Images/nail-art/6.webp", alt: "Pale blue nail art with fine detail" },
	{ src: "/Images/nail-art/9.webp", alt: "Rose gold chrome nail art" },
	{ src: "/Images/nail-art/11.webp", alt: "Pastel ombré nail art" },
	{ src: "/Images/nail-art/13.webp", alt: "Gold sculpted nail art" },
	{ src: "/Images/nail-art/17.webp", alt: "Nude nail art with hand-painted flowers" },
	{ src: "/Images/nail-art/21.webp", alt: "Dark chrome nail art" },
	{ src: "/Images/nail-art/23.webp", alt: "Rose gold nail art with crystal detail" },
];

export const studioPhotos: GalleryImage[] = [
	{ src: "/Images/customer/12.webp", alt: "A guest at Nail Studio in Gadsden" },
	{ src: "/Images/customer/13.webp", alt: "A young guest seated in a pedicure chair" },
	{ src: "/Images/customer/14.webp", alt: "Two guests together at the studio" },
	{ src: "/Images/customer/15.webp", alt: "Guests being looked after in the studio" },
	{ src: "/Images/customer/17.webp", alt: "A guest smiling during an appointment" },
	{ src: "/Images/customer/19.webp", alt: "A young guest in the studio" },
	{ src: "/Images/customer/3.webp", alt: "A guest with freshly finished nails" },
	{ src: "/Images/customer/4.webp", alt: "A guest and her daughter at the studio" },
	{ src: "/Images/customer/9.webp", alt: "A guest and her daughter showing their nails" },
];

export const reviews: Review[] = [
	{
		name: "Hiền Tuyết",
		quote: "Good job and every one so nice . Thank you 😂👍👍❤️❤️",
		stars: 5,
	},
	{
		name: "Bailey Wright",
		quote:
			"Awesome pedicure and Christine did my nails and even offered me sparkles!",
		stars: 5,
	},
	{
		name: "Daonia Mason",
		quote:
			"I absolutely loved Ms.Christine she was the sweetest and I highly recommend her 💕💕💕",
		stars: 5,
	},
	{
		name: "Emma Evans",
		quote: "they do great on your nails!",
		stars: 5,
	},
	{
		name: "Rosa Ralls",
		quote:
			"The stylist was very professional and knowledgeable, correcting a poor job done in another state. I will definitely come back here every time in Alabama!",
		stars: 5,
	},
	{
		name: "Jody Hebert",
		quote:
			"I had a amazing time here I lived in the area for about 5 years and I finally found my place that i will come back every time thanks Christine",
		stars: 5,
	},
	{
		name: "Elizabeth Nix",
		quote: "Christine is the best hands down! This place is wonderful!!!!",
		stars: 5,
	},
	{
		name: "Richard Payne",
		quote:
			"My wife and I came in for pedicures for the both of us and for her to get her fingernails done. Service was very prompt, and the team took very good care of us. I HIGHLY RECOMMEND!! 5⭐",
		stars: 5,
	},
	{
		name: "Maddie Bartlett",
		quote:
			"Christie is the absolute best !! She did a fantastic job on my nails!! Best nail place around!",
		stars: 5,
	},
];
