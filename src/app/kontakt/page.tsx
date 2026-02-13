'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import Contact from '@/components/Contact';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function KontaktPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <div className="pt-32 pb-12 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Kontakt Oss</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Vi er her for å hjelpe deg. Ta kontakt for timebestilling eller om du har spørsmål.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
                    <div className="bg-pink-50/50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-pink-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Ring Oss</h3>
                        <p className="text-gray-600">+47 123 45 678</p>
                        <p className="text-sm text-gray-500 mt-2">Man-Fre: 10-19</p>
                    </div>

                    <div className="bg-pink-50/50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-pink-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Send E-post</h3>
                        <p className="text-gray-600">hei@cmbeauty.no</p>
                        <p className="text-sm text-gray-500 mt-2">Vi svarer innen 24 timer</p>
                    </div>

                    <div className="bg-pink-50/50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-pink-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Besøk Oss</h3>
                        <p className="text-gray-600">Storgata 12, 4306 Sandnes</p>
                        <p className="text-sm text-gray-500 mt-2">Parkering tilgjengelig</p>
                    </div>
                </div>
            </div>

            <Contact />
        </main>
    );
}
