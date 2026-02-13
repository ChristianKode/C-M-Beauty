'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-pink-50/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        {/* Image */}
                        <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80"
                                alt="C&M Beauty Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase mb-2 block">Vår Historie</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Mer Enn Bare En <span className="text-primary italic">Salong</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Grunnlagt i 2024, C&M Beauty ble skapt med en visjon om å redefinere salong-opplevelsen.
                            Vi tror at skjønnhet er personlig, og hver behandling bør være like unik som deg.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Vårt team av ekspert-stylister og terapeuter er dedikert til å gi den høyeste grad av omsorg,
                            ved bruk av kun premium produkter som pleier håret og huden din. Ta steget inn i vårt fristed og
                            la oss ta oss av resten.
                        </p>

                        <div className="flex gap-8">
                            <div>
                                <span className="block text-4xl font-bold text-primary mb-1">500+</span>
                                <span className="text-gray-500">Fornøyde Kunder</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-primary mb-1">15+</span>
                                <span className="text-gray-500">Ekspert Ansatte</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
