import type React from "react";
import { FastCard } from "@/components/features/fast-card";
import { PowerfulCard } from "@/components/features/powerful-card";
import { PrivacyCard } from "@/components/features/privacy-card";
import { AICard } from "@/components/features/ai-card";
import { OpenSourceCard } from "@/components/features/opensource-card";
import { LightweightCard } from "@/components/features/lightweight-card";
import { EUCard } from "@/components/features/eu-card";
import { ClickhouseCard } from "@/components/features/clickhouse-card";
import Image from "next/image";

type Feature = {
	title: string;
	description: string;
	Component: React.ComponentType;
};

const FEATURES: Feature[] = [
	{
		title: "Fast",
		description: "Performance-oriented from day one. Ready to handle high traffic with minimal overhead.",
		Component: FastCard,
	},
	{
		title: "Powerful",
		description: "A powerful dashboard and set of widgets to monitor your users effectively in real-time.",
		Component: PowerfulCard,
	},
	{
		title: "Privacy First",
		description: "Hosted in EU, GDPR compliant, and zero third-party tracking.",
		Component: PrivacyCard,
	},
	{
		title: "AI Enhanced",
		description: "LLM-powered insights help you extract fine-grained performance recommendations automatically.",
		Component: AICard,
	},
	{
		title: "Open Source",
		description: "Free to use and fully self-hostable. Inspect, extend, and contribute on GitHub.",
		Component: OpenSourceCard,
	},
	{
		title: "Lightweight",
		description: "A tiny beacon that won't slow down the page it's trying to monitor.",
		Component: LightweightCard,
	},
	{
		title: "Hosted in EU",
		description: "Exclusively EU infrastructure with full GDPR compliance and low-latency guarantees.",
		Component: EUCard,
	},
	{
		title: "Powered by Clickhouse",
		description: "Blazing-fast analytics on billions of events — powered by open-source OLAP.",
		Component: ClickhouseCard,
	},
];

export default function FeaturesSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				<div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
					<h2 className="text-balance text-4xl font-medium lg:text-5xl">
						Basicrum's philosophy is to provide everything the user needs while
						being, well.. basic.
					</h2>
					<p>
						Basicrum brings simplicity and the power of open source to real user monitoring.
					</p>
				</div>
				<Image
					className="rounded-(--radius)"
					src="/new-lcp.png"
					alt="about-basicrum"
					loading="lazy"
					width="3453"
					height="1610"
					//3453 × 1610
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
					{FEATURES.map(({ title, description, Component }) => (
						<div key={title} className="bg-background p-6 flex flex-col">
							<div className="flex-1 min-h-[130px] flex flex-col justify-center">
								<Component />
							</div>
							<div className="space-y-1.5 mt-auto pt-4">
								<h3 className="text-sm font-semibold">{title}</h3>
								<p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
