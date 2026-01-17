import { motion } from 'framer-motion';
import { Users, Trophy, Zap, CheckCircle2, Sparkles } from 'lucide-react';
import { useChatbotContext } from '../../../context/ChatbotContext';

export default function MobilePricing() {
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
            ],
            cta: 'Solicitar Demo',
            highlight: false,
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
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3371b0]/10 to-[#6fa86a]/10 rounded-full px-5 py-2.5 border-2 border-[#3371b0]/20 mb-6 shadow-sm">
                        <Sparkles className="w-5 h-5 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Modalidades</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4 px-2">
                        Modalidades de Athletics
                    </h2>
                    <p className="text-base text-slate-600 font-medium px-4">
                        Elige el módulo que necesitas
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {options.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 border-2 transition-all ${option.highlight
                                ? 'border-[#3371b0] shadow-2xl ring-4 ring-[#3371b0]/10 scale-[1.02]'
                                : 'border-slate-200 shadow-lg'
                                }`}
                        >
                            {option.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3371b0] to-[#6fa86a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Recomendado
                                </div>
                            )}

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${option.highlight
                                ? 'bg-gradient-to-br from-[#3371b0] to-[#6fa86a]'
                                : 'bg-gradient-to-br from-slate-100 to-slate-200'
                                }`}>
                                <option.icon className={`w-8 h-8 ${option.highlight ? 'text-white' : 'text-[#3371b0]'}`} strokeWidth={2} />
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-3 text-center leading-tight">
                                {option.name}
                            </h3>

                            <p className="text-base text-slate-600 mb-8 text-center font-medium leading-relaxed">
                                {option.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {option.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#6fa86a] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                        <span className="text-base text-slate-700 font-medium leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                onClick={openChatbot}
                                className={`w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all ${option.highlight
                                    ? 'bg-gradient-to-r from-[#3371b0] to-[#6fa86a] text-white shadow-lg active:shadow-xl'
                                    : 'bg-slate-100 text-slate-900 hover:bg-gradient-to-r hover:from-[#3371b0] hover:to-[#6fa86a] hover:text-white shadow-md active:shadow-lg'
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
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-base text-slate-600 font-medium px-4">
                        ¿Necesitas una solución personalizada?{' '}
                        <span className="text-[#3371b0] font-bold">Contáctanos</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
