import { motion } from 'framer-motion';
import { UserPlus, Settings, Link2, LineChart, ArrowRight } from 'lucide-react';
import { useChatbotContext } from '../../context/ChatbotContext';

export default function HowItWorks() {
    const { openChatbot } = useChatbotContext();
    const steps = [
        {
            number: '01',
            icon: UserPlus,
            title: 'Registro único del atleta',
            description: 'Identificación por cédula, una sola vez, para toda la plataforma.',
        },
        {
            number: '02',
            icon: Settings,
            title: 'Activación del módulo',
            description: 'Elige Programas Deportivos, Torneos, o ambos según tu necesidad.',
        },
        {
            number: '03',
            icon: Link2,
            title: 'Vinculación a programa o equipo',
            description: 'Conecta al atleta con el programa de entrenamiento o equipo competitivo.',
        },
        {
            number: '04',
            icon: LineChart,
            title: 'Seguimiento continuo',
            description: 'Monitorea asistencia, progreso, y participación en tiempo real.',
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
                    PROCESO
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
                        <ArrowRight className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Proceso simple</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        ¿Cómo Funciona Athletics?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                        Cuatro pasos simples para transformar la gestión deportiva
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            whileHover={{ y: -2, scale: 1.01 }}
                            className="group relative bg-white border-2 border-slate-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Large Number Badge - Top Right */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl font-black text-white">{step.number}</span>
                            </div>

                            {/* Icon */}
                            <div className="flex items-center justify-center mb-8 mt-4">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3371b0]/10 to-[#6fa86a]/10 flex items-center justify-center border-2 border-[#3371b0]/20 group-hover:border-[#3371b0]/40 transition-all duration-300">
                                    <step.icon className="w-10 h-10 text-[#3371b0]" strokeWidth={2.5} />
                                </div>
                            </div>

                            <h4 className="text-xl font-black text-slate-900 mb-4 text-center">
                                {step.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed font-medium text-center">
                                {step.description}
                            </p>

                            {/* Connector Arrow */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <div className="w-8 h-8 rounded-full bg-white border-2 border-[#3371b0] flex items-center justify-center shadow-lg">
                                        <ArrowRight className="w-5 h-5 text-[#3371b0]" strokeWidth={3} />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openChatbot}
                        className="bg-gradient-to-r from-[#3371b0] to-[#6fa86a] hover:from-[#6fa86a] hover:to-[#adcd57] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                        Empieza el Registro Ahora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
