'use client';

import React from 'react';
import { motion } from 'framer-motion';

const employees = [
    {
        name: 'Sarah Hansen',
        role: 'Daglig Leder & Frisør',
        bio: 'Med over 10 års erfaring brenner Sarah for å skape personlige stiler som fremhever det beste i hver kunde.',
        color: 'bg-rose-100',
    },
    {
        name: 'Maria Eriksen',
        role: 'Hudpleier & Negldesigner',
        bio: 'Maria er spesialist på hudhelse og detaljrike negledesign. Hennes mål er at du skal føle deg like bra som du ser ut.',
        color: 'bg-purple-100',
    },
    {
        name: 'Elena Petrov',
        role: 'Vippetekniker',
        bio: 'Sertifisert vippe-artist med øye for perfeksjon. Elena skaper alt fra naturlige looker til dramatisk volum.',
        color: 'bg-blue-100',
    }
];

export default function Team() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-semibold tracking-wider uppercase mb-2 block"
                    >
                        Møt Ekspertene
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-foreground"
                    >
                        Våre Ansatte
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {employees.map((employee, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className={`aspect-[3/4] rounded-2xl ${employee.color} mb-6 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow`}>
                                <img
                                    src={
                                        index === 0 ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" :
                                            index === 1 ? "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" :
                                                "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80"
                                    }
                                    alt={employee.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-1">{employee.name}</h3>
                            <p className="text-primary font-medium mb-4">{employee.role}</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {employee.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
