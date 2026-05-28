import FeaturesSection from "@/components/content-5";
import { FeaturesSectionGraphed } from "@/components/features-9";
import HeroSection from "@/components/hero-section";
import { TeaserSections } from "@/components/teaser-sections";
import { ColorSections } from "@/components/color-sections";
import { AISection } from "@/components/ai-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturesSectionGraphed />
			<FeaturesSection />
			<AISection />
			<TeaserSections />
			<ColorSections />
		</>
	);
}
