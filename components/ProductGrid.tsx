'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const products = [
    { name: 'BandhanNova AI Hub', icon: '🧠', desc: 'Multi-agent AI assistant with 15+ models, custom agents, and creative tools.', url: 'https://ai.bandhannova.in', color: '#8b5cf6' },
    { name: 'Bani AI', icon: '🤖', desc: 'Your personal shadow assistant — learns your patterns, anticipates your needs.', url: 'https://bani.bandhannova.in', color: '#14b8a6' },
    { name: 'BandhanNova Chat', icon: '💬', desc: 'Real-time messaging with rich media, voice notes, and end-to-end encryption.', url: 'https://chat.bandhannova.in', color: '#3b82f6' },
    { name: 'BandhanNova Smartpedia', icon: '🔍', desc: 'AI knowledge search that fetches, analyzes, and summarizes the entire web.', url: 'https://smartpedia.bandhannova.in', color: '#a855f7' },
    { name: 'BandhanNova Academy', icon: '🎓', desc: 'AI-powered learning platform with personalized courses and progress tracking.', url: 'https://academy.bandhannova.in', color: '#22c55e' },
    { name: 'BandhanNova Blogs', icon: '📝', desc: 'AI-assisted publishing platform for writers, creators, and thought leaders.', url: 'https://blogs.bandhannova.in', color: '#f59e0b' },
    { name: 'BSCCA', icon: '🏏', desc: 'Official cricket council app for team management, stats, and live scoring.', url: 'https://bscca.bandhannova.in', color: '#10b981' },
    { name: 'BandhanNova Accounts', icon: '🔐', desc: 'One unified account for all BandhanNova products — secure, seamless, instant.', url: 'https://accounts.bandhannova.in', color: '#6366f1' },
    { name: 'BandhanNova Support', icon: '🆘', desc: 'Help center, contact form, FAQs, and live service status monitoring.', url: 'https://support.bandhannova.in', color: '#ef4444' },
];

export default function ProductGrid() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="products-section" id="products">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2>Our Ecosystem</h2>
                <p>Every product you need, in one unified platform powered by AI.</p>
            </motion.div>

            <div className="products-grid" ref={ref}>
                {products.map((product, i) => (
                    <motion.a
                        key={product.name}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-card"
                        style={{ '--card-accent': product.color } as React.CSSProperties}
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                        <div className="product-icon" style={{ background: `${product.color}15` }}>
                            {product.icon}
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.desc}</p>
                        <span className="arrow">
                            <ArrowUpRight size={14} />
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
