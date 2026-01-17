import { motion } from 'framer-motion';
import { Users, Trophy, Target, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TrustBar() {
    const [counts, setCounts] = useState({ athletes: 0, programs: 0, tournaments: 0, teams: 0 });

    useEffect(() => {
        const targets = { athletes: 15000, programs: 250, tournaments: 180, teams: 800 };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounts({
                athletes: Math.floor(targets.athletes * progress),
                programs: Math.floor(targets.programs * progress),
                tournaments: Math.floor(targets.tournaments * progress),
                teams: Math.floor(targets.teams * progress),
            });

            if (step >= steps) {
                clearInterval(timer);
                setCounts(targets);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const metrics = [
        { icon: Users, value: `+${counts.athletes.toLocaleString()}`, label: 'Atletas Registrados', color: 'from-[#3371b0] to-[#6fa86a]' },
        { icon: Target, value: `+${counts.programs}`, label: 'Programas Activos', color: 'from-[#3371b0] to-[#6fa86a]' },
        { icon: Trophy, value: `+${counts.tournaments}`, label: 'Torneos Gestionados', color: 'from-[#3371b0] to-[#6fa86a]' },
        { icon: Award, value: `+${counts.teams}`, label: 'Equipos Inscritos', color: 'from-[#3371b0] to-[#6fa86a]' },
    ];

    return (
        <section className="bg-white/95 backdrop-blur-xl border-y border-slate-200/50 shadow-lg py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Confianza Institucional
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                        Resultados que Hablan
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group text-center p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                                    <metric.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                            <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.color} mb-2`}>
                                {metric.value}
                            </div>
                            <div className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wide">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
