"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const MODELS = [
	{ name: "OpenAI",    label: "GPT-4o",          color: "#10a37f" },
	{ name: "Anthropic", label: "Claude 3.5 Sonnet", color: "#d97706" },
	{ name: "Google",    label: "Gemini 1.5 Pro",   color: "#4285f4" },
	// { name: "Mistral",   label: "Mistral Large",    color: "#f7931a" },
];

export function ModelsCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<div ref={ref} className="space-y-2.5">
			{MODELS.map((m, i) => (
				<motion.div
					key={m.name}
					className="flex items-center justify-between text-xs"
					initial={{ opacity: 0, x: -8 }}
					animate={inView ? { opacity: 1, x: 0 } : {}}
					transition={{ delay: 0.15 + i * 0.15, duration: 0.3 }}
				>
					<div className="flex items-center gap-2">
						<span
							className="w-2 h-2 rounded-full shrink-0"
							style={{ backgroundColor: m.color }}
						/>
						<span className="font-medium">{m.name}</span>
						<span className="text-muted-foreground font-mono text-[10px]">{m.label}</span>
					</div>
					<motion.div
						className="flex items-center gap-1 text-green-500 text-[10px]"
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						transition={{ delay: 0.45 + i * 0.15 }}
					>
						available ✓
					</motion.div>
				</motion.div>
			))}
			<motion.div
				className="text-[10px] text-muted-foreground pt-1"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 1.1 }}
			>
				+ any Tanstack AI compatible endpoint
			</motion.div>
		</div>
	);
}
