import type React from "react";
import { RAGCard } from "@/components/ai-features/rag-card";
import { SummaryCard } from "@/components/ai-features/summary-card";
import { ModelsCard } from "@/components/ai-features/models-card";
import { ChatCard } from "@/components/ai-features/chat-card";
import { WidgetsCard } from "@/components/ai-features/widgets-card";
import { SecureCard } from "@/components/ai-features/secure-card";
import Image from "next/image";



/**
 * this is the section where we showcae our AI feature.
 * We have:
 * - Tool-calling powered insights that automatically analyze performance data and provide actionable recommendations.
 * - AI generated on-demand summary of key metrics
 * - Bring your own LLM: we are model agnostic. Our integration support many models from OpenAI, Anthropic, Google and the likes.
 * - Chat UI - prefer talking to an agent? We got you.
 * - Custom data widgets created on demand depending on your query.
 * - Secure - models don't have access to raw data. 
 * 
 */


type AIFeature = {
	title: string;
	description: string;
	span: 1 | 2;
	Component: React.ComponentType;
};

const AI_FEATURES: AIFeature[] = [
	{
		title: "LLM-powered insights",
		description:
			"Automatically analyzes your latest performance data and prepares actionable recommendations",
		span: 2,
		Component: RAGCard,
	},
	{
		title: "On-demand AI summary",
		description:
			"Plain summaries of key metric changes, regressions, and wins, generated whenever you need them.",
		span: 1,
		Component: SummaryCard,
	},
	{
		title: "Bring your own AI key",
		description:
			"Model-agnostic. Plug in OpenAI, Anthropic, Google Gemini, and the likes, and get AI insights without any additional setup.",
		span: 1,
		Component: ModelsCard,
	},
	{
		title: "Chat with your data",
		description:
			"Prefer talking to an AI agent? Ask questions a chat UI and get precise answers backed by real metrics.",
		span: 2,
		Component: ChatCard,
	},
	{
		title: "Custom data widgets",
		description:
			"We have many widgets but we don't have all the widgets. Our AI is capabale of generating custom data widgets on the fly.",
		span: 1,
		Component: WidgetsCard,
	},
	{
		title: "Privacy by design",
		description:
			"Identifiable data is never sent to external sources. Since you bring your own key, you can control who has your trust.",
		span: 1,
		Component: SecureCard,
	},
];

export function AISection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				<div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
					<h2 className="text-balance text-4xl font-medium lg:text-5xl">
						Intelligence built into every metric.
					</h2>
					<p>
						Basicrum's AI layer turns raw performance numbers into clear,
						actionable insight.
					</p>
				</div>
				<Image
					className="rounded-(--radius)"
					src="/insights.png"
					alt="about-basicrum"
					loading="lazy"
					width="2939"
					height="1960"
					//2939 × 1960
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
					{AI_FEATURES.map(({ title, description, span, Component }) => (
						<div key={title} className={`${span === 2 ? "md:col-span-2" : "col-span-1"} bg-background`}>
							{span === 2 ? (
								<div className="flex flex-col md:flex-row h-full">
									<div className="p-8 md:w-2/5 flex flex-col justify-center gap-3">
										<h3 className="text-xl font-semibold">{title}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{description}
										</p>
									</div>
									<div className="p-8 md:flex-1 flex items-center">
										<div className="w-full">
											<Component />
										</div>
									</div>
								</div>
							) : (
								<div className="p-6 flex flex-col gap-4 min-h-[280px] h-full">
									<div>
										<Component />
									</div>
									<div className="pt-2 space-y-1.5">
										<h3 className="text-sm font-semibold">{title}</h3>
										<p className="text-xs text-muted-foreground leading-relaxed">
											{description}
										</p>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
