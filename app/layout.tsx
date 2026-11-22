import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const fontDisplay = Bodoni_Moda({
	subsets: ["latin"],
	weight: "variable",
	style: ["normal", "italic"],
	variable: "--font-display",
	display: "swap",
	adjustFontFallback: false,
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#faf8f3",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://www.nailstudiopro.com"),
	title: {
		default: "Nail Studio — Manicure, Pedicure & Nail Art in Gadsden, AL",
		template: "%s — Nail Studio",
	},
	description:
		"Nail Studio offers a range of services for a relaxing manicure and pedicure experience in Gadsden, Alabama. Our capable team is here to cater to your needs.",
	applicationName: "Nail Studio",
	authors: [{ name: "Hurley Nguyen", url: "https://www.nailstudiopro.com" }],
	creator: "Hurley Nguyen",
	publisher: "Hurley Nguyen",
	keywords: [
		"nail salon Gadsden AL",
		"manicure Gadsden",
		"pedicure Gadsden",
		"nail art Gadsden",
		"nail studio Gadsden Mall",
		"Nail Studio 1001 Rainbow Dr",
	],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Nail Studio — Manicure, Pedicure & Nail Art in Gadsden, AL",
		description:
			"A quiet studio in Gadsden, Alabama for manicures, pedicures and hand-painted nail art.",
		type: "website",
		url: "https://www.nailstudiopro.com",
		siteName: "Nail Studio",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Nail Studio — Manicure, Pedicure & Nail Art in Gadsden, AL",
		description:
			"A quiet studio in Gadsden, Alabama for manicures, pedicures and hand-painted nail art.",
	},
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element => {
	return (
		<html
			lang='en'
			className={cn("h-full", fontSans.variable, fontDisplay.variable)}
		>
			<body className='min-h-full overflow-x-clip bg-paper font-sans text-ink antialiased'>
				<a
					href='#main'
					className='fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-[0.18em] text-paper transition-transform focus-visible:translate-y-0'
				>
					Skip to content
				</a>
				<SiteHeader />
				{children}
				<SiteFooter />
				<Script
					strategy='afterInteractive'
					src='https://www.googletagmanager.com/gtag/js?id=GTM-P72WXVFC'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GTM-P72WXVFC');`}
				</Script>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "NailSalon",
							name: business.name,
							url: "https://www.nailstudiopro.com",
							telephone: business.phone,
							image: "https://www.nailstudiopro.com/Images/contact/1.webp",
							address: {
								"@type": "PostalAddress",
								streetAddress: business.street,
								addressLocality: "Gadsden",
								addressRegion: "AL",
								postalCode: "35901",
								addressCountry: "US",
							},
							hasMap: business.mapsUrl,
						}),
					}}
				/>
			</body>
		</html>
	);
};

export default RootLayout;
