"use client";

import { motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";

const COLS = 13, ROWS = 7;

function pseudoRand(seed: number) {
	const x = Math.sin(seed * 9301 + 49297) * 233280;
	return x - Math.floor(x);
}

function cellColor(v: number) {
	if (v > 0.82) return "#008751";
	if (v > 0.62) return "#22c55e";
	if (v > 0.42) return "#22c55e55";
	if (v > 0.22) return "#22c55e22";
	return "transparent";
}

export function OpenSourceCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	const cells = useMemo(
		() =>
			Array.from({ length: ROWS }, (_, row) =>
				Array.from({ length: COLS }, (_, col) => ({
					col,
					row,
					value: pseudoRand(col * ROWS + row),
				}))
			).flat(),
		[]
	);

	return (
		<div ref={ref} className="space-y-2">
			<div
				className="grid gap-[3px]"
				style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
			>
				{cells.map(({ col, row, value }, i) => (
					<motion.div
						key={i}
						className="aspect-square rounded-[2px]"
						style={{
							backgroundColor: cellColor(value),
							border: "1px solid rgba(255,255,255,0.06)",
						}}
						initial={{ opacity: 0, scale: 0.4 }}
						animate={inView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: col * 0.05 + row * 0.008, duration: 0.18 }}
					/>
				))}
			</div>
			<div className="text-[10px] text-muted-foreground">482 contributions this year</div>
		</div>
	);
}
