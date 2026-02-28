'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        image: '/man-image-1.jpeg',
        quote: 'BandhanNova is building something truly special. The way every product connects seamlessly under one account — it\'s what Big Tech does, but made in India. I use AI Hub daily for my work.',
        name: 'Arjun Mehta',
        role: 'Developer & Early Adopter, Kolkata',
    },
    {
        image: '/woman-image-1.jpeg',
        quote: 'Smartpedia has completely changed how I research. Instead of opening 20 tabs, I get AI-summarized answers with sources in seconds. It\'s like having a personal research assistant.',
        name: 'Priya Sharma',
        role: 'Content Writer, Mumbai',
    },
    {
        image: '/man-image-2.jpeg',
        quote: 'The BSCCA app transformed how we manage our cricket tournaments. Live scoring, player stats, team management — everything in one place. Our players love it.',
        name: 'Rahul Das',
        role: 'Cricket Club Secretary, Siliguri',
    },
    {
        image: '/woman-image-2.jpeg',
        quote: 'I love how Bani AI learns my daily patterns and actually anticipates what I need. The voice interactions feel completely natural. It\'s the AI assistant I always wanted.',
        name: 'Sneha Roy',
        role: 'Freelancer & Creator, Bangalore',
    },
    {
        image: '/man-image-3.jpeg',
        quote: 'BandhanNova Academy made learning so much easier with AI-generated quizzes that adapt to my level. The progress tracking keeps me motivated every single day.',
        name: 'Vikram Singh',
        role: 'Student & Tech Enthusiast, Delhi',
    },
];

export default function TestimonialsCarousel() {
    const [active, setActive] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % testimonials.length);
        }, 5000);
    };

    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, []);

    const goTo = (i: number) => {
        setActive(i);
        if (timerRef.current) clearInterval(timerRef.current);
        startTimer();
    };

    const t = testimonials[active];

    return (
        <section className="section" style={{ paddingBottom: '40px' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ textAlign: 'center' }}
            >
                <span className="section-label">💬 What People Say</span>
                <h2 className="section-title" style={{ textAlign: 'center' }}>Loved by users<br />across India.</h2>
            </motion.div>

            <div className="testi-carousel">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        className="testi-card"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="testi-avatar-wrapper">
                            <Image
                                src={t.image}
                                alt={t.name}
                                width={56}
                                height={56}
                                className="testi-avatar"
                            />
                        </div>
                        <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                        <p className="testi-name">{t.name}</p>
                        <p className="testi-role">{t.role}</p>
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="testi-dots">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`testi-dot ${i === active ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
