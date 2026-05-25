"use client";

import { motion } from "motion/react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingDown, CheckCircle2 } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const metrics = [
    { name: "LCP", current: "2,041ms", before: "7,483ms", delta: "-73%", label: "Good" },
    { name: "INP", current: "82ms", before: "423ms", delta: "-81%", label: "Good" },
    { name: "CLS", current: "0.02", before: "0.49", delta: "-96%", label: "Good" },
];

const streakData = [
    { day: 1, lcp: 2100 },
    { day: 2, lcp: 1980 },
    { day: 3, lcp: 2050 },
    { day: 4, lcp: 1920 },
    { day: 5, lcp: 2000 },
    { day: 6, lcp: 1850 },
    { day: 7, lcp: 1900 },
    { day: 8, lcp: 2020 },
    { day: 9, lcp: 1870 },
    { day: 10, lcp: 1950 },
    { day: 11, lcp: 1830 },
    { day: 12, lcp: 1910 },
    { day: 13, lcp: 1980 },
    { day: 14, lcp: 1860 },
];

export const GreenSection = () => {
    return (
        <section data-bg="green" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
            <div className="flex flex-col gap-12 max-w-6xl w-full mx-auto">
                {/* Headline — centered */}
                <motion.div
                    className="text-center text-white space-y-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={0}
                    variants={fadeUp}
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
                        Core Web Vitals
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        All green.<br />Your users feel the difference.
                    </h2>
                    <p className="text-xl text-white/75 max-w-2xl mx-auto">
                        BasicRUM confirmed the fix worked — with real data, from real users.
                    </p>
                </motion.div>

                {/* Cards — asymmetric 3/5 + 2/5 */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Card 1: Before/after scorecard (wider) */}
                    <motion.div
                        className="md:col-span-3 bg-[#0d1117] rounded-lg p-6 ring-1 ring-white/10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        custom={1}
                        variants={fadeUp}
                    >
                        <div className="mb-6">
                            <span className="text-xs text-white/40 uppercase tracking-wider">Score Improvement</span>
                            <h3 className="text-white text-lg font-semibold mt-0.5">Before & after BasicRUM</h3>
                        </div>
                        <div className="space-y-3">
                            {metrics.map((m) => (
                                <div key={m.name} className="flex items-center gap-4">
                                    <div className="w-10 text-white/40 text-sm font-mono font-medium shrink-0">
                                        {m.name}
                                    </div>
                                    <div className="flex-1 bg-white/5 rounded-xl px-4 py-3 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-white/30 text-sm line-through tabular-nums">
                                                {m.before}
                                            </span>
                                            <span className="text-white text-sm font-semibold tabular-nums">
                                                {m.current}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400 text-sm font-semibold flex items-center gap-1">
                                                <TrendingDown className="w-3.5 h-3.5" />
                                                {m.delta}
                                            </span>
                                            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-medium px-2 py-0.5 rounded-full">
                                                {m.label}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 2: 14-day streak (narrower) */}
                    <motion.div
                        className="md:col-span-2 bg-[#0d1117] rounded-lg p-6 ring-1 ring-white/10 flex flex-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        custom={2}
                        variants={fadeUp}
                    >
                        <div>
                            <span className="text-xs text-white/40 uppercase tracking-wider">Performance Streak</span>
                            <h3 className="text-white text-lg font-semibold mt-0.5">Consistent. Day after day.</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 py-8 gap-2">
                            <CheckCircle2 className="w-9 h-9 text-emerald-400 mb-1" />
                            <span className="text-7xl font-bold text-white leading-none">14</span>
                            <p className="text-white/40 text-sm mt-1">consecutive days passing all CWV</p>
                        </div>
                        <div>
                            <ResponsiveContainer width="100%" height={56}>
                                <AreaChart data={streakData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="streakGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.5} />
                                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        type="monotone"
                                        dataKey="lcp"
                                        stroke="#22c55e"
                                        strokeWidth={1.5}
                                        fill="url(#streakGradient)"
                                        dot={false}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: "#1a1f2e",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: 8,
                                            color: "#fff",
                                            fontSize: 11,
                                        }}
                                        formatter={(v) => [`${v}ms`, "LCP"]}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                            <p className="text-white/30 text-xs mt-2 text-center">LCP — 14 days, all in the green zone</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
