import { type FC, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { type ConversationStep, type Message } from '../../hooks/useChatbot';

interface ChatbotModalProps {
    isOpen: boolean;
    onClose: () => void;
    messages: Message[];
    currentStep: ConversationStep;
    onSendMessage: (message: string) => void;
    onContactMethodSelect: (method: 'whatsapp' | 'phone') => void;
}

export const ChatbotModal: FC<ChatbotModalProps> = ({
    isOpen,
    onClose,
    messages,
    currentStep,
    onSendMessage,
    onContactMethodSelect
}) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getInputType = () => {
        if (currentStep === 'ask_contact_method') {
            return 'options';
        }
        if (currentStep === 'ask_phone') {
            return 'phone';
        }
        return 'text';
    };

    const getPlaceholder = () => {
        switch (currentStep) {
            case 'ask_name':
                return 'Escribe tu nombre completo...';
            case 'ask_phone':
                return 'Escribe tu número de teléfono...';
            case 'ask_country':
                return 'Escribe tu país...';
            case 'ask_institution':
                return 'Escribe el nombre de tu institución...';
            case 'confirmation':
                return 'Escribe tu mensaje...';
            default:
                return 'Escribe un mensaje...';
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] md:hidden"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-[400px] h-[100vh] md:h-[600px] bg-white md:rounded-3xl shadow-2xl z-[9999] flex flex-col overflow-hidden border-2 border-slate-200"
                    >
                        {/* Header */}
                        <div className="bg-[#3371b0] text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <span className="text-lg font-black">A</span>
                                </div>
                                <div>
                                    <h3 className="font-black text-lg">Asistente Virtual</h3>
                                    <p className="text-xs text-white/90">Athletics Platform</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
                            {messages.map((message) => (
                                <ChatMessage
                                    key={message.id}
                                    message={message.text}
                                    sender={message.sender}
                                    timestamp={message.timestamp}
                                />
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <ChatInput
                            onSend={onSendMessage}
                            onContactMethodSelect={onContactMethodSelect}
                            placeholder={getPlaceholder()}
                            type={getInputType()}
                            disabled={currentStep === 'completed'}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
