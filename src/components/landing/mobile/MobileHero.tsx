import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useChatbotContext } from '../../../context/ChatbotContext';

export default function MobileHero() {
    const { openChatbot } = useChatbotContext();

    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden pt-24 pb-16 px-6">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[20vw] font-black text-slate-200/40 leading-none tracking-tighter select-none"
                >
                    ATHLETICS
                </motion.div>
            </div>

            {/* Decorative Gradient Orbs */}
            <div className="absolute top-20 -right-20 w-72 h-72 bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 -left-20 w-64 h-64 bg-gradient-to-br from-[#1c2e81]/15 to-[#adcd57]/15 rounded-full blur-3xl"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-9rem)] text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1c2e81]/10 via-[#3371b0]/10 to-[#6fa86a]/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[#3371b0]/30 mb-6 shadow-sm"
                >
                    <Sparkles className="w-3.5 h-3.5 text-[#3371b0]" />
                    <span className="text-xs font-bold bg-gradient-to-r from-[#1c2e81] to-[#3371b0] bg-clip-text text-transparent">
                        Plataforma Integral de Gestión Deportiva
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6"
                >
                    <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Todo el{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                                ecosistema
                            </span>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3371b0] to-[#6fa86a] rounded-full origin-left"
                            />
                        </span>
                        <br />
                        deportivo en{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            un solo lugar
                        </span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-slate-600 font-medium leading-relaxed max-w-md mb-12"
                >
                    Gestiona programas deportivos y torneos con{' '}
                    <span className="font-bold text-slate-900">un solo registro por atleta</span>
                    , sin duplicados, con trazabilidad total
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full max-w-sm flex items-center justify-center gap-3"
                >
                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={openChatbot}
                        className="group bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                    >
                        <span className="relative z-10">Empieza Gratis</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#3371b0] to-[#6fa86a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={openChatbot}
                        className="bg-white border-2 border-slate-200 text-slate-900 px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:border-[#3371b0]/30 transition-all duration-300"
                    >
                        Ver Demo
                    </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-600 font-medium"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#6fa86a]"></div>
                        <span>Sin tarjeta</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#6fa86a]"></div>
                        <span>Setup en 5 min</span>
                    </div>
                </motion.div>

                {/* Floating Stats Cards */}
                <div className="absolute top-1/4 left-4 hidden sm:block">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-200/50"
                    >
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a]">
                            15K+
                        </div>
                        <div className="text-xs font-bold text-slate-600">Atletas</div>
                    </motion.div>
                </div>

                <div className="absolute top-1/3 right-4 hidden sm:block">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-200/50"
                    >
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a]">
                            100%
                        </div>
                        <div className="text-xs font-bold text-slate-600">Trazable</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
