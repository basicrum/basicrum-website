"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const bars = [
	{ label: "Typical alternatives", pct: 88, color: "#ef444480" },
	{ label: "Basicrum beacon", pct: 52, color: "#008751" },
];

export function LightweightCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<div ref={ref} className="space-y-3.5">
			<div className="text-[10px] text-muted-foreground uppercase tracking-wide">
				Beacon bundle size
			</div>
			{bars.map((b, i) => (
				<div key={b.label} className="space-y-1">
					<div className="text-xs">
						<span>{b.label}</span>
					</div>
					<div className="h-2 rounded-full bg-muted overflow-hidden">
						<motion.div
							className="h-full rounded-full"
							style={{ backgroundColor: b.color }}
							initial={{ width: "0%" }}
							animate={inView ? { width: `${b.pct}%` } : { width: "0%" }}
							transition={{ delay: 0.2 + i * 0.3, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
						/>
					</div>
				</div>
			))}
			<motion.div
				className="text-[10px] text-green-500 font-medium"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 1.2 }}
			>
				Smaller than typical alternatives
			</motion.div>
		</div>
	);
}
