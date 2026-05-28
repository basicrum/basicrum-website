import { ShieldCheck } from "lucide-react";

const items = [
	"GDPR Compliant",
	"No third-party tracking",
	"Data stays in EU",
	"End-to-end encrypted",
];

export function PrivacyCard() {
	return (
		<div className="space-y-3">
			<div className="inline-flex p-3 rounded-xl bg-green-500/10">
				<ShieldCheck className="w-6 h-6 text-green-500" />
			</div>
			<ul className="space-y-2">
				{items.map((item) => (
					<li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
						<span className="w-1 h-1 rounded-full bg-green-500 shrink-0" />
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
