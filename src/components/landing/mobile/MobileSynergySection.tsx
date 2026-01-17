import { motion } from 'framer-motion';
import { User, Dumbbell, Trophy, ArrowRight } from 'lucide-react';

export default function MobileSynergySection() {
    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden py-16 px-5">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[20vw] font-black text-slate-200/40 leading-none tracking-tighter select-none"
                >
                    ATHLETICS
                </motion.div>
            </div>

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border-2 border-[#3371b0]/20 mb-6 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3371b0] to-[#6fa86a]"></div>
                        <span className="text-xs font-bold text-slate-700">Sinergia entre módulos</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4 px-2">
                        Un Atleta,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Un Historial
                        </span>
                    </h2>
                    <p className="text-base text-slate-600 font-medium px-4 leading-relaxed">
                        El historial del atleta se construye continuamente entre Programas y Torneos
                    </p>
                </motion.div>

                {/* Flow Diagram */}
                <div className="space-y-6 mb-10">
                    {/* Athlete Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-slate-200/50 shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-lg flex-shrink-0">
                                <User className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-black text-slate-900 mb-1">
                                    Perfil del Atleta
                                </h4>
                                <p className="text-sm text-slate-600 font-medium">
                                    Identificación única por cédula
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-200/50">
                            <div className="font-black text-slate-900 text-base mb-1">Juan Pérez</div>
                            <div className="text-sm text-slate-500 font-semibold">ID: 8-1234-5678</div>
                        </div>
                    </motion.div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-lg"
                        >
                            <ArrowRight className="w-5 h-5 text-white rotate-90" strokeWidth={2.5} />
                        </motion.div>
                    </div>

                    {/* Two Modules */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border-2 border-slate-200/50 shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#3371b0] to-[#6fa86a] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Dumbbell className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-black text-slate-900 text-base mb-1">Programas Deportivos</div>
                                    <div className="text-sm text-slate-600 font-medium">Desarrollo y entrenamiento</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border-2 border-slate-200/50 shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#3371b0] to-[#6fa86a] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Trophy className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-black text-slate-900 text-base mb-1">Torneos</div>
                                    <div className="text-sm text-slate-600 font-medium">Competencia y logros</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-3 gap-3">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-slate-200/50 shadow-lg"
                    >
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] mb-2">1</div>
                        <div className="text-xs font-black text-slate-900 mb-1 leading-tight">Cuenta única</div>
                        <div className="text-[10px] text-slate-600 font-medium leading-tight">Sin duplicados</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-slate-200/50 shadow-lg"
                    >
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] mb-2">∞</div>
                        <div className="text-xs font-black text-slate-900 mb-1 leading-tight">Historial continuo</div>
                        <div className="text-[10px] text-slate-600 font-medium leading-tight">Completo</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-slate-200/50 shadow-lg"
                    >
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] mb-2">100%</div>
                        <div className="text-xs font-black text-slate-900 mb-1 leading-tight">Trazabilidad</div>
                        <div className="text-[10px] text-slate-600 font-medium leading-tight">Auditable</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
