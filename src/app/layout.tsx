import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { HeroHeader } from "@/components/hero5-header";
import FooterSection from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.basicrum.com"),
	title: "Basicrum",
	description: "Open Source - Real User Monitoring system",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<head>
				<Script src="/boomerang.min.js" strategy="beforeInteractive" />
				<Script id="boomr-init" strategy="beforeInteractive">
					{`
							BOOMR.init({
								beacon_url: "${process.env.NEXT_PUBLIC_BEACON_URL}",
								ResourceTiming: {
									enabled: true,
									clearOnBeacon: true
								}
							})
							BOOMR.addVar({
  "brum_site_id": "basicrum_website_1"
});
						`}
				</Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<HeroHeader />
					{children}
					<FooterSection />
				</Providers>
			</body>
		</html>
	);
}
