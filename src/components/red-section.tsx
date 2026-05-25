"use client";

import { motion } from "motion/react";
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

// ── Pseudo-component 1: CWV Overview ──────────────────────────────────────────

const cwvMetrics = [
    { name: "LCP", value: "2,047", unit: "ms", change: "+4.3%", bad: 78, ok: 12, good: 10 },
    { name: "INP", value: "476", unit: "ms", change: "+17%", bad: 82, ok: 8, good: 10 },
    { name: "CLS", value: "0.05", unit: "", change: "+2%", bad: 15, ok: 20, good: 65 },
];

const cwvPages = [
    { url: "/", lcp: "7,483", inp: "423", status: "failed" },
    { url: "/contact", lcp: "7,714", inp: "464", status: "failed" },
    { url: "/about", lcp: "1,683", inp: "512", status: "failed" },
    { url: "/blog/how-to-optimize", lcp: "1,772", inp: "536", status: "failed" },
    { url: "/plans/enterprise", lcp: "1,754", inp: "86", status: "passed" },
];

const CWVOverview = () => (
    <div className="bg-[#0d1117] rounded-lg overflow-hidden text-white text-sm flex-1">
        <div className="px-4 py-2.5 border-b border-white/10">
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Overview</span>
        </div>
        <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
            {cwvMetrics.map((m) => (
                <div key={m.name} className="p-3">
                    <div className="text-xs text-white/40 mb-1">{m.name}</div>
                    <div className="text-base font-bold leading-tight">
                        {m.value}
                        <span className="text-xs font-normal text-white/30 ml-0.5">{m.unit}</span>
                    </div>
                    <div className="text-xs text-red-400 mt-0.5">{m.change}</div>
                    <div className="mt-2 h-1 rounded-full flex overflow-hidden">
                        <div className="bg-red-500" style={{ width: `${m.bad}%` }} />
                        <div className="bg-amber-400" style={{ width: `${m.ok}%` }} />
                        <div className="bg-emerald-500" style={{ width: `${m.good}%` }} />
                    </div>
                </div>
            ))}
        </div>
        <div className="px-4 py-3">
            <div className="text-xs text-white/30 uppercase tracking-wider mb-2.5">CWV by pages</div>
            <table className="w-full text-xs">
                <thead>
                    <tr className="text-white/25 border-b border-white/10">
                        <th className="text-left pb-2 font-medium">Source</th>
                        <th className="text-right pb-2 font-medium">LCP</th>
                        <th className="text-right pb-2 font-medium">INP</th>
                        <th className="text-right pb-2 font-medium">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {cwvPages.map((p) => (
                        <tr key={p.url}>
                            <td className="py-1.5 text-white/55 font-mono">{p.url}</td>
                            <td className="py-1.5 text-right tabular-nums text-red-400">{p.lcp}</td>
                            <td className="py-1.5 text-right tabular-nums text-red-400">{p.inp}</td>
                            <td className="py-1.5 text-right">
                                <span
                                    className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium ${
                                        p.status === "failed"
                                            ? "bg-red-500/20 text-red-400"
                                            : "bg-emerald-500/20 text-emerald-400"
                                    }`}
                                >
                                    ● {p.status === "failed" ? "Failed" : "Passed"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// ── Pseudo-component 2: LCP Breakdown ─────────────────────────────────────────

const lcpBuckets = [
    { range: "0.5s", count: 3 },
    { range: "1.0s", count: 8 },
    { range: "1.5s", count: 12 },
    { range: "2.0s", count: 9 },
    { range: "2.5s", count: 14 },
    { range: "3.0s", count: 10 },
    { range: "3.5s", count: 8 },
    { range: "4.0s", count: 11 },
    { range: "4.5s", count: 18 },
    { range: "5.0s", count: 24 },
    { range: "5.5s", count: 28 },
    { range: "6.0s", count: 32 },
    { range: "6.5s", count: 35 },
];

const lcpElements = [
    { tag: "img", selector: "img#logo", ms: "2,075" },
    { tag: "p", selector: "div.results article p", ms: "2,043" },
    { tag: "div", selector: "div#global-nav-title", ms: "2,033" },
    { tag: "td", selector: "#content tbody td", ms: "2,033" },
];

const barColor = (range: string) => {
    const v = parseFloat(range);
    if (v <= 2.0) return "#22c55e";
    if (v <= 4.0) return "#ffa300";
    return "#ff004d";
};

const LCPBreakdown = () => (
    <div className="bg-[#0d1117] rounded-lg overflow-hidden text-white text-sm flex-1">
        <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">LCP Breakdown</span>
            <span className="text-xs font-bold text-red-400">2,047ms ↑4.3%</span>
        </div>
        <div className="px-4 pt-3 pb-1">
            <div className="text-xs text-white/30 mb-2">LCP distribution</div>
            <ResponsiveContainer width="100%" height={100}>
                <BarChart data={lcpBuckets} margin={{ top: 0, right: 0, left: -32, bottom: 0 }} barSize={13}>
                    <XAxis
                        dataKey="range"
                        tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9 }}
                        axisLine={false}
                        tickLine={false}
                        interval={2}
                    />
                    <YAxis tick={false} axisLine={false} tickLine={false} />
                    <Tooltip
                        contentStyle={{
                            background: "#1a1f2e",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 6,
                            color: "#fff",
                            fontSize: 11,
                        }}
                        formatter={(v) => [v, "Page loads"]}
                        cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    />
                    <Bar dataKey="count" radius={[2, 2, 0, 0]}>
                        {lcpBuckets.map((entry) => (
                            <Cell key={entry.range} fill={barColor(entry.range)} fillOpacity={0.85} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        <div className="px-4 pb-4">
            <div className="text-xs text-white/30 uppercase tracking-wider mb-2.5">LCP element breakdown</div>
            <table className="w-full text-xs">
                <thead>
                    <tr className="text-white/25 border-b border-white/10">
                        <th className="text-left pb-2 font-medium">CSS Selector</th>
                        <th className="text-center pb-2 font-medium">Tag</th>
                        <th className="text-right pb-2 font-medium">Duration</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {lcpElements.map((el, i) => (
                        <tr key={i}>
                            <td className="py-1.5 text-white/50 font-mono">{el.selector}</td>
                            <td className="py-1.5 text-center">
                                <span className="bg-white/10 text-white/55 px-1.5 py-0.5 rounded font-mono">
                                    {el.tag}
                                </span>
                            </td>
                            <td className="py-1.5 text-right tabular-nums text-red-400 font-medium">
                                {el.ms}ms
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// ── Section ────────────────────────────────────────────────────────────────────

export const RedSection = () => {
    return (
        <section className="min-h-screen bg-[#ff004d] flex flex-col items-center justify-center px-6 py-24">
            <div className="flex flex-col items-center gap-16 max-w-6xl w-full">
                <motion.div
                    className="text-center text-white space-y-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={0}
                    variants={fadeUp}
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
                        Core Web Vitals
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Your website is<br />failing your users.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                        BasicRUM shows you exactly where — and why.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        custom={1}
                        variants={fadeUp}
                    >
                        <div>
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                                CWV Overview
                            </span>
                            <h3 className="text-white text-xl font-semibold mt-1">
                                5 of 7 pages are failing
                            </h3>
                        </div>
                        <CWVOverview />
                    </motion.div>

                    <motion.div
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        custom={2}
                        variants={fadeUp}
                    >
                        <div>
                            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                                LCP Breakdown
                            </span>
                            <h3 className="text-white text-xl font-semibold mt-1">
                                Your logo is the culprit
                            </h3>
                        </div>
                        <LCPBreakdown />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
