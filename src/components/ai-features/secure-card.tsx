"use client";

import { motion, useInView } from "motion/react";
import { Lock } from "lucide-react";
import { useRef } from "react";

const RAW = ["user_id: •••••••", "path: /checkout", "session: ••••••••"];
const CLEAN = ["lcp: 3.1s", "page: /checkout", "spike at: 14:23 UTC"];

export function SecureCard() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<div ref={ref} className="space-y-2 font-mono text-[11px]">
			<motion.div
				className="p-2.5 rounded-lg bg-muted/50 space-y-1"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 0.1 }}
			>
				<div className="text-[9px] text-muted-foreground uppercase tracking-wide mb-1.5">
					Raw event data
				</div>
				{RAW.map((line) => (
					<div key={line} className="text-muted-foreground">{line}</div>
				))}
			</motion.div>

			<motion.div
				className="flex flex-col items-center gap-0.5"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 0.55 }}
			>
				<div className="w-px h-3 bg-green-500/40" />
				<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px]">
					<Lock className="w-3 h-3" />
					<span>anonymized before LLM call</span>
				</div>
				<div className="w-px h-3 bg-green-500/40" />
			</motion.div>

			<motion.div
				className="p-2.5 rounded-lg bg-muted/50 space-y-1"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 1.0 }}
			>
				<div className="text-[9px] text-muted-foreground uppercase tracking-wide mb-1.5">
					What the LLM sees
				</div>
				{CLEAN.map((line) => (
					<div key={line} className="text-muted-foreground">{line}</div>
				))}
				<div className="text-green-500 text-[10px] pt-1">✓ No PII — ever</div>
			</motion.div>
		</div>
	);
}
