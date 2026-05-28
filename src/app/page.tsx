import FeaturesSection from "@/components/content-5";
import { FeaturesSectionGraphed } from "@/components/features-9";
import HeroSection from "@/components/hero-section";
import { TeaserSections } from "@/components/teaser-sections";
import { ColorSections } from "@/components/color-sections";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturesSectionGraphed />
			<FeaturesSection />
			<TeaserSections />
			<ColorSections />
		</>
	);
}
