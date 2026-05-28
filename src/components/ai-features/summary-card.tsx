"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const TEXT = "Your site performed 23% better this week. LCP improved from 2.4s to 1.8s after image optimization on Tuesday. CLS is now 0.01 — within the Good threshold. 3 performance anomalies detected and resolved automatically.";
const WORDS = TEXT.split(" ");

export function SummaryCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const interval = setInterval(() => {
			setCount((c) => {
				if (c >= WORDS.length) {
					clearInterval(interval);
					return c;
				}
				return c + 1;
			});
		}, 55);
		return () => clearInterval(interval);
	}, [inView]);

	return (
		<div ref={ref} className="space-y-3">
			<div className="flex items-center gap-2">
				<span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">
					Weekly summary
				</span>
				<motion.span
					className="w-1.5 h-1.5 rounded-full bg-green-500"
					animate={{ opacity: count < WORDS.length ? [1, 0.3, 1] : 1 }}
					transition={{ duration: 0.8, repeat: count < WORDS.length ? Infinity : 0 }}
				/>
			</div>
			<div className="text-sm leading-relaxed text-muted-foreground min-h-[88px] bg-muted/50 rounded-lg p-4">
				{WORDS.slice(0, count).join(" ")}
				{count < WORDS.length && (
					<motion.span
						animate={{ opacity: [1, 0, 1] }}
						transition={{ duration: 0.5, repeat: Infinity }}
						className="inline-block w-[2px] h-[14px] bg-foreground/60 ml-0.5 align-middle rounded-sm"
					/>
				)}
			</div>
		</div>
	);
}
