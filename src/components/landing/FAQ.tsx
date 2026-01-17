import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: '¿Cómo funciona la modularidad de Athletics?',
            answer: 'Athletics está diseñado como una suite modular. Puedes activar solo Programas Deportivos, solo Torneos, o ambos módulos. Todos comparten la misma base de datos de atletas, pero cada módulo se activa y factura de forma independiente según tus necesidades.',
        },
        {
            question: '¿Qué pasa con los atletas que ya tengo registrados?',
            answer: 'Podemos importar tu base de datos existente de atletas. Nuestro equipo te guiará en el proceso de migración para asegurar que todos los datos se transfieran correctamente y cada atleta quede identificado por su cédula única.',
        },
        {
            question: '¿Puedo registrar atletas menores de edad?',
            answer: 'Sí, Athletics permite el registro de atletas menores de edad utilizando su cédula o documento de identidad. El sistema también permite vincular a los padres o tutores legales para aprobaciones y comunicaciones.',
        },
        {
            question: '¿Cómo se valida la elegibilidad de un atleta en torneos?',
            answer: 'El módulo de Torneos valida automáticamente la elegibilidad basándose en los datos del perfil del atleta (edad, categoría, historial). Si un atleta está registrado en Programas Deportivos, esa información se utiliza para validación instantánea.',
        },
        {
            question: '¿Puedo modificar los rosters de equipos una vez inscritos?',
            answer: 'Sí, los rosters pueden modificarse según las reglas del torneo que configures. El sistema mantiene un historial de todos los cambios para trazabilidad y auditoría.',
        },
        {
            question: '¿El historial del atleta es continuo entre módulos?',
            answer: 'Absolutamente. Ese es uno de los principales beneficios de Athletics. Un atleta tiene un solo perfil identificado por cédula, y su historial se construye continuamente tanto en Programas Deportivos como en Torneos.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden py-20">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[12vw] font-black text-slate-200/40 leading-none tracking-tighter select-none"
                >
                    PREGUNTAS
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
                        <HelpCircle className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Preguntas{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Frecuentes
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                        Respuestas a las dudas más comunes sobre Athletics
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className="font-bold text-slate-900 pr-4 group-hover:text-[#3371b0] transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${openIndex === index
                                    ? 'bg-gradient-to-br from-[#3371b0] to-[#6fa86a]'
                                    : 'bg-[#3371b0]/10'
                                    }`}>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-all ${openIndex === index ? 'rotate-180 text-white' : 'text-[#3371b0]'
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
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
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
