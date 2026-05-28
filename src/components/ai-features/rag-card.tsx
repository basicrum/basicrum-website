"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const INSIGHTS = [
	{ metric: "LCP",  color: "#ffa300", issue: "Hero image blocks initial render",    action: "Convert to WebP · add lazy loading",  gain: "−820ms"   },
	{ metric: "INP",  color: "#ff6d00", issue: "Sync scroll event listener",          action: "Debounce with requestIdleCallback",    gain: "−340ms"   },
	{ metric: "CLS",  color: "#3b82f6", issue: "Web font causes layout shift",        action: "Add font-display: swap to @font-face", gain: "−0.08"    },
];

export function RAGCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<div ref={ref} className="space-y-3 w-full">
			<div className="flex items-center justify-between">
				<span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">
					Analysis complete
				</span>
				<motion.span
					className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-500 font-medium"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ delay: 1.4 }}
				>
					3 insights
				</motion.span>
			</div>

			<div className="space-y-2">
				{INSIGHTS.map((ins, i) => (
					<motion.div
						key={ins.metric}
						className="grid items-center gap-3 p-2.5 rounded-lg bg-muted/50 text-xs"
						style={{ gridTemplateColumns: "auto 1fr auto" }}
						initial={{ opacity: 0, x: -12 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.25 + i * 0.3, duration: 0.35 }}
					>
						<span
							className="font-mono font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0"
							style={{ backgroundColor: `${ins.color}25`, color: ins.color }}
						>
							{ins.metric}
						</span>
						<div className="min-w-0">
							<div className="text-muted-foreground truncate">{ins.issue}</div>
							<div className="text-green-500 truncate text-[10px]">→ {ins.action}</div>
						</div>
						<motion.span
							className="font-mono text-[10px] text-green-500 shrink-0"
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : {}}
							transition={{ delay: 0.6 + i * 0.3 }}
						>
							{ins.gain}
						</motion.span>
					</motion.div>
				))}
			</div>

			<motion.div
				className="flex items-center justify-between text-[10px] pt-1"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 1.6 }}
			>
				<span className="text-muted-foreground">Estimated total gain</span>
				<span className="text-green-500 font-mono font-medium">−1,160ms + improved scores</span>
			</motion.div>
		</div>
	);
}
