import Footer from "@/components/cc/footer/footer";
import Navbar from "@/components/cc/navbar/Navbar";
import { TailwindIndicator } from "@/components/cc/tailwind-indicator/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@splidejs/react-splide/css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});
export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: "no",
	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
	generator: "Next.js",
	applicationName: "nail-studio",
	referrer: "origin-when-cross-origin",
	authors: [
		{ name: "Hurley" },
		{ name: "Nguyen", url: "https://www.nailstudiopro.com" },
	],
	creator: "Hurley Nguyen",
	publisher: "Hurley Nguyen",

	keywords: [
		"nail salon gadsden",
		"nail salon gadsden al",
		"gadsden mall nail salon",
		"nail salon in walmart gadsden al",
		"east gadsden walmart nail salon",
		"nail salon gadsden al",
		"gadsden mall nail salon",
		"nail salon in walmart gadsden al",
		"east gadsden walmart nail salon",
		"nail salon gadsden al",
		"gadsden mall nail salon",
		"west gadsden walmart nail salon",
		"north gadsden walmart nail salon",
		"south gadsden walmart nail salon",
		"east gadsden walmart nail salon",
		"west gadsden walmart nail salon",
		"nail salon services gadsden al",
		"best nail salon gadsden alabama",
		"affordable nail salon gadsden",
		"gel nails gadsden al",
		"acrylic nails gadsden al",
		"manicure pedicure gadsden al",
		"nail art gadsden alabama",
		"nail salon near me gadsden al",
		"nail salon reviews gadsden al",
		"nail salon prices gadsden al",
		"nail salon hours gadsden al",
		"nail salon coupons gadsden al",
		"nail salon deals gadsden al",
		"nail salon specials gadsden al",
		"nail salon appointments gadsden al",
		"nail salon walk-ins gadsden al",
		"nail salon gift cards gadsden al",
		"nail salon loyalty program gadsden al",
		"nail salon membership gadsden al",
		"nail salon gadsden al open now",
		"nail salon gadsden al open late",
		"nail salon gadsden al open sunday",
		"nail salon gadsden al open holidays",
		"nail salon gadsden al parking",
		"nail salon gadsden al directions",
		"nail salon gadsden al contact",
		"nail salon gadsden al website",
		"nail salon gadsden al menu",
		"nail salon gadsden al gallery",
		"nail salon gadsden al instagram",
		"nail salon gadsden al facebook",
		"nail salon gadsden al twitter",
		"nail salon gadsden al yelp",
		"nail salon gadsden al google reviews",
	],
	alternates: {
		canonical: "https://www.nailstudiopro.com",
		languages: {
			"en-US": "https://www.nailstudiopro.com",
		},
		media: {
			"only screen and (max-width: 600px)":
				"https://www.nailstudiopro.com/mobile",
		},
		types: {
			"application/rss+xml": "https://www.nailstudiopro.com/rss",
		},
	},
	title: "Nail Salon Gadsden || Nail Studio",
	description:
		"Nail Studio offers a range of services for a relaxing manicure and pedicure experience. Our capable team is here to cater to your needs.",
	metadataBase: new URL("https://www.nailstudiopro.com"),
	openGraph: {
		title: "Nail Salon Gadsden || Nail Studio",
		description:
			"Nail Studio offers a range of services for a relaxing manicure and pedicure experience. Our capable team is here to cater to your needs.",
		type: "website",
		url: "https://www.nailstudiopro.com",
		siteName: "Nail Salon Gadsden",
		images: [
			{
				url: "",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Nail Salon Gadsden || Nail Studio",
		description:
			"Nail Studio offers a range of services for a relaxing manicure and pedicure experience. Our capable team is here to cater to your needs.",
		images: [
			{
				url: "",
				width: 1200,
				height: 630,
			},
		],
	},
};
const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element => {
	return (
		<html lang='en' className='h-full ' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-fit m-0 p-0 bg-background font-sans antialiased bg-dot-black/[0.2]  dark:bg-dot-white/[0.2]",
					fontSans.variable,
				)}
			>
				<ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
					<Navbar />
					{children}
					<Footer />
					<Toaster richColors />
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
				<TailwindIndicator />
			</body>
		</html>
	);
};
export default RootLayout;
