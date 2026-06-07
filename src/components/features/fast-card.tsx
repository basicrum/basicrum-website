"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
	{ label: "Beacons / day", value: "Millions", pct: 95 },
	{ label: "Memory footprint", value: "Tiny", pct: 20 },
];

export function FastCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<div ref={ref} className="space-y-3">
			<div className="flex items-center gap-1.5">
				<span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400 font-medium uppercase tracking-wide">
					Rust-powered
				</span>
			</div>
			{stats.map((s, i) => (
				<div key={s.label} className="space-y-1">
					<div className="flex justify-between items-center">
						<span className="text-xs text-muted-foreground">{s.label}</span>
						<span className="text-xs font-mono font-medium">{s.value}</span>
					</div>
					<div className="h-1.5 rounded-full bg-muted overflow-hidden">
						<motion.div
							className="h-full rounded-full bg-green-500"
							initial={{ width: "0%" }}
							animate={inView ? { width: `${s.pct}%` } : { width: "0%" }}
							transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
						/>
					</div>
				</div>
			))}
			<motion.div
				className="text-[10px] text-muted-foreground"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 1.0 }}
			>
				Runs comfortably on a <span className="text-foreground font-medium">€5/mo VPS</span>
			</motion.div>
		</div>
	);
}
