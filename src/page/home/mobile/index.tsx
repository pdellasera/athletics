import MobileLandingLayout from '../../../layout/MobileLandingLayout';
import MobileHero from '../../../components/landing/mobile/MobileHero';
import MobileTrustBar from '../../../components/landing/mobile/MobileTrustBar';
import MobileProblemSection from '../../../components/landing/mobile/MobileProblemSection';
import MobileSolutionSection from '../../../components/landing/mobile/MobileSolutionSection';
import MobileSynergySection from '../../../components/landing/mobile/MobileSynergySection';
import MobileHowItWorks from '../../../components/landing/mobile/MobileHowItWorks';
import MobileFeaturesGrid from '../../../components/landing/mobile/MobileFeaturesGrid';
import MobileTestimonials from '../../../components/landing/mobile/MobileTestimonials';
import MobilePricing from '../../../components/landing/mobile/MobilePricing';
import MobileFAQ from '../../../components/landing/mobile/MobileFAQ';
import MobileFinalCTA from '../../../components/landing/mobile/MobileFinalCTA';

export default function MobileHomePage() {
    return (
        <MobileLandingLayout>
            <MobileHero />
            <MobileTrustBar />

            <div id="solucion">
                <MobileProblemSection />
            </div>

            <div id="productos">
                <MobileSolutionSection />
            </div>

            <div id="modulos">
                <MobileSynergySection />
            </div>

            <div id="como-funciona">
                <MobileHowItWorks />
            </div>

            <div id="caracteristicas">
                <MobileFeaturesGrid />
            </div>

            <MobileTestimonials />

            <div id="precios">
                <MobilePricing />
            </div>

            <MobileFAQ />

            <MobileFinalCTA />
        </MobileLandingLayout>
    );
}
