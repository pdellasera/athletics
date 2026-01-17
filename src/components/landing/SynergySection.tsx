import { motion } from 'framer-motion';
import { User, Dumbbell, Trophy, ArrowRight, Link2 } from 'lucide-react';

export default function SynergySection() {
    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden py-20">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[18vw] font-black text-slate-200/30 leading-none tracking-tighter select-none"
                >
                    SINERGIA
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3371b0]/10 to-[#6fa86a]/10 rounded-full px-4 py-2 border border-[#3371b0]/20 mb-6">
                        <Link2 className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Sinergia entre módulos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Un Atleta, Un Historial,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Infinitas Posibilidades
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                        El atleta no se reinicia. Su historial se construye continuamente entre Programas y Torneos.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
                        {/* Athlete Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                    <User className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-3">
                                Perfil del Atleta
                            </h4>
                            <p className="text-slate-600 mb-6 font-medium">
                                Identificación única por cédula
                            </p>
                            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 shadow-sm border-2 border-slate-200/50">
                                <div className="font-black text-slate-900 mb-1">Juan Pérez</div>
                                <div className="text-sm text-slate-500 font-semibold">ID: 8-1234-5678</div>
                            </div>
                        </motion.div>

                        {/* Arrow */}
                        <div className="hidden md:flex flex-col items-center gap-6">
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a]"
                            >
                                <ArrowRight className="w-10 h-10 text-[#3371b0]" strokeWidth={2.5} />
                            </motion.div>
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a]"
                            >
                                <ArrowRight className="w-10 h-10 text-[#6fa86a]" strokeWidth={2.5} />
                            </motion.div>
                        </div>

                        {/* Two Modules */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ y: -2, scale: 1.01 }}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#3371b0] to-[#6fa86a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                                        <Dumbbell className="w-7 h-7 text-white" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900">Programas</div>
                                        <div className="text-sm text-slate-600 font-semibold">Desarrollo</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                                whileHover={{ y: -2, scale: 1.01 }}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#3371b0] to-[#6fa86a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                                        <Trophy className="w-7 h-7 text-white" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900">Torneos</div>
                                        <div className="text-sm text-slate-600 font-semibold">Competencia</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <motion.div
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] mb-3">1</div>
                            <div className="text-lg font-black text-slate-900 mb-2">Cuenta única</div>
                            <div className="text-slate-600 font-medium">Sin duplicación de datos</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] mb-3">∞</div>
                            <div className="text-lg font-black text-slate-900 mb-2">Historial continuo</div>
                            <div className="text-slate-600 font-medium">Desde entrenamiento hasta competencia</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] mb-3">100%</div>
                            <div className="text-lg font-black text-slate-900 mb-2">Trazabilidad total</div>
                            <div className="text-slate-600 font-medium">Auditable y verificable</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
