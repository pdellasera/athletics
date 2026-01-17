import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { useChatbotContext } from '../context/ChatbotContext';

export default function Navbar() {
    const { openChatbot } = useChatbotContext();

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
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Height of navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
                            <img src={logo} alt="Athletics" className="w-40 cursor-pointer" />
                        </a>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-semibold text-slate-700 hover:text-[#1c2e81] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1c2e81] to-[#3371b0] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </motion.div>

                    {/* Contact Button */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openChatbot}
                        className="bg-[#1c2e81] hover:bg-[#3371b0] cursor-pointer text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg transition-colors"
                    >
                        Contacto
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </nav>
    );
}
