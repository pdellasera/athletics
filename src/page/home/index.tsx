import { useDeviceDetector } from '../../hooks/useDeviceDetector';
import MobileHomePage from './mobile';
import LandingLayout from '../../layout/LandingLayout';
import Hero from '../../components/landing/Hero';
import TrustBar from '../../components/landing/TrustBar';
import ProblemSection from '../../components/landing/ProblemSection';
import SolutionSection from '../../components/landing/SolutionSection';
import SynergySection from '../../components/landing/SynergySection';
import HowItWorks from '../../components/landing/HowItWorks';
import TargetAudience from '../../components/landing/TargetAudience';
import FeaturesGrid from '../../components/landing/FeaturesGrid';
import Testimonials from '../../components/landing/Testimonials';
import Pricing from '../../components/landing/Pricing';
import FinalCTA from '../../components/landing/FinalCTA';
import FAQ from '../../components/landing/FAQ';

export default function HomePage() {
    const { isMobile } = useDeviceDetector();

    // Render mobile-optimized version for mobile devices
    if (isMobile) {
        return <MobileHomePage />;
    }

    // Render desktop version for tablets and desktops
    return (
        <LandingLayout>
            <Hero />
            <TrustBar />
            <div id="solucion">
                <ProblemSection />
            </div>
            <div id="productos">
                <SolutionSection />
            </div>
            <div id="modulos">
                <SynergySection />
            </div>
            <div id="como-funciona">
                <HowItWorks />
            </div>
            <TargetAudience />
            <div id="caracteristicas">
                <FeaturesGrid />
            </div>
            <Testimonials />
            <div id="precios">
                <Pricing />
            </div>
            <FAQ />
            <FinalCTA />
        </LandingLayout>
    );
}
