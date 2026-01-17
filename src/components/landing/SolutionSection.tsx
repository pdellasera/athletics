import { motion } from 'framer-motion';
import { Users, Calendar, TrendingUp, MapPin, Trophy, UserCheck, Shield, BarChart3, ArrowRight } from 'lucide-react';

export default function SolutionSection() {
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
                    SOLUCIÓN
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
                        <Users className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Athletics Suite</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Dos Productos, Una Plataforma
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide">
                        Módulos independientes que comparten la misma base de datos de atletas
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Programas Deportivos */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="group bg-white border-2 border-slate-200/50 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
                            </div>
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-4 text-center">
                            Athletics Programas Deportivos
                        </h3>

                        <p className="text-lg text-slate-600 mb-8 text-center font-medium">
                            Gestión completa del desarrollo del atleta en programas de entrenamiento
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <UserCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Registro único por cédula</div>
                                    <div className="text-sm text-slate-600">Sin duplicados, sin confusión</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Calendar className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Control de asistencia por sesión</div>
                                    <div className="text-sm text-slate-600">Automatizado y en tiempo real</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Seguimiento de progreso</div>
                                    <div className="text-sm text-slate-600">Métricas y reportes por periodos</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Gestión por grupos y sedes</div>
                                    <div className="text-sm text-slate-600">Organización multi-nivel</div>
                                </div>
                            </li>
                        </ul>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-[#3371b0] to-[#6fa86a] hover:from-[#6fa86a] hover:to-[#adcd57] text-white px-8 py-4 rounded-xl font-bold w-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            Activar Programas Deportivos
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    {/* Torneos */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="group bg-white border-2 border-slate-200/50 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                <Trophy className="w-8 h-8 text-white" strokeWidth={2.5} />
                            </div>
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-4 text-center">
                            Athletics Torneos
                        </h3>

                        <p className="text-lg text-slate-600 mb-8 text-center font-medium">
                            Organización profesional de competencias deportivas institucionales
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Users className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Gestión de equipos y rosters</div>
                                    <div className="text-sm text-slate-600">Control completo de inscripciones</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Inscripción formal y validada</div>
                                    <div className="text-sm text-slate-600">Proceso estructurado y seguro</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <UserCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Validación de elegibilidad</div>
                                    <div className="text-sm text-slate-600">Automática y en tiempo real</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <BarChart3 className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Historial competitivo completo</div>
                                    <div className="text-sm text-slate-600">Trazabilidad total de participación</div>
                                </div>
                            </li>
                        </ul>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-[#3371b0] to-[#6fa86a] hover:from-[#6fa86a] hover:to-[#adcd57] text-white px-8 py-4 rounded-xl font-bold w-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            Activar Torneos
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
