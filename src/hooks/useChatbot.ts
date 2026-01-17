import { useState, useCallback } from 'react';

export type ConversationStep =
    | 'greeting'
    | 'ask_name'
    | 'ask_phone'
    | 'ask_country'
    | 'ask_institution'
    | 'ask_contact_method'
    | 'confirmation'
    | 'completed';

export interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

export interface UserData {
    fullName: string;
    phone: string;
    country: string;
    institution: string;
    contactMethod: 'whatsapp' | 'phone' | null;
}

export const useChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentStep, setCurrentStep] = useState<ConversationStep>('greeting');
    const [userData, setUserData] = useState<UserData>({
        fullName: '',
        phone: '',
        country: '',
        institution: '',
        contactMethod: null
    });

    const addMessage = useCallback((text: string, sender: 'bot' | 'user') => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    }, []);

    const validateName = (name: string): boolean => {
        return name.trim().length >= 3 && name.includes(' ') && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name);
    };

    const validatePhone = (phone: string): boolean => {
        const cleanPhone = phone.replace(/[\s\-\+]/g, '');
        return cleanPhone.length >= 8 && /^\d+$/.test(cleanPhone);
    };

    const validateCountry = (country: string): boolean => {
        return country.trim().length >= 3;
    };

    const validateInstitution = (institution: string): boolean => {
        return institution.trim().length >= 3;
    };

    const openChatbot = useCallback(() => {
        setIsOpen(true);
        if (messages.length === 0) {
            // Initial greeting
            setTimeout(() => {
                addMessage(
                    '¡Hola! Soy tu asistente virtual de Athletics.\n\nEstoy aquí para ayudarte a conocer más sobre nuestra plataforma de gestión deportiva.\n\nPara brindarte la mejor atención, necesito algunos datos:',
                    'bot'
                );
            }, 500);

            setTimeout(() => {
                addMessage('Por favor, indícame tu nombre completo:', 'bot');
                setCurrentStep('ask_name');
            }, 1500);
        }
    }, [messages.length, addMessage]);

    const closeChatbot = useCallback(() => {
        setIsOpen(false);
    }, []);

    const resetChatbot = useCallback(() => {
        setMessages([]);
        setCurrentStep('greeting');
        setUserData({
            fullName: '',
            phone: '',
            country: '',
            institution: '',
            contactMethod: null
        });
    }, []);

    const handleUserInput = useCallback((input: string) => {
        addMessage(input, 'user');

        switch (currentStep) {
            case 'ask_name':
                if (!validateName(input)) {
                    setTimeout(() => {
                        addMessage(
                            'Por favor, ingresa tu nombre completo (nombre y apellido). Ejemplo: Juan Pérez',
                            'bot'
                        );
                    }, 500);
                    return;
                }
                setUserData(prev => ({ ...prev, fullName: input }));
                setTimeout(() => {
                    addMessage(`Gracias ${input.split(' ')[0]}. ¿Cuál es tu número de teléfono?`, 'bot');
                    setCurrentStep('ask_phone');
                }, 800);
                break;

            case 'ask_phone':
                if (!validatePhone(input)) {
                    setTimeout(() => {
                        addMessage(
                            'Por favor, ingresa un número de teléfono válido. Ejemplo: +507 6123-4567',
                            'bot'
                        );
                    }, 500);
                    return;
                }
                setUserData(prev => ({ ...prev, phone: input }));
                setTimeout(() => {
                    addMessage('¿Desde qué país nos contactas?', 'bot');
                    setCurrentStep('ask_country');
                }, 800);
                break;

            case 'ask_country':
                if (!validateCountry(input)) {
                    setTimeout(() => {
                        addMessage(
                            'Por favor, ingresa el nombre de tu país.',
                            'bot'
                        );
                    }, 500);
                    return;
                }
                setUserData(prev => ({ ...prev, country: input }));
                setTimeout(() => {
                    addMessage('¿A qué institución o entidad deportiva perteneces?', 'bot');
                    setCurrentStep('ask_institution');
                }, 800);
                break;

            case 'ask_institution':
                if (!validateInstitution(input)) {
                    setTimeout(() => {
                        addMessage(
                            'Por favor, ingresa el nombre de tu institución o entidad deportiva.',
                            'bot'
                        );
                    }, 500);
                    return;
                }
                setUserData(prev => ({ ...prev, institution: input }));
                setTimeout(() => {
                    addMessage(
                        `Perfecto, ${userData.fullName.split(' ')[0]}.\n\nHemos registrado tu información:\n✓ Nombre: ${userData.fullName}\n✓ Teléfono: ${userData.phone}\n✓ País: ${userData.country}\n✓ Institución: ${input}\n\n¿Cómo prefieres que te contactemos?`,
                        'bot'
                    );
                    setCurrentStep('ask_contact_method');
                }, 800);
                break;

            default:
                break;
        }
    }, [currentStep, userData, addMessage]);

    const handleContactMethodSelection = useCallback((method: 'whatsapp' | 'phone') => {
        setUserData(prev => ({ ...prev, contactMethod: method }));
        addMessage(method === 'whatsapp' ? '📱 WhatsApp' : '📞 Llamada telefónica', 'user');

        setTimeout(() => {
            addMessage(
                `¡Excelente!\n\nUn agente de Athletics se pondrá en contacto contigo vía ${method === 'whatsapp' ? 'WhatsApp' : 'llamada telefónica'} en las próximas 24 horas.\n\n¿Hay algo más en lo que pueda ayudarte?`,
                'bot'
            );
            setCurrentStep('confirmation');
        }, 800);

        // Save to localStorage
        const leadData = {
            ...userData,
            country: userData.country,
            contactMethod: method,
            timestamp: new Date().toISOString(),
            source: 'landing_page'
        };
        localStorage.setItem('athletics_lead', JSON.stringify(leadData));
    }, [userData, addMessage]);

    return {
        isOpen,
        messages,
        currentStep,
        userData,
        openChatbot,
        closeChatbot,
        resetChatbot,
        handleUserInput,
        handleContactMethodSelection
    };
};
