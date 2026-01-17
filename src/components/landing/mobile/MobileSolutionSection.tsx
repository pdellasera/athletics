import { motion } from 'framer-motion';
import { Users, Trophy, UserCheck, Calendar, TrendingUp, MapPin, Shield, BarChart3, ArrowRight } from 'lucide-react';
import { useChatbotContext } from '../../../context/ChatbotContext';

export default function MobileSolutionSection() {
    const { openChatbot } = useChatbotContext();

    const products = [
        {
            icon: Users,
            title: 'Athletics Programas Deportivos',
            description: 'Gestión completa del desarrollo del atleta',
            features: [
                { icon: UserCheck, title: 'Registro único por cédula', desc: 'Sin duplicados' },
                { icon: Calendar, title: 'Control de asistencia', desc: 'Automatizado' },
                { icon: TrendingUp, title: 'Seguimiento de progreso', desc: 'Métricas y reportes' },
                { icon: MapPin, title: 'Gestión por sedes', desc: 'Multi-nivel' },
            ],
            color: 'from-[#3371b0] to-[#6fa86a]'
        },
        {
            icon: Trophy,
            title: 'Athletics Torneos',
            description: 'Organización profesional de competencias',
            features: [
                { icon: Users, title: 'Gestión de equipos', desc: 'Control completo' },
                { icon: Shield, title: 'Inscripción formal', desc: 'Proceso seguro' },
                { icon: UserCheck, title: 'Validación de elegibilidad', desc: 'Automática' },
                { icon: BarChart3, title: 'Historial competitivo', desc: 'Trazabilidad total' },
            ],
            color: 'from-[#3371b0] to-[#6fa86a]'
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
                        <Users className="w-5 h-5 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Athletics Suite</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4 px-2">
                        Dos Productos, Una Plataforma
                    </h2>
                    <p className="text-base text-slate-600 font-medium px-4">
                        Módulos que comparten la misma base de atletas
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200/50 rounded-3xl p-8 shadow-xl"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                                    <product.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-3 text-center leading-tight">
                                {product.title}
                            </h3>

                            <p className="text-base text-slate-600 mb-8 text-center font-medium leading-relaxed">
                                {product.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-white/80 rounded-2xl p-4 border border-slate-200/50">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}>
                                            <feature.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="font-bold text-slate-900 text-base leading-tight mb-1">{feature.title}</div>
                                            <div className="text-sm text-slate-600 font-medium">{feature.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                onClick={openChatbot}
                                className={`w-full bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg active:shadow-xl flex items-center justify-center gap-2`}
                            >
                                Activar {index === 0 ? 'Programas' : 'Torneos'}
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
