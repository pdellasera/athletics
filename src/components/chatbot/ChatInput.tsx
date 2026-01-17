import { type FC, useState, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle } from 'lucide-react';

interface ChatInputProps {
    onSend: (message: string) => void;
    onContactMethodSelect?: (method: 'whatsapp' | 'phone') => void;
    placeholder: string;
    type?: 'text' | 'phone' | 'options';
    disabled?: boolean;
}

export const ChatInput: FC<ChatInputProps> = ({
    onSend,
    onContactMethodSelect,
    placeholder,
    type = 'text',
    disabled = false
}) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() && !disabled) {
            onSend(input.trim());
            setInput('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (type === 'options' && onContactMethodSelect) {
        return (
            <div className="p-4 bg-white border-t-2 border-slate-200">
                <p className="text-sm font-bold text-slate-700 mb-3">Selecciona tu preferencia:</p>
                <div className="grid grid-cols-2 gap-3">
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onContactMethodSelect('whatsapp')}
                        className="flex flex-col items-center gap-2 bg-green-600 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span className="font-bold text-sm">WhatsApp</span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onContactMethodSelect('phone')}
                        className="flex flex-col items-center gap-2 bg-[#3371b0] text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
                    >
                        <Phone className="w-6 h-6" />
                        <span className="font-bold text-sm">Llamada</span>
                    </motion.button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 bg-white border-t-2 border-slate-200">
            <div className="flex gap-2">
                <input
                    type={type === 'phone' ? 'tel' : 'text'}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#3371b0] transition-colors text-sm font-medium"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    disabled={!input.trim() || disabled}
                    className="px-4 py-3 bg-[#3371b0] text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send className="w-5 h-5" />
                </motion.button>
            </div>
        </div>
    );
};
