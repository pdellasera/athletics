import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useChatbotContext } from '../../context/ChatbotContext';

export default function MobileNavbar() {
    const { openChatbot } = useChatbotContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Solución', href: '#solucion' },
        { name: 'Productos', href: '#productos' },
        { name: 'Módulos', href: '#precios' },
        { name: 'Cómo Funciona', href: '#como-funciona' },
        { name: 'Características', href: '#caracteristicas' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
                <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
                                <img src={logo} alt="Athletics" className="w-32" />
                            </a>
                        </motion.div>

                        {/* Hamburger Menu Button */}
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#1c2e81] text-white"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    pointerEvents: isMenuOpen ? 'auto' : 'none'
                }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isMenuOpen ? 0 : '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl"
            >
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-black text-slate-900">Menú</h3>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6 text-slate-600" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto py-6">
                        <nav className="space-y-2 px-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1c2e81] rounded-lg transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Button */}
                    <div className="p-4 border-t border-slate-200">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setIsMenuOpen(false);
                                openChatbot();
                            }}
                            className="w-full bg-[#1c2e81] hover:bg-[#3371b0] text-white px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-colors"
                        >
                            Contacto
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
