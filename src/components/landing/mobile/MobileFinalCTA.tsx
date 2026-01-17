import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useChatbotContext } from '../../../context/ChatbotContext';

export default function MobileFinalCTA() {
    const { openChatbot } = useChatbotContext();

    return (
        <section className="relative bg-gradient-to-br from-[#1c2e81] via-[#3371b0] to-[#6fa86a] overflow-hidden py-20 px-5">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 text-center max-w-lg mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl font-black text-white leading-tight mb-6">
                        ¿Listo para Transformar tu Gestión Deportiva?
                    </h2>
                    <p className="text-lg text-white/95 font-medium leading-relaxed">
                        Únete a las instituciones que ya confían en Athletics para gestionar sus programas y torneos
                    </p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileTap={{ scale: 0.97 }}
                    onClick={openChatbot}
                    className="w-full bg-white text-[#1c2e81] px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                    Solicitar Demo Ahora
                    <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-base text-white/90 mt-8 font-medium"
                >
                    Sin compromiso • Respuesta en 24 horas
                </motion.p>
            </div>
        </section>
    );
}
