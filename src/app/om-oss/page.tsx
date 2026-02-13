'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Team from '@/components/Team';

export default function OmOssPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <div className="pt-12">
                <About />
                <Team />
            </div>
            <Contact />
        </main>
    );
}
