import { motion } from 'framer-motion';
import { UserPlus, Settings, Link2, LineChart, ArrowRight } from 'lucide-react';
import { useChatbotContext } from '../../../context/ChatbotContext';

export default function MobileHowItWorks() {
    const { openChatbot } = useChatbotContext();

    const steps = [
        {
            number: '01',
            icon: UserPlus,
            title: 'Registro único del atleta',
            description: 'Identificación por cédula, una sola vez.',
        },
        {
            number: '02',
            icon: Settings,
            title: 'Activación del módulo',
            description: 'Elige Programas, Torneos, o ambos.',
        },
        {
            number: '03',
            icon: Link2,
            title: 'Vinculación',
            description: 'Conecta al atleta con programa o equipo.',
        },
        {
            number: '04',
            icon: LineChart,
            title: 'Seguimiento continuo',
            description: 'Monitorea en tiempo real.',
        },
    ];

    return (
        <section className="relative bg-white overflow-hidden py-16 px-5">
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
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3371b0]/10 to-[#6fa86a]/10 rounded-full px-4 py-2 border-2 border-[#3371b0]/20 mb-6 shadow-sm">
                        <ArrowRight className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-xs font-bold text-slate-700">Proceso simple</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4 px-2">
                        ¿Cómo Funciona{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Athletics?
                        </span>
                    </h2>
                    <p className="text-base text-slate-600 font-medium px-4">
                        Cuatro pasos simples
                    </p>
                </motion.div>

                <div className="space-y-5 mb-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-white border-2 border-slate-200/50 rounded-2xl p-5 shadow-lg"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-lg">
                                <span className="text-lg font-black text-white">{step.number}</span>
                            </div>

                            <div className="flex items-start gap-4 pr-6">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3371b0]/10 to-[#6fa86a]/10 flex items-center justify-center border-2 border-[#3371b0]/20 flex-shrink-0">
                                    <step.icon className="w-6 h-6 text-[#3371b0]" strokeWidth={2.5} />
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-base font-black text-slate-900 mb-2 leading-tight">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileTap={{ scale: 0.97 }}
                    onClick={openChatbot}
                    className="w-full bg-gradient-to-r from-[#3371b0] to-[#6fa86a] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center gap-2"
                >
                    Empieza el Registro Ahora
                    <ArrowRight className="w-4 h-4" />
                </motion.button>
            </div>
        </section>
    );
}
