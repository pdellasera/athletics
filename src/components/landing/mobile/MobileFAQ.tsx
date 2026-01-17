import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function MobileFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: '¿Cómo funciona la modularidad?',
            answer: 'Puedes activar solo Programas Deportivos, solo Torneos, o ambos módulos. Todos comparten la misma base de datos de atletas.',
        },
        {
            question: '¿Qué pasa con los atletas registrados?',
            answer: 'Podemos importar tu base de datos existente. Nuestro equipo te guiará en el proceso de migración.',
        },
        {
            question: '¿Puedo registrar menores de edad?',
            answer: 'Sí, Athletics permite el registro de menores utilizando su cédula. También permite vincular a padres o tutores.',
        },
        {
            question: '¿Cómo se valida la elegibilidad?',
            answer: 'El módulo de Torneos valida automáticamente basándose en los datos del perfil del atleta.',
        },
        {
            question: '¿El historial es continuo?',
            answer: 'Absolutamente. Un atleta tiene un solo perfil y su historial se construye continuamente en ambos módulos.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 border-2 border-[#3371b0]/20 mb-6 shadow-sm">
                        <HelpCircle className="w-5 h-5 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">FAQ</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4 px-2">
                        Preguntas{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Frecuentes
                        </span>
                    </h2>
                    <p className="text-base text-slate-600 font-medium px-4">
                        Respuestas a las dudas más comunes
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-slate-200/50 shadow-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left active:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-900 pr-4 text-base leading-tight">
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${openIndex === index
                                    ? 'bg-gradient-to-br from-[#3371b0] to-[#6fa86a]'
                                    : 'bg-[#3371b0]/10'
                                    }`}>
                                    <ChevronDown
                                        className={`w-6 h-6 transition-all ${openIndex === index ? 'rotate-180 text-white' : 'text-[#3371b0]'
                                            }`}
                                    />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-base text-slate-600 leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
