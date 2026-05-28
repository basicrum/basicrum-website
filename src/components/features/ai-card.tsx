"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const LINES = [
	{ label: "analyze", text: "LCP bottleneck detected" },
	{ label: "source",  text: "hero image · 2.4 MB PNG" },
	{ label: "fix",     text: "convert to WebP + lazy load" },
	{ label: "gain",    text: "−820ms estimated ⚡" },
];

export function AICard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });
	const [shown, setShown] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const timers = LINES.map((_, i) =>
			setTimeout(() => setShown(i + 1), 200 + i * 550)
		);
		return () => timers.forEach(clearTimeout);
	}, [inView]);

	return (
		<div
			ref={ref}
			className="font-mono text-[11px] leading-relaxed p-3 rounded-lg bg-muted/60 space-y-1.5"
		>
			{LINES.map((line, i) => (
				<motion.div
					key={i}
					animate={i < shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
					initial={{ opacity: 0, y: 4 }}
					transition={{ duration: 0.2 }}
					className="flex gap-2"
				>
					<span className="text-green-500 shrink-0">›</span>
					<span>
						<span className="text-muted-foreground">{line.label}: </span>
						{line.text}
					</span>
				</motion.div>
			))}
		</div>
	);
}
