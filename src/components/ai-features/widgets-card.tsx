"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const QUERY = "Show LCP by country";
const BARS = [
	{ label: "US", value: 1.2, pct: 60 },
	{ label: "DE", value: 0.8, pct: 40 },
	{ label: "UK", value: 1.0, pct: 50 },
	{ label: "FR", value: 1.4, pct: 70 },
];

export function WidgetsCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });
	const [queryLen, setQueryLen] = useState(0);
	const [showChart, setShowChart] = useState(false);

	useEffect(() => {
		if (!inView) return;
		let i = 0;
		const typer = setInterval(() => {
			i++;
			setQueryLen(i);
			if (i >= QUERY.length) clearInterval(typer);
		}, 55);
		const t = setTimeout(() => setShowChart(true), QUERY.length * 55 + 500);
		return () => { clearInterval(typer); clearTimeout(t); };
	}, [inView]);

	return (
		<div ref={ref} className="space-y-3 font-mono text-xs">
			<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/60 border border-border/50">
				<span className="text-green-500 shrink-0">›</span>
				<span>{QUERY.slice(0, queryLen)}</span>
				{queryLen < QUERY.length && (
					<motion.span
						animate={{ opacity: [1, 0, 1] }}
						transition={{ duration: 0.5, repeat: Infinity }}
						className="inline-block w-[5px] h-[10px] bg-foreground/60 rounded-sm"
					/>
				)}
			</div>

			<div className="min-h-[80px]">
				{showChart && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="space-y-2"
					>
						<div className="text-[9px] text-muted-foreground uppercase tracking-wide mb-3">
							LCP · median by country
						</div>
						{BARS.map((b, i) => (
							<div key={b.label} className="flex items-center gap-2">
								<span className="w-5 text-muted-foreground text-[10px] shrink-0">{b.label}</span>
								<div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
									<motion.div
										className="h-full rounded-full bg-green-500"
										initial={{ width: 0 }}
										animate={{ width: `${b.pct}%` }}
										transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
									/>
								</div>
								<span className="text-[10px] text-muted-foreground w-8 text-right shrink-0">
									{b.value}s
								</span>
							</div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
}
