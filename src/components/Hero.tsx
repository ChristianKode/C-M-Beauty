'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FDF2F8]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
                    alt="C&M Beauty Salon Interior"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 to-white/90" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white border border-pink-100 text-primary text-sm font-semibold tracking-wider mb-6 uppercase">
                        EST. 2024 • Sandnes
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
                        Tidløs <span className="text-primary italic">Eleganse</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Opplev skjønnhetens kunst i omgivelser designet for luksus og avslapning.
                        Hvor moderne teknikker møter personlig velvære.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-pink-200/50">
                            Bestill Time
                        </button>
                        <Link href="/behandlinger">
                            <button className="px-8 py-4 bg-white text-foreground text-lg font-semibold rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                                Se Behandlinger
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
