import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

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
					className="rounded-(--radius) grayscale"
					src="/app-home.png"
					alt="about-basicrum"
					height=""
					width=""
					loading="lazy"
				/>

				<div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<Zap className="size-4" />
							<h3 className="text-sm font-medium">Fast</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							Basicrum is performance oriented from get go.
						</p>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<Cpu className="size-4" />
							<h3 className="text-sm font-medium">Powerful</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							Shipped with a powerful dashboard and a set of widgets to help
							users monitor their users effectively.
						</p>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<Lock className="size-4" />
							<h3 className="text-sm font-medium">Privacy</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							Hosted in EU and GDPR compliant
						</p>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<Sparkles className="size-4" />

							<h3 className="text-sm font-medium">AI Powered</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							We use RAG to help users facilitate LLMs to extract more fine
							grained information
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
