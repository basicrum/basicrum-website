import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/content-5";
import { FeaturesSectionGraphed } from "@/components/features-9";

import HeroSection from "@/components/hero-section";
import { RedSection } from "@/components/red-section";
import { YellowSection } from "@/components/yellow-section";
import { GreenSection } from "@/components/green-section";
import { WhiteSection } from "@/components/white-section";


export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturesSectionGraphed />
			<FeaturesSection />
			<RedSection />
			<YellowSection />
			<GreenSection />
			<WhiteSection />
			<CallToAction />
		</>
	);
}
