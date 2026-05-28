"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const metrics = [
	{ label: "LCP", value: "1.2s", score: 92 },
	{ label: "INP", value: "48ms", score: 98 },
	{ label: "CLS", value: "0.02", score: 95 },
];

export function FastCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<div ref={ref} className="space-y-2.5">
			{metrics.map((m, i) => (
				<div key={m.label} className="space-y-1">
					<div className="flex justify-between items-center">
						<span className="text-xs font-mono text-muted-foreground">{m.label}</span>
						<span className="text-xs font-mono font-medium">{m.value}</span>
					</div>
					<div className="h-1.5 rounded-full bg-muted overflow-hidden">
						<motion.div
							className="h-full rounded-full bg-green-500"
							initial={{ width: "0%" }}
							animate={inView ? { width: `${m.score}%` } : { width: "0%" }}
							transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
						/>
					</div>
				</div>
			))}
			<div className="flex gap-1.5 pt-0.5">
				{metrics.map((m, i) => (
					<motion.span
						key={m.label}
						className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/15 text-green-500 font-medium"
						initial={{ opacity: 0, scale: 0.7 }}
						animate={inView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.8 + i * 0.08, duration: 0.25, ease: "backOut" }}
					>
						Good
					</motion.span>
				))}
			</div>
		</div>
	);
}
