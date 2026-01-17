import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51, 113, 176) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3371b0] to-[#6fa86a] mb-6">
                            Athletics
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed font-medium">
                            Plataforma oficial de registro y seguimiento de atletas, programas deportivos y torneos.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 border border-[#3371b0]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#3371b0] hover:to-[#6fa86a] transition-all duration-300 group">
                                <Facebook className="w-5 h-5 text-[#3371b0] group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 border border-[#3371b0]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#3371b0] hover:to-[#6fa86a] transition-all duration-300 group">
                                <Instagram className="w-5 h-5 text-[#3371b0] group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 border border-[#3371b0]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#3371b0] hover:to-[#6fa86a] transition-all duration-300 group">
                                <Twitter className="w-5 h-5 text-[#3371b0] group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 border border-[#3371b0]/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#3371b0] hover:to-[#6fa86a] transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 text-[#3371b0] group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Productos */}
                    <div>
                        <h4 className="text-white font-black mb-6 text-lg">Productos</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Programas Deportivos</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Torneos</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Suite Completa</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Características</a></li>
                        </ul>
                    </div>

                    {/* Soporte */}
                    <div>
                        <h4 className="text-white font-black mb-6 text-lg">Soporte</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Centro de Ayuda</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Documentación</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Tutoriales</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-white font-black mb-6 text-lg">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 border border-[#3371b0]/30 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-4 h-4 text-[#6fa86a]" />
                                </div>
                                <a href="mailto:info@athletics.com" className="text-slate-300 hover:text-[#6fa86a] transition-colors font-medium">
                                    info@athletics.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 border border-[#3371b0]/30 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4 text-[#6fa86a]" />
                                </div>
                                <a href="tel:+5071234567" className="text-slate-300 hover:text-[#6fa86a] transition-colors font-medium">
                                    +507 1234-5678
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3371b0]/20 to-[#6fa86a]/20 border border-[#3371b0]/30 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-[#6fa86a]" />
                                </div>
                                <span className="text-slate-300 font-medium">Ciudad de Panamá, Panamá</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700/50 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                            <span>© {new Date().getFullYear()} Athletics Platform.</span>
                            <span>Hecho con</span>
                            <Heart className="w-4 h-4 text-[#6fa86a] fill-[#6fa86a]" />
                            <span>para el deporte</span>
                        </div>
                        <div className="flex gap-8 text-sm">
                            <a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Términos de Servicio</a>
                            <a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Política de Privacidad</a>
                            <a href="#" className="text-slate-400 hover:text-[#6fa86a] transition-colors font-medium">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
