import {
	Cpu,
	DatabaseZap,
	EarthLock,
	Feather,
	Lock,
	PackageOpen,
	Sparkles,
	Zap,
} from "lucide-react";

const FEATURES = [
	{
		icon: Zap,
		title: "Fast",
		description:
			"Basicrum is performance oriented from get go. Ready to handle high traffic.",
	},
	{
		icon: Cpu,
		title: "Powerful",
		description:
			"Shipped with a powerful dashboard and a set of widgets to help users monitor their users effectively.",
	},
	{
		icon: Lock,
		title: "Privacy",
		description: "Hosted in EU and GDPR compliant",
	},
	{
		icon: Sparkles,
		title: "AI Enhanced",
		description:
			"We use RAG to help users facilitate LLMs to extract more fine grained information",
	},
	{
		icon: PackageOpen,
		title: "Open Source",
		description:
			"Basicrum is open source and free to use. You can self host it or use our hosted version.",
	},
	{
		icon: Feather,
		title: "Lightweight",
		description:
			"The app is lightweight and easy to install. It runs on any server with Node.js.",
	},
	{
		icon: EarthLock,
		title: "Hosted in EU",
		description:
			"We host exclusively in the EU and comply with GDPR regulations.",
	},
	{
		icon: DatabaseZap,
		title: "Powered by Clickhouse",
		description:
			"Basicrum is powered by Clickhouse, a fast open-source OLAP database management system.",
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
						Basicrum brings simplicity and the power of open source to real user
						monitoring.
					</p>
				</div>
				<img
					className="rounded-(--radius)"
					src="/lcp.png"
					alt="about-basicrum"
					loading="lazy"
				/>

				<div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
					{FEATURES.map(({ icon: Icon, title, description }) => (
						<div key={title} className="space-y-2">
							<div className="flex items-center gap-2">
								<Icon className="size-4" />
								<h3 className="text-sm font-medium">{title}</h3>
							</div>
							<p className="text-muted-foreground text-sm">{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
