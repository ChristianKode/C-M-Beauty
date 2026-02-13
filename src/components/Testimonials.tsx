'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah M.',
        text: 'Helt klart den beste salongopplevelsen jeg noen gang har hatt. Oppmerksomheten på detaljer er uovertruffen.',
        role: 'Lojal Kunde',
    },
    {
        name: 'Emily R.',
        text: 'Håret mitt har aldri sett bedre ut. Stylistene lytter virkelig til hva du ønsker.',
        role: 'Førstegangsbesøkende',
    },
    {
        name: 'Jessica T.',
        text: 'Et sant fristed. Behandlingene er utrolig avslappende og effektive.',
        role: 'Fast Kunde',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Hva Våre Kunder Sier</h2>
                    <p className="text-gray-600">Ikke bare ta vårt ord for det.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#FDF2F8] p-8 rounded-2xl shadow-sm border border-pink-100"
                        >
                            <div className="flex gap-1 text-primary mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">&quot;{testimonial.text}&quot;</p>
                            <div>
                                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500">{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
