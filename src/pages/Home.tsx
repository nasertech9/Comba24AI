import HeroSection from "@/components/features/HeroSection";
import StatsSection from "@/components/features/StatsSection";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import ToolsShowcase from "@/components/features/ToolsShowcase";
import AgentsSection from "@/components/features/AgentsSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import PricingSection from "@/components/features/PricingSection";
import CTASection from "@/components/features/CTASection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <StatsSection />
      <FeaturesGrid />
      <ToolsShowcase />
      <AgentsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
