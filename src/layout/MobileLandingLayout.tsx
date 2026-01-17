import type { ReactNode } from 'react';
import MobileNavbar from '../components/mobile/MobileNavbar';
import Footer from '../components/landing/Footer';

interface MobileLandingLayoutProps {
    children: ReactNode;
}

export default function MobileLandingLayout({ children }: MobileLandingLayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            <MobileNavbar />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
