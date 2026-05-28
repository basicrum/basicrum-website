"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const AI_TEXT = "Your LCP spiked from 1.8s to 3.1s on Tuesday at 14:23 UTC. It correlates with a 2.4 MB hero image deployed in that release. Converting it to WebP should bring you back below 2s.";
const AI_WORDS = AI_TEXT.split(" ");

export function ChatCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.3 });
	const [phase, setPhase] = useState(0);
	const [wordCount, setWordCount] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const t1 = setTimeout(() => setPhase(1), 300);
		const t2 = setTimeout(() => setPhase(2), 1100);
		const t3 = setTimeout(() => setPhase(3), 2100);
		return () => [t1, t2, t3].forEach(clearTimeout);
	}, [inView]);

	useEffect(() => {
		if (phase < 3) return;
		const interval = setInterval(() => {
			setWordCount((c) => {
				if (c >= AI_WORDS.length) { clearInterval(interval); return c; }
				return c + 1;
			});
		}, 50);
		return () => clearInterval(interval);
	}, [phase]);

	return (
		<div ref={ref} className="space-y-3 font-mono text-xs w-full">
			{/* Header */}
			<div className="flex items-center gap-2 pb-2">
				<span className="w-2 h-2 rounded-full bg-green-500" />
				<span className="text-[10px] font-medium">basicrum AI</span>
				<span className="text-[10px] text-muted-foreground ml-auto">online</span>
			</div>

			<div className="space-y-3 min-h-[100px]">
				{phase >= 1 && (
					<motion.div
						className="flex justify-end"
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
					>
						<span className="bg-muted px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[80%] text-[11px]">
							Why is my LCP so high this week?
						</span>
					</motion.div>
				)}

				{phase === 2 && (
					<motion.div
						className="flex items-center gap-1 px-1"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						{[0, 1, 2].map((i) => (
							<motion.span
								key={i}
								className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
								animate={{ y: [0, -4, 0] }}
								transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
							/>
						))}
					</motion.div>
				)}

				{phase >= 3 && (
					<motion.div
						className="text-[11px] leading-relaxed"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.15 }}
					>
						{AI_WORDS.slice(0, wordCount).join(" ")}
						{wordCount < AI_WORDS.length && (
							<motion.span
								animate={{ opacity: [1, 0, 1] }}
								transition={{ duration: 0.5, repeat: Infinity }}
								className="inline-block w-[2px] h-[10px] bg-foreground/60 ml-0.5 align-middle rounded-sm"
							/>
						)}
					</motion.div>
				)}
			</div>

			{/* Input */}
			<div className="border rounded-lg px-3 py-2 text-[10px] text-muted-foreground flex items-center gap-2 mt-auto">
				<span className="flex-1">Ask anything about your performance data…</span>
				<span className="text-green-500">↵</span>
			</div>
		</div>
	);
}
