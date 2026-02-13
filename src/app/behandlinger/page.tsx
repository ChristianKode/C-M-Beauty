'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Contact from '@/components/Contact';

const categories = {
    ansikt: {
        id: 'ansikt',
        label: 'ANSIKT',
        title: 'ANSIKTSBEHANDLINGER',
        description: 'Vi tilbyr avanserte hudbehandlinger som kombinerer luksus med resultater. Hver behandling tilpasses din hudtype og dine spesifikke behov.',
        bgColor: 'bg-[#E8F3E8]',
        items: [
            { name: 'Klassisk Ansiktspleie (60 min)', price: '1 250 NOK' },
            { name: 'Dyprens m/ fruktsyrer', price: '1 450 NOK' },
            { name: 'Anti-Age Signature Treatment', price: '1 850 NOK' },
            { name: 'Express Glow (30 min)', price: '850 NOK' },
        ]
    },
    vipper: {
        id: 'vipper',
        label: 'VIPPER & BRYN',
        title: 'VIPPER & BRYN',
        description: 'Ram inn øynene dine med perfekt formede bryn og vipper. Vi tilbyr alt fra farging og forming til vippeløft og extentions.',
        bgColor: 'bg-[#F9EBEB]',
        items: [
            { name: 'Farging av vipper og bryn', price: '550 NOK' },
            { name: 'Brynstyling (voks/napp + farge)', price: '650 NOK' },
            { name: 'Vippeløft m/ farge', price: '1 100 NOK' },
            { name: 'Brow Lamination', price: '1 050 NOK' },
        ]
    },
    negler: {
        id: 'negler',
        label: 'NEGLER',
        title: 'NEGLER',
        description: 'Velstelte hender og føtter er prikken over i-en. Unn deg en manikyr eller pedikyr med lakk som varer.',
        bgColor: 'bg-[#F0F4F8]',
        items: [
            { name: 'Manikyr m/ gellakk', price: '750 NOK' },
            { name: 'Nytt sett gele/akryl', price: '1 100 NOK' },
            { name: 'Pedikyr m/ fotbad og massasje', price: '950 NOK' },
            { name: 'Etterfyll negler', price: '900 NOK' },
        ]
    }
};

export default function BehandlingerPage() {
    const [activeSection, setActiveSection] = useState('ansikt');

    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.keys(categories);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <div className="pt-24 pb-12">
                <div className="container mx-auto px-6 text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Våre Behandlinger</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Utforsk vår komplette meny av behandlinger designet for å gi deg velvære og strålende resultater.</p>
                </div>

                {/* Sticky Sub-nav */}
                <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 mb-16 shadow-sm">
                    <div className="container mx-auto px-6 flex justify-center gap-8 py-4">
                        {Object.values(categories).map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => scrollToSection(cat.id)}
                                className={`text-sm font-bold tracking-widest uppercase transition-colors relative pb-1 ${activeSection === cat.id ? 'text-primary' : 'text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                {cat.label}
                                {activeSection === cat.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-6 max-w-6xl space-y-32">
                    {Object.values(categories).map((category, index) => (
                        <section id={category.id} key={category.id} className="scroll-mt-32">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Text Content */}
                                <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                                    <span className="block w-12 h-0.5 bg-primary/30 mb-6" />
                                    <h2 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-tight">
                                        {category.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed max-w-md mb-10">
                                        {category.description}
                                    </p>

                                    <div className="space-y-6">
                                        {category.items.map((item, index) => (
                                            <div key={index} className="flex justify-between items-baseline border-b border-gray-50 pb-4 group cursor-default">
                                                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                                                    {item.name}
                                                </span>
                                                <span className="text-primary font-bold text-sm">
                                                    {item.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-10">
                                        <button className="bg-[#1a1a1a] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-sm">
                                            Bestill Time &rarr;
                                        </button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className={`aspect-[4/5] rounded-lg ${category.bgColor} relative overflow-hidden shadow-sm ${index % 2 !== 0 ? 'md:order-1' : ''} group`}>
                                    <img
                                        src={
                                            category.id === 'ansikt' ? "https://images.unsplash.com/photo-1570172619385-2da017112aa3?auto=format&fit=crop&w=800&q=80" :
                                                category.id === 'vipper' ? "https://images.unsplash.com/photo-1583001838478-220a215b840d?auto=format&fit=crop&w=800&q=80" :
                                                    "https://images.unsplash.com/photo-1604654894610-df4906b24505?auto=format&fit=crop&w=800&q=80"
                                        }
                                        alt={`${category.title} illustrasjon`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            <Contact />
        </main>
    );
}
