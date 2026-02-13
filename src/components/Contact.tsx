'use client';

import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
    return (
        <footer id="contact" className="bg-[#1a1a1a] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">C&M <span className="text-primary">Beauty Salon</span></h3>
                        <p className="text-gray-400 mb-6">
                            Din destinasjon for moderne skjønnhet. Vi løfter din hverdagslook med presisjon og stil.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Kontakt</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="shrink-0 mt-1 text-primary" size={20} />
                                <span>Storgata 12, 4306 Sandnes, Norge</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="shrink-0 text-primary" size={20} />
                                <span>+47 123 45 678</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="shrink-0 text-primary" size={20} />
                                <span>hei@cmbeauty.no</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Åpningstider</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex justify-between">
                                <span>Man - Fre</span>
                                <span>10:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Lørdag</span>
                                <span>10:00 - 16:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Søndag</span>
                                <span>Stengt</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Nyhetsbrev</h4>
                        <p className="text-gray-400 mb-4">Meld deg på for å få de siste skjønnhetstipsene og eksklusive tilbud.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Din e-post"
                                className="bg-white/5 border border-white/10 rounded-l-full px-4 py-3 outline-none focus:border-primary w-full text-white"
                            />
                            <button className="bg-primary px-6 rounded-r-full font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                                Bli med
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} C&M Beauty Salon. Alle rettigheter forbeholdt.</p>
                    <div className="mt-2 flex justify-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Personvern</a>
                        <a href="#" className="hover:text-white transition-colors">Vilkår for bruk</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
