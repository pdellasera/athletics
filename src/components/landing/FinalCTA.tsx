import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useChatbotContext } from '../../context/ChatbotContext';

export default function FinalCTA() {
    const { openChatbot } = useChatbotContext();
    return (
        <section className="relative bg-white overflow-hidden py-20">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[20vw] font-black text-slate-200/40 leading-none tracking-tighter select-none"
                >
                    EMPIEZA
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-slate-200/50"
                >
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3371b0]/10 to-[#6fa86a]/10 rounded-full px-4 py-2 border border-[#3371b0]/20 mb-6">
                            <Sparkles className="w-4 h-4 text-[#3371b0]" />
                            <span className="text-sm font-bold text-slate-700">Comienza tu transformación</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                            Empieza Hoy con Athletics
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide">
                            Transforma la gestión deportiva de tu organización con la plataforma oficial de registro y seguimiento de atletas
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openChatbot}
                                className="group bg-gradient-to-r from-[#1c2e81] to-[#3371b0] hover:from-[#3371b0] hover:to-[#6fa86a] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                            >
                                <Zap className="w-6 h-6" />
                                Empieza Gratis Ahora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openChatbot}
                                className="bg-white border-2 border-[#3371b0] text-[#3371b0] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#3371b0] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Solicitar Demo
                            </motion.button>
                        </div>

                        {/* Benefits */}
                        <div className="flex flex-wrap justify-center gap-8 text-slate-700">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="font-bold">Sin tarjeta de crédito</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="font-bold">Configuración en 5 minutos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="font-bold">Soporte en español</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
