import { motion } from 'framer-motion';
import { AlertTriangle, FileX, Copy, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        {
            icon: AlertTriangle,
            title: 'Programas sin control',
            description: 'Asistencia manual, sin seguimiento real del progreso del atleta.',
            color: 'from-[#3371b0] to-[#6fa86a]'
        },
        {
            icon: FileX,
            title: 'Torneos en Excel y WhatsApp',
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
            title: 'Sin trazabilidad institucional',
            description: 'Imposible auditar el historial deportivo completo de un atleta.',
            color: 'from-[#3371b0] to-[#6fa86a]'
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
                    PROBLEMA
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        El{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Caos Deportivo
                        </span>
                        {' '}Tiene Un{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Costo
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide">
                        Sin un sistema centralizado, la gestión deportiva se vuelve un desastre operativo
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            whileHover={{ y: -2, scale: 1.01 }}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                                    <problem.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-3">
                                {problem.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm font-medium">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-center"
                >
                    <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-slate-200/50 rounded-2xl px-12 py-8 shadow-xl">
                        <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] italic leading-tight">
                            "Sin sistema, no hay seguimiento.
                            <br />
                            Sin seguimiento, no hay desarrollo."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
