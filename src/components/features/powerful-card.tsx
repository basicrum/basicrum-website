"use client";

import { motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";

const RAW = [20, 35, 25, 48, 38, 55, 42, 61, 50, 66, 58, 72, 62, 78, 68, 83];

export function PowerfulCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	const { pathD, areaD } = useMemo(() => {
		const W = 200, H = 52;
		const min = Math.min(...RAW), max = Math.max(...RAW);
		const pts = RAW.map((v, i) => ({
			x: (i / (RAW.length - 1)) * W,
			y: H - ((v - min) / (max - min)) * (H - 4) - 2,
		}));
		const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
		const area = `${line} L${W},${H} L0,${H} Z`;
		return { pathD: line, areaD: area };
	}, []);

	return (
		<div ref={ref} className="space-y-1">
			<div className="flex items-end justify-between">
				<div>
					<div className="text-2xl font-bold font-mono tracking-tight">12,483</div>
					<div className="text-[10px] text-muted-foreground">active sessions</div>
				</div>
				<motion.span
					className="text-xs text-green-500 font-medium mb-1"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ delay: 0.4 }}
				>
					+24% ↑
				</motion.span>
			</div>
			<svg viewBox="0 0 200 52" className="w-full h-13" preserveAspectRatio="none">
				<defs>
					<linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
						<stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
					</linearGradient>
				</defs>
				<motion.path
					d={areaD}
					fill="url(#sparkGrad)"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.5, delay: 0.2 }}
				/>
				<motion.path
					d={pathD}
					fill="none"
					stroke="#22c55e"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					initial={{ pathLength: 0 }}
					animate={inView ? { pathLength: 1 } : {}}
					transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}
				/>
			</svg>
		</div>
	);
}
