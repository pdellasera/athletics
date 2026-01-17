import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useChatbotContext } from '../../context/ChatbotContext';

export default function Hero() {
    const { openChatbot } = useChatbotContext();
    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden pt-20">

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

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Feature Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1c2e81]/10 to-[#3371b0]/10 rounded-full px-4 py-2 border border-[#3371b0]/20"
                        >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6fa86a] to-[#adcd57] animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-700">Plataforma integral de gestión deportiva</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                                Todo el{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                                    ecosistema deportivo
                                </span>
                                {' '}para proyectos y ligas
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed tracking-wide">
                                Una plataforma que integra proyectos deportivos y gestión de ligas en un solo ecosistema digital
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                onClick={openChatbot}
                                className="group bg-gradient-to-r from-[#1c2e81] to-[#3371b0] hover:from-[#3371b0] hover:to-[#6fa86a] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 flex items-center gap-3"
                            >
                                Empieza Ahora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>

                    </div>

                    {/* Right Column - Visual Elements */}
                    <div className="relative hidden lg:block">
                        {/* Central Logo/Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                            className="relative z-20"
                        >
                            <div className="relative">
                                <img
                                    src={logo}
                                    alt="Athletics Platform"
                                    className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                                />

                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 blur-3xl -z-10"></div>
                            </div>
                        </motion.div>

                        {/* Floating Stats Card - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -20 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, -8, 0]
                            }}
                            transition={{
                                opacity: { duration: 0.5, delay: 0.3, ease: "easeOut" },
                                x: { duration: 0.5, delay: 0.3, ease: "easeOut" },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="absolute -top-12 -right-20 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1c2e81] to-[#3371b0] border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3371b0] to-[#6fa86a] border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6fa86a] to-[#adcd57] border-2 border-white"></div>
                                </div>
                                <span className="text-sm font-bold text-slate-900">7M+</span>
                            </div>
                            <div className="text-xs text-slate-600 font-medium">Atletas registrados</div>
                        </motion.div>

                        {/* Floating Dashboard Card - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, 8, 0]
                            }}
                            transition={{
                                opacity: { duration: 0.5, delay: 0.4, ease: "easeOut" },
                                x: { duration: 0.5, delay: 0.4, ease: "easeOut" },
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="absolute -bottom-32 -left-20 bg-white rounded-2xl shadow-2xl p-5 border border-slate-200 w-54"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Dashboard</div>
                                <div className="px-3 py-1 bg-gradient-to-r from-[#6fa86a] to-[#adcd57] text-white text-xs font-bold rounded-full">
                                    En Vivo
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                                    <span className="text-xs font-semibold text-slate-700">Asistencias hoy</span>
                                    <span className="text-sm font-black text-[#1c2e81]">248</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                                    <span className="text-xs font-semibold text-slate-700">Programas activos</span>
                                    <span className="text-sm font-black text-[#3371b0]">12</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-gradient-to-r from-[#6fa86a]/10 to-[#adcd57]/10 rounded-lg border border-[#6fa86a]/20">
                                    <span className="text-xs font-semibold text-slate-700">Verificación</span>
                                    <span className="text-sm font-black text-[#6fa86a]">100%</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge - Right Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{
                                opacity: { duration: 0.6, delay: 1 },
                                scale: { duration: 0.6, delay: 1 },
                                rotate: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="absolute -right-16 top-3/4 bg-gradient-to-br from-[#6fa86a] to-[#adcd57] text-white rounded-2xl shadow-2xl px-6 py-4"
                        >
                            <div className="text-3xl font-black">100%</div>
                            <div className="text-xs font-bold uppercase tracking-wider">Verificado</div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}
