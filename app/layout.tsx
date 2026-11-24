import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Bodoni_Moda } from "next/font/google";
import { combineSchemas, generateLocalBusinessSchema, generateWebPageSchema, generateWebSiteSchema, generateBreadcrumbSchema } from "@/lib/seo";
import "./globals.css";

const fontSans = Inter({
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
  metadataBase: new URL("https://nailstudiopro.com"),
  title: {
    default: "Nail Studio — Manicure, Pedicure & Nail Art in Gadsden, AL",
    template: "%s — Nail Studio",
  },
  description:
    "Nail Studio offers a range of services for a relaxing manicure and pedicure experience in Gadsden, Alabama. Our capable team is here to cater to your needs.",
  applicationName: "Nail Studio",
  authors: [{ name: "Nail Studio", url: "https://nailstudiopro.com" }],
  creator: "Nail Studio",
  publisher: "Nail Studio",
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
    url: "https://nailstudiopro.com",
    siteName: "Nail Studio",
    locale: "en_US",
    images: [
      {
        url: "/Images/contact/1.webp",
        width: 1200,
        height: 630,
        alt: "Nail Studio — A quiet studio in Gadsden, Alabama for manicures, pedicures and hand-painted nail art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Studio — Manicure, Pedicure & Nail Art in Gadsden, AL",
    description:
      "A quiet studio in Gadsden, Alabama for manicures, pedicures and hand-painted nail art.",
    images: ["/Images/contact/1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {
  const jsonLd = combineSchemas(
    generateWebSiteSchema(),
    generateWebPageSchema(),
    generateLocalBusinessSchema(),
    generateBreadcrumbSchema()
  );

  return (
    <html
      lang="en"
      className={cn("h-full", fontSans.variable, fontDisplay.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full overflow-x-clip bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-[0.18em] text-paper transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GTM-P72WXVFC"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GTM-P72WXVFC');`}
        </Script>
      </body>
    </html>
  );
};

export default RootLayout;