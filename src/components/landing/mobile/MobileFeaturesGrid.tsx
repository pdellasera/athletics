import { motion } from 'framer-motion';
import { Database, Blocks, Shield, FileCheck, TrendingUp, Rocket } from 'lucide-react';
import { useChatbotContext } from '../../../context/ChatbotContext';

export default function MobileFeaturesGrid() {
    const { openChatbot } = useChatbotContext();

    const features = [
        {
            icon: Database,
            title: 'Base central por cédula',
            description: 'Un atleta = una cuenta. Sin duplicados.',
        },
        {
            icon: Blocks,
            title: 'Módulos independientes',
            description: 'Activa solo lo que necesitas.',
        },
        {
            icon: Shield,
            title: 'Roles y permisos',
            description: 'Control granular de acceso.',
        },
        {
            icon: FileCheck,
            title: 'Historial auditable',
            description: 'Trazabilidad completa.',
        },
        {
            icon: TrendingUp,
            title: 'Plataforma escalable',
            description: 'De 10 hasta 10,000 atletas.',
        },
    ];

    return (
        <section className="relative bg-white overflow-hidden py-12 px-4">
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
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3371b0]/10 to-[#6fa86a]/10 rounded-full px-4 py-2 border border-[#3371b0]/20 mb-4">
                        <Rocket className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-xs font-bold text-slate-700">Características</span>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 leading-tight mb-3">
                        Características Institucionales
                    </h2>
                    <p className="text-sm text-slate-600 font-medium">
                        Control, seguridad y escalabilidad
                    </p>
                </motion.div>

                <div className="space-y-4 mb-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border-2 border-slate-200/50 rounded-2xl p-5 shadow-lg"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3371b0]/10 to-[#6fa86a]/10 flex items-center justify-center border-2 border-[#3371b0]/20 flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-[#3371b0]" strokeWidth={2.5} />
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-base font-black text-slate-900 mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-[#3371b0] to-[#6fa86a] text-white rounded-2xl p-6 text-center shadow-xl"
                    >
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                            <Rocket className="w-7 h-7" strokeWidth={2.5} />
                        </div>
                        <h4 className="text-lg font-black mb-4">
                            ¿Listo para transformar tu gestión deportiva?
                        </h4>
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={openChatbot}
                            className="w-full bg-white text-[#3371b0] px-5 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg text-sm"
                        >
                            Solicitar Demo
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
