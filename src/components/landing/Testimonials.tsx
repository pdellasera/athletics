import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const testimonials = [
        {
            quote: 'Athletics transformó completamente cómo gestionamos nuestro programa. Ahora tenemos control total de asistencia y progreso de cada atleta. La trazabilidad es invaluable.',
            author: 'Carlos Mendoza',
            role: 'Director Técnico',
            organization: 'Academia Deportiva Elite',
            rating: 5,
            image: '/testimonial_carlos_1768655382132.png'
        },
        {
            quote: 'Organizar torneos solía ser un caos de Excel y WhatsApp. Con Athletics, la inscripción es formal, los rosters están validados, y todo queda registrado. Es un cambio radical.',
            author: 'María Rodríguez',
            role: 'Coordinadora de Torneos',
            organization: 'Liga Nacional Juvenil',
            rating: 5,
            image: '/testimonial_maria_1768655397988.png'
        },
        {
            quote: 'Como padre, poder ver el historial deportivo completo de mi hijo en un solo lugar me da tranquilidad. Sé exactamente en qué programas ha estado y cómo ha progresado.',
            author: 'Roberto Sánchez',
            role: 'Padre de Atleta',
            organization: 'Usuario Athletics',
            rating: 5,
            image: '/testimonial_roberto_1768655411738.png'
        },
        {
            quote: 'La plataforma nos permitió digitalizar completamente nuestro programa de formación. Los reportes automáticos de progreso son increíbles y los padres están muy satisfechos.',
            author: 'Ana López',
            role: 'Entrenadora Principal',
            organization: 'Club Deportivo Campeones',
            rating: 5,
            image: '/testimonial_ana_1768655423380.png'
        },
        {
            quote: 'Después de 20 años gestionando deportes de forma tradicional, Athletics nos trajo al siglo XXI. La validación automática de elegibilidad nos ahorró innumerables dolores de cabeza.',
            author: 'Diego Fernández',
            role: 'Administrador Deportivo',
            organization: 'Instituto Deportivo Nacional',
            rating: 5,
            image: '/testimonial_diego_1768655435630.png'
        },
        {
            quote: 'Implementamos Athletics en nuestros 5 sedes y la sincronización es perfecta. Finalmente tenemos una vista unificada de todos nuestros atletas sin importar dónde entrenan.',
            author: 'Lucía Martínez',
            role: 'Directora de Programas',
            organization: 'Red Deportiva Metropolitana',
            rating: 5,
            image: '/testimonial_lucia_1768655449226.png'
        },
        {
            quote: 'La gestión de torneos nunca fue tan fácil. Desde la inscripción hasta la validación de rosters, todo está automatizado. Nuestros torneos ahora son completamente profesionales.',
            author: 'Jorge Ramírez',
            role: 'Coordinador de Competencias',
            organization: 'Liga Juvenil del Pacífico',
            rating: 5,
            image: '/testimonial_jorge_1768655465618.png'
        },
        {
            quote: 'Como madre y voluntaria, aprecio enormemente poder acceder al historial completo de mi hija. La transparencia que ofrece Athletics es exactamente lo que las familias necesitamos.',
            author: 'Patricia Gómez',
            role: 'Madre y Voluntaria',
            organization: 'Comunidad Athletics',
            rating: 5,
            image: '/testimonial_patricia_1768655478018.png'
        },
        {
            quote: 'Dirigir una liga con más de 50 equipos era un desafío logístico enorme. Athletics simplificó todo: inscripciones, validaciones, calendarios. Es indispensable para nosotros.',
            author: 'Fernando Castro',
            role: 'Presidente de Liga',
            organization: 'Liga Intercolegial de Fútbol',
            rating: 5,
            image: '/testimonial_fernando_1768655491851.png'
        },
        {
            quote: 'La integración entre programas y torneos es brillante. Un atleta que entrena con nosotros puede competir en torneos sin duplicar su registro. Eso es verdadera eficiencia.',
            author: 'Sofía Herrera',
            role: 'Administradora Deportiva',
            organization: 'Federación Regional de Atletismo',
            rating: 5,
            image: '/testimonial_sofia_1768655507727.png'
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

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden py-20">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[16vw] font-black text-slate-200/30 leading-none tracking-tighter select-none"
                >
                    TESTIMONIOS
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
                        <Quote className="w-4 h-4 text-[#3371b0]" />
                        <span className="text-sm font-bold text-slate-700">Testimonios</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Lo Que Dicen Nuestros{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c2e81] via-[#3371b0] to-[#6fa86a]">
                            Usuarios
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                        Testimonios reales de quienes ya transformaron su gestión deportiva
                    </p>
                </motion.div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white border-2 border-[#3371b0] flex items-center justify-center shadow-xl hover:bg-[#3371b0] hover:text-white transition-all duration-300 group"
                    >
                        <ChevronLeft className="w-6 h-6 text-[#3371b0] group-hover:text-white" strokeWidth={3} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white border-2 border-[#3371b0] flex items-center justify-center shadow-xl hover:bg-[#3371b0] hover:text-white transition-all duration-300 group"
                    >
                        <ChevronRight className="w-6 h-6 text-[#3371b0] group-hover:text-white" strokeWidth={3} />
                    </button>

                    {/* Carousel Wrapper with Overflow Hidden */}
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
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {[0, 1, 2].map((offset) => {
                                    const testimonial = testimonials[(currentIndex + offset) % testimonials.length];
                                    return (
                                        <div
                                            key={offset}
                                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                                        >
                                            {/* Quote Icon */}
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3371b0] to-[#6fa86a] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                                                <Quote className="w-6 h-6 text-white" strokeWidth={2.5} />
                                            </div>

                                            {/* Stars */}
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <p className="text-slate-700 mb-8 leading-relaxed font-medium italic min-h-[120px]">
                                                "{testimonial.quote}"
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center gap-4 pt-6 border-t-2 border-slate-200/50">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="w-14 h-14 rounded-full object-cover shadow-lg ring-2 ring-white"
                                                />
                                                <div>
                                                    <div className="font-black text-slate-900">
                                                        {testimonial.author}
                                                    </div>
                                                    <div className="text-sm font-bold text-[#3371b0]">
                                                        {testimonial.role}
                                                    </div>
                                                    <div className="text-xs text-slate-500 mt-0.5 font-semibold">
                                                        {testimonial.organization}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-gradient-to-r from-[#3371b0] to-[#6fa86a]'
                                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
