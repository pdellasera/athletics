import { motion } from 'framer-motion';
import { type FC } from 'react';

interface ChatMessageProps {
    message: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

export const ChatMessage: FC<ChatMessageProps> = ({ message, sender, timestamp }) => {
    const isBot = sender === 'bot';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
        >
            <div className={`max-w-[80%] ${isBot ? 'order-2' : 'order-1'}`}>
                {isBot && (
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-[#3371b0] flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">Asistente Athletics</span>
                    </div>
                )}

                <div
                    className={`rounded-2xl px-4 py-3 ${isBot
                            ? 'bg-[#3371b0] text-white'
                            : 'bg-white border-2 border-slate-200 text-slate-900'
                        } shadow-lg`}
                >
                    <p className="text-sm font-medium whitespace-pre-line leading-relaxed">
                        {message}
                    </p>
                </div>

                <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mt-1`}>
                    <span className="text-xs text-slate-400">
                        {timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
