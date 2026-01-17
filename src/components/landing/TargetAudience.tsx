import { motion } from 'framer-motion';
import { Building2, Trophy, Heart, CheckCircle2 } from 'lucide-react';

export default function TargetAudience() {
    const audiences = [
        {
            icon: Building2,
            title: 'Programas Deportivos',
            description: 'Clubes, academias y escuelas deportivas que necesitan control de asistencia y seguimiento del atleta.',
            benefits: ['Control automatizado', 'Seguimiento de progreso', 'Gestión multi-sede'],
        },
        {
            icon: Trophy,
            title: 'Organizadores de Torneos',
            description: 'Instituciones que gestionan competencias y necesitan validación de elegibilidad y rosters.',
            benefits: ['Inscripción formal', 'Validación automática', 'Historial completo'],
        },
        {
            icon: Heart,
            title: 'Padres y Atletas',
            description: 'Familias que buscan transparencia y trazabilidad en el desarrollo deportivo.',
            benefits: ['Historial unificado', 'Métricas de progreso', 'Validación institucional'],
        },
    ];

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
                    AUDIENCIA
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
                        <Heart className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Para todos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        ¿Para Quién Es{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Athletics
                        </span>?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                        Una solución diseñada para todo el ecosistema deportivo
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            whileHover={{ y: -2, scale: 1.01 }}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                    <audience.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </div>
                            </div>

                            <h3 className="text-xl font-black text-slate-900 mb-4">
                                {audience.title}
                            </h3>

                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                {audience.description}
                            </p>

                            <ul className="space-y-3 text-left">
                                {audience.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="font-semibold">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
