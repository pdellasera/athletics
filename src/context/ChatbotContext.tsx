import { createContext, useContext, type ReactNode, type FC } from 'react';
import { useChatbot } from '../hooks/useChatbot';
import { ChatbotModal } from '../components/chatbot/ChatbotModal';

interface ChatbotContextType {
    openChatbot: () => void;
    closeChatbot: () => void;
    resetChatbot: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const useChatbotContext = () => {
    const context = useContext(ChatbotContext);
    if (!context) {
        throw new Error('useChatbotContext must be used within ChatbotProvider');
    }
    return context;
};

interface ChatbotProviderProps {
    children: ReactNode;
}

export const ChatbotProvider: FC<ChatbotProviderProps> = ({ children }) => {
    const {
        isOpen,
        messages,
        currentStep,
        openChatbot,
        closeChatbot,
        resetChatbot,
        handleUserInput,
        handleContactMethodSelection
    } = useChatbot();

    return (
        <ChatbotContext.Provider value={{ openChatbot, closeChatbot, resetChatbot }}>
            {children}
            <ChatbotModal
                isOpen={isOpen}
                onClose={closeChatbot}
                messages={messages}
                currentStep={currentStep}
                onSendMessage={handleUserInput}
                onContactMethodSelect={handleContactMethodSelection}
            />
        </ChatbotContext.Provider>
    );
};
