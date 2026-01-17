import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const testimonials = [
        {
            quote: 'Athletics transformó completamente cómo gestionamos nuestro programa. La trazabilidad es invaluable.',
            author: 'Carlos Mendoza',
            role: 'Director Técnico',
            organization: 'Academia Deportiva Elite',
            rating: 5,
            image: '/testimonial_carlos_1768655382132.png'
        },
        {
            quote: 'Organizar torneos solía ser un caos. Con Athletics, todo está registrado. Es un cambio radical.',
            author: 'María Rodríguez',
            role: 'Coordinadora de Torneos',
            organization: 'Liga Nacional Juvenil',
            rating: 5,
            image: '/testimonial_maria_1768655397988.png'
        },
        {
            quote: 'Poder ver el historial deportivo completo de mi hijo en un solo lugar me da tranquilidad.',
            author: 'Roberto Sánchez',
            role: 'Padre de Atleta',
            organization: 'Usuario Athletics',
            rating: 5,
            image: '/testimonial_roberto_1768655411738.png'
        },
        {
            quote: 'La plataforma nos permitió digitalizar completamente nuestro programa de formación.',
            author: 'Ana López',
            role: 'Entrenadora Principal',
            organization: 'Club Deportivo Campeones',
            rating: 5,
            image: '/testimonial_ana_1768655423380.png'
        },
        {
            quote: 'Athletics nos trajo al siglo XXI. La validación automática nos ahorró innumerables dolores de cabeza.',
            author: 'Diego Fernández',
            role: 'Administrador Deportivo',
            organization: 'Instituto Deportivo Nacional',
            rating: 5,
            image: '/testimonial_diego_1768655435630.png'
        },
    ];

    // Auto-play slider
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            if (newDirection === 1) {
                return (prevIndex + 1) % testimonials.length;
            } else {
                return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
            }
        });
    };

    // Touch handlers for swipe
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            paginate(1);
        }
        if (touchStart - touchEnd < -75) {
            paginate(-1);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden py-12 px-4">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[20vw] font-black text-slate-200/20 leading-none tracking-tighter select-none"
                >
                    TESTIMONIOS
                </motion.div>
            </div>

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3371b0]/10 to-[#6fa86a]/10 rounded-full px-4 py-2 border border-[#3371b0]/20 mb-4">
                        <Quote className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-xs font-bold text-slate-700">Testimonios</span>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 leading-tight mb-3">
                        Lo Que Dicen{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Nuestros Usuarios
                        </span>
                    </h2>
                    <p className="text-sm text-slate-600 font-medium">
                        Testimonios reales de quienes transformaron su gestión
                    </p>
                </motion.div>

                {/* Slider Container */}
                <div
                    className="relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{
                                    x: direction > 0 ? '100%' : '-100%',
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    x: direction > 0 ? '-100%' : '100%',
                                    opacity: 0
                                }}
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-200/50 shadow-xl"
                            >
                                {/* Quote Icon */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center mb-4 shadow-lg">
                                    <Quote className="w-6 h-6 text-white" strokeWidth={2.5} />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-slate-700 mb-6 leading-relaxed font-medium italic text-sm">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t-2 border-slate-200/50">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].author}
                                        className="w-12 h-12 rounded-full object-cover shadow-lg ring-2 ring-white"
                                    />
                                    <div>
                                        <div className="font-black text-slate-900 text-sm">
                                            {testimonials[currentIndex].author}
                                        </div>
                                        <div className="text-xs font-bold text-[#3371b0]">
                                            {testimonials[currentIndex].role}
                                        </div>
                                        <div className="text-xs text-slate-500 font-semibold">
                                            {testimonials[currentIndex].organization}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-gradient-to-r from-[#3371b0] to-[#6fa86a]'
                                        : 'w-2 bg-slate-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
