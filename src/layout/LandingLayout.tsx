import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/landing/Footer';

interface LandingLayoutProps {
    children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Navbar - Shared across all landing pages */}
            <Navbar />

            {/* Main Content - No padding, sections handle their own spacing */}
            <main className="w-full">
                {children}
            </main>

            {/* Footer - Shared across all landing pages */}
            <Footer />
        </div>
    );
}
