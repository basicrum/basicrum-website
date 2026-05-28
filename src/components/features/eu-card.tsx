const stats = [
	{ label: "Uptime", value: "99.97%" },
	{ label: "Latency", value: "< 10ms" },
	{ label: "Compliance", value: "GDPR" },
];

export function EUCard() {
	return (
		<div className="space-y-3.5">
			<div className="flex items-center gap-3">
				<span className="text-3xl leading-none">🇪🇺</span>
				<div>
					<div className="text-sm font-medium">Frankfurt, DE</div>
					<div className="text-[10px] text-muted-foreground font-mono">eu-central-1</div>
				</div>
			</div>
			<div className="space-y-1.5">
				{stats.map(({ label, value }) => (
					<div key={label} className="flex justify-between text-xs">
						<span className="text-muted-foreground">{label}</span>
						<span className="font-mono">{value}</span>
					</div>
				))}
			</div>
			<div className="flex items-center gap-1.5">
				<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
				<span className="text-[10px] text-muted-foreground">All systems operational</span>
			</div>
		</div>
	);
}
