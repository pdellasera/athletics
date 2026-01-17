import { motion } from 'framer-motion';
import { AlertTriangle, FileX, Copy, TrendingDown } from 'lucide-react';

export default function MobileProblemSection() {
    const problems = [
        {
            icon: AlertTriangle,
            title: 'Programas sin control',
            description: 'Asistencia manual, sin seguimiento real del progreso del atleta.',
            color: 'from-[#3371b0] to-[#6fa86a]'
        },
        {
            icon: FileX,
            title: 'Torneos en Excel',
            description: 'Inscripciones desorganizadas, rosters incompletos, sin validación.',
            color: 'from-[#3371b0] to-[#6fa86a]'
        },
        {
            icon: Copy,
            title: 'Datos duplicados',
            description: 'El mismo atleta registrado múltiples veces en diferentes sistemas.',
            color: 'from-[#3371b0] to-[#6fa86a]'
        },
        {
            icon: TrendingDown,
            title: 'Sin trazabilidad',
            description: 'Imposible auditar el historial deportivo completo de un atleta.',
            color: 'from-[#3371b0] to-[#6fa86a]'
        },
    ];

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
                    <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4 px-2">
                        El{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Caos Deportivo
                        </span>
                        {' '}Tiene Un Costo
                    </h2>
                    <p className="text-base text-slate-600 font-medium px-4">
                        Sin un sistema centralizado, la gestión se vuelve un desastre
                    </p>
                </motion.div>

                <div className="space-y-5 mb-10">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-slate-200/50 shadow-lg active:scale-[0.98] transition-transform"
                        >
                            <div className="flex items-start gap-5">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                    <problem.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 pt-1">
                                    <h4 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                                        {problem.title}
                                    </h4>
                                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-sm border-2 border-[#3371b0]/30 rounded-3xl px-8 py-8 shadow-xl"
                >
                    <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] italic leading-tight text-center">
                        "Sin sistema, no hay seguimiento. Sin seguimiento, no hay desarrollo."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
