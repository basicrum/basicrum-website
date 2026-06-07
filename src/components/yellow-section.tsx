"use client";

import { motion } from "motion/react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    }),
};

const lcpTrend = [
    { day: "Mon", lcp: 5200 },
    { day: "Tue", lcp: 4800 },
    { day: "Wed", lcp: 4100 },
    { day: "Thu", lcp: 3700 },
    { day: "Fri", lcp: 3400 },
    { day: "Sat", lcp: 3200 },
    { day: "Sun", lcp: 3050 },
];

const pages = [
    { url: "/", lcp: "3,847", inp: "210", status: "yellow" },
    { url: "/contact", lcp: "4,120", inp: "450", status: "red" },
    { url: "/about", lcp: "3,100", inp: "190", status: "yellow" },
    { url: "/blog", lcp: "2,841", inp: "150", status: "green" },
    { url: "/plans/pro", lcp: "2,650", inp: "95", status: "green" },
];

const badge = {
    red: { bg: "bg-red-500/20", text: "text-red-400", label: "Failed" },
    yellow: { bg: "bg-amber-400/20", text: "text-amber-300", label: "Warning" },
    green: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Passed" },
};

export const YellowSection = () => {
    return (
        <section data-bg="yellow" className="min-h-screen flex items-center px-6 py-24">
            <div className="flex flex-col md:flex-row gap-12 max-w-6xl w-full mx-auto items-start">
                <motion.div
                    className="md:w-2/5 text-black space-y-5 md:sticky md:top-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={0}
                    variants={fadeUp}
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                        You&apos;re making progress.<br />But not there yet.
                    </h2>
                    <p className="text-lg text-black/60 leading-relaxed">
                        Basicrum tracks every improvement in real time, so you know exactly what&apos;s working and what still needs attention.
                    </p>
                </motion.div>

                <div className="md:w-3/5 flex flex-col gap-6">
                    {/* Card 1: LCP Trend */}
                    <motion.div
                        className="bg-[#0d1117] rounded-lg p-5 ring-1 ring-white/10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        custom={1}
                        variants={fadeUp}
                    >
                        <div className="mb-4">
                            <span className="text-xs text-white/40 uppercase tracking-wider">LCP Trend: 1 Week</span>
                            <h3 className="text-white text-lg font-semibold mt-0.5">
                                Getting better, just not fast enough
                            </h3>
                        </div>
                        <ResponsiveContainer width="100%" height={180}>
                            <AreaChart data={lcpTrend} margin={{ top: 10, right: 24, left: -10, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="lcpYellowGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ffa300" stopOpacity={0.45} />
                                        <stop offset="95%" stopColor="#ffa300" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                                <XAxis
                                    dataKey="day"
                                    tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis
                                    tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                    tickFormatter={(v) => `${(v / 1000).toFixed(1)}s`}
                                    domain={[0, 6000]}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: "#1a1f2e",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: 8,
                                        color: "#fff",
                                        fontSize: 12,
                                    }}
                                    formatter={(v) => [`${v}ms`, "LCP"]}
                                />
                                <ReferenceLine
                                    y={4000}
                                    stroke="#ff004d"
                                    strokeDasharray="4 4"
                                    label={{ value: "Poor  ", fill: "#ff004d", fontSize: 10, position: "right" }}
                                />
                                <ReferenceLine
                                    y={2500}
                                    stroke="#22c55e"
                                    strokeDasharray="4 4"
                                    label={{ value: "Good  ", fill: "#22c55e", fontSize: 10, position: "right" }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="lcp"
                                    stroke="#ffa300"
                                    strokeWidth={2.5}
                                    fill="url(#lcpYellowGradient)"
                                    dot={false}
                                    activeDot={{ r: 4, fill: "#ffa300" }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                        <p className="text-white/40 text-xs mt-3">
                            LCP is improving but still above the 2,500ms passing threshold. Keep going.
                        </p>
                    </motion.div>

                    {/* Card 2: Pages breakdown table */}
                    <motion.div
                        className="bg-[#0d1117] rounded-lg p-5 ring-1 ring-white/10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        custom={2}
                        variants={fadeUp}
                    >
                        <div className="mb-4">
                            <span className="text-xs text-white/40 uppercase tracking-wider">CWV by Pages</span>
                            <h3 className="text-white text-lg font-semibold mt-0.5">
                                Some pages passed. Others still need work.
                            </h3>
                        </div>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-white/30 text-xs uppercase tracking-wider border-b border-white/10">
                                    <th className="text-left pb-2.5 font-medium">Source</th>
                                    <th className="text-right pb-2.5 font-medium">LCP (ms)</th>
                                    <th className="text-right pb-2.5 font-medium">INP (ms)</th>
                                    <th className="text-right pb-2.5 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {pages.map((p) => {
                                    const s = badge[p.status as keyof typeof badge];
                                    return (
                                        <tr key={p.url}>
                                            <td className="py-2.5 text-white/70 font-mono text-xs">{p.url}</td>
                                            <td className="py-2.5 text-right text-white/60 tabular-nums">{p.lcp}</td>
                                            <td className="py-2.5 text-right text-white/60 tabular-nums">{p.inp}</td>
                                            <td className="py-2.5 text-right">
                                                <span
                                                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${s.bg} ${s.text}`}
                                                >
                                                    {s.label}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
