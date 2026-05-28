"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useRef, useEffect } from "react";

export function ClickhouseCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });
	const count = useMotionValue(0);
	const displayed = useTransform(count, (v) => Math.floor(v).toLocaleString());

	useEffect(() => {
		if (!inView) return;
		const ctrl = animate(count, 1_247_832_019, { duration: 2.5, ease: "easeOut" });
		return () => ctrl.stop();
	}, [inView, count]);

	return (
		<div
			ref={ref}
			className="font-mono text-[11px] leading-relaxed p-3 rounded-lg bg-muted/60 space-y-2"
		>
			<div className="space-y-0.5 text-muted-foreground">
				<div><span className="text-blue-400">SELECT</span> count(*)</div>
				<div><span className="text-blue-400">FROM</span> page_events</div>
				<div><span className="text-blue-400">WHERE</span> date = today()</div>
			</div>
			<div className="border-t border-border/40 pt-2">
				<motion.div className="text-xl font-bold tabular-nums tracking-tight">
					{displayed}
				</motion.div>
				<div className="text-[10px] text-muted-foreground">rows · elapsed 42ms</div>
			</div>
		</div>
	);
}
