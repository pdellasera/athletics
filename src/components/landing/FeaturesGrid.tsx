import { motion } from 'framer-motion';
import { Database, Blocks, Shield, FileCheck, TrendingUp, Rocket } from 'lucide-react';
import { useChatbotContext } from '../../context/ChatbotContext';

export default function FeaturesGrid() {
    const { openChatbot } = useChatbotContext();
    const features = [
        {
            icon: Database,
            title: 'Base central por cédula',
            description: 'Un atleta = una cuenta. Sin duplicados, sin inconsistencias.',
        },
        {
            icon: Blocks,
            title: 'Módulos independientes',
            description: 'Activa solo lo que necesitas: Programas, Torneos, o ambos.',
        },
        {
            icon: Shield,
            title: 'Roles y permisos',
            description: 'Control granular de acceso según el rol institucional.',
        },
        {
            icon: FileCheck,
            title: 'Historial auditable',
            description: 'Trazabilidad completa de cada acción y cambio en el sistema.',
        },
        {
            icon: TrendingUp,
            title: 'Plataforma escalable',
            description: 'Crece con tu organización, desde 10 hasta 10,000 atletas.',
        },
    ];

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
                    FEATURES
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
                        <Rocket className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Características</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Características Institucionales
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide">
                        Diseñado para organizaciones que necesitan control, seguridad y escalabilidad
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            whileHover={{ y: -2, scale: 1.01 }}
                            className="group bg-white border-2 border-slate-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3371b0]/10 to-[#6fa86a]/10 flex items-center justify-center border-2 border-[#3371b0]/20 group-hover:border-[#3371b0]/40 transition-all duration-300">
                                    <feature.icon className="w-8 h-8 text-[#3371b0]" strokeWidth={2.5} />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-slate-900 mb-4 text-center">
                                {feature.title}
                            </h4>

                            <p className="text-slate-600 leading-relaxed font-medium text-center">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        whileHover={{ y: -2, scale: 1.01 }}
                        className="group bg-gradient-to-br from-[#3371b0] to-[#6fa86a] text-white rounded-2xl flex flex-col justify-center items-center text-center p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all">
                            <Rocket className="w-8 h-8" strokeWidth={2.5} />
                        </div>
                        <h4 className="text-xl font-black mb-4">
                            ¿Listo para transformar tu gestión deportiva?
                        </h4>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            onClick={openChatbot}
                            className="bg-white text-[#3371b0] px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg"
                        >
                            Solicitar Demo
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
