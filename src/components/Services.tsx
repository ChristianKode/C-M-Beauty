'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Smile } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: 'Hår & Styling',
        description: 'Ekspertklipp, fargebehandlinger og styling tilpasset din personlige stil.',
        icon: Scissors,
        color: 'bg-pink-50',
        textColor: 'text-pink-600',
    },
    {
        title: 'Negler',
        description: 'Manikyr, pedikyr og negledesign med premium produkter.',
        icon: Sparkles,
        color: 'bg-purple-50',
        textColor: 'text-purple-600',
    },
    {
        title: 'Vippeløft & Bryn',
        description: 'Fremhev dine naturlige trekk med perfekt formede bryn og vippeløft.',
        icon: Smile,
        color: 'bg-rose-50',
        textColor: 'text-rose-600',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-foreground mb-4"
                    >
                        Våre Behandlinger
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Vi tilbyr et bredt spekter av skjønnhetsbehandlinger.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
                        >
                            <div className={`w-14 h-14 ${service.color} ${service.textColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <Link href="/behandlinger" className="text-sm font-semibold text-primary hover:underline">
                                Se Meny &rarr;
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
