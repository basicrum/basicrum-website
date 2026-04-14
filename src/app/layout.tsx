import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { HeroHeader } from "@/components/hero5-header";
import FooterSection from "@/components/footer";
import { BasicRumBeacon } from "@basicrum/beacon-client/react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Basicrum",
	description: "Open Source - Real User Monitoring system",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<BasicRumBeacon
					beaconUrl={process.env.NEXT_PUBLIC_BEACON_URL || ""}
					siteId="basicrum-website-1"
				/>
				<Providers>
					<HeroHeader />
					{children}
					<FooterSection />
				</Providers>
			</body>
		</html>
	);
}
