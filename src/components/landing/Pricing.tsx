import { motion } from 'framer-motion';
import { Users, Trophy, Zap, CheckCircle2, Sparkles } from 'lucide-react';
import { useChatbotContext } from '../../context/ChatbotContext';

export default function Pricing() {
    const { openChatbot } = useChatbotContext();
    const options = [
        {
            icon: Users,
            name: 'Programas Deportivos',
            description: 'Gestión completa del desarrollo del atleta',
            features: [
                'Registro por cédula',
                'Control de asistencia',
                'Seguimiento de progreso',
                'Gestión de grupos y sedes',
                'Reportes institucionales',
            ],
            cta: 'Solicitar Demo',
            highlight: false,
        },
        {
            icon: Zap,
            name: 'Suite Completa',
            description: 'Programas + Torneos en una sola plataforma',
            features: [
                'Todas las funciones de Programas',
                'Todas las funciones de Torneos',
                'Historial unificado del atleta',
                'Sinergia entre módulos',
                'Soporte prioritario',
            ],
            cta: 'Empezar Ahora',
            highlight: true,
        },
        {
            icon: Trophy,
            name: 'Torneos',
            description: 'Organización profesional de competencias',
            features: [
                'Gestión de equipos',
                'Inscripción formal',
                'Validación de elegibilidad',
                'Historial competitivo',
                'Control de rosters',
            ],
            cta: 'Solicitar Demo',
            highlight: false,
        },
    ];

    return (
        <section className="relative bg-white overflow-hidden py-20">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51, 113, 176) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[16vw] font-black text-slate-100 leading-none tracking-tighter select-none"
                >
                    MODALIDADES
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
                        <Sparkles className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Modalidades</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Modalidades de Athletics
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                        Elige el módulo que necesitas o activa la suite completa
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {options.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${option.highlight
                                ? 'border-[#3371b0] shadow-2xl scale-105 ring-4 ring-[#3371b0]/10'
                                : 'border-slate-200 shadow-lg hover:shadow-xl hover:border-[#3371b0]/30'
                                }`}
                        >
                            {option.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3371b0] to-[#6fa86a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Recomendado
                                </div>
                            )}

                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 ${option.highlight
                                ? 'bg-gradient-to-br from-[#3371b0] to-[#6fa86a]'
                                : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-[#3371b0]/10 group-hover:to-[#6fa86a]/10'
                                }`}>
                                <option.icon className={`w-8 h-8 ${option.highlight ? 'text-white' : 'text-[#3371b0]'}`} strokeWidth={2} />
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-3 text-center tracking-tight">
                                {option.name}
                            </h3>

                            <p className="text-slate-600 mb-8 text-center font-medium leading-relaxed">
                                {option.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {option.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#6fa86a] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openChatbot}
                                className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${option.highlight
                                    ? 'bg-gradient-to-r from-[#3371b0] to-[#6fa86a] text-white shadow-lg hover:shadow-xl'
                                    : 'bg-slate-100 text-slate-900 hover:bg-gradient-to-r hover:from-[#3371b0] hover:to-[#6fa86a] hover:text-white shadow-md hover:shadow-lg'
                                    }`}
                            >
                                {option.cta}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-slate-600 font-medium">
                        ¿Necesitas una solución personalizada?{' '}
                        <span className="text-[#3371b0] font-bold">Contáctanos</span> para una cotización institucional.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
