import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/content-5";
import { FeaturesSectionGraphed } from "@/components/features-9";
import HeroSection from "@/components/hero-section";
import { ColorSections } from "@/components/color-sections";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturesSectionGraphed />
			<FeaturesSection />
			<ColorSections />
			<CallToAction />
		</>
	);
}
