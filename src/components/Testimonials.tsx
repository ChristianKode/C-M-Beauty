'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah M.',
        text: 'Absolutely the best salon experience I have ever had. The attention to detail is unmatched.',
        role: 'Loyal Client',
    },
    {
        name: 'Emily R.',
        text: 'My hair has never looked better. The stylists really listen to what you want.',
        role: 'First-time Visitor',
    },
    {
        name: 'Jessica T.',
        text: 'A true sanctuary. The spa treatments are incredibly relaxing and effective.',
        role: 'Regular',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Client Love</h2>
                    <p className="text-gray-600">Don&apos;t just take our word for it.</p>
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
