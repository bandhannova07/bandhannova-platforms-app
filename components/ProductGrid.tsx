'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
    { name: 'BandhanNova AI Hub', icon: '🧠', desc: 'Multi-agent AI assistant platform with 15+ models, custom agents, and real-time intelligence tools.', url: 'https://ai.bandhannova.in', color: '#7c3aed', bg: '#f5f3ff' },
    { name: 'Bani AI', icon: '🤖', desc: 'Your personal shadow assistant — learns your patterns, anticipates your needs, and acts on your behalf.', url: 'https://bani.bandhannova.in', color: '#14b8a6', bg: '#f0fdfa' },
    { name: 'BandhanNova Chat', icon: '💬', desc: 'Real-time messaging with rich media, voice notes, reactions, and end-to-end encryption.', url: 'https://chat.bandhannova.in', color: '#2563eb', bg: '#eff6ff' },
    { name: 'BandhanNova Smartpedia', icon: '🔍', desc: 'AI-powered knowledge search that analyzes, scrapes, and summarizes information from across the web.', url: 'https://smartpedia.bandhannova.in', color: '#a855f7', bg: '#faf5ff' },
    { name: 'BandhanNova Academy', icon: '🎓', desc: 'AI-powered learning platform with personalized courses, progress tracking, and intelligent assessments.', url: 'https://academy.bandhannova.in', color: '#16a34a', bg: '#f0fdf4' },
    { name: 'BandhanNova Blogs', icon: '📝', desc: 'AI-assisted publishing platform for writers, creators, and thought leaders — write, edit, publish.', url: 'https://blogs.bandhannova.in', color: '#f59e0b', bg: '#fffbeb' },
    { name: 'BSCCA', icon: '🏏', desc: 'Official cricket council application — team management, player stats, live scoring, and tournament control.', url: 'https://bscca.bandhannova.in', color: '#059669', bg: '#ecfdf5' },
    { name: 'BandhanNova Accounts', icon: '🔐', desc: 'One unified account for all BandhanNova products — secure authentication, profile management, SSO.', url: 'https://accounts.bandhannova.in', color: '#4f46e5', bg: '#eef2ff' },
    { name: 'BandhanNova Support', icon: '🆘', desc: 'Comprehensive help center with FAQs, contact form, live service status, and knowledge articles.', url: 'https://support.bandhannova.in', color: '#dc2626', bg: '#fef2f2' },
];

export default function ProductGrid() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <section className="section" id="products">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <span className="section-label">🚀 Ecosystem</span>
                <h2 className="section-title">Everything you need,<br />in one platform.</h2>
                <p className="section-desc">From AI assistants to real-time messaging — every product works together seamlessly under one unified account.</p>
            </motion.div>

            <div className="products-grid" ref={ref}>
                {products.map((product, i) => (
                    <motion.a
                        key={product.name}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-card"
                        style={{ '--card-glow': `${product.color}15` } as React.CSSProperties}
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="product-emoji" style={{ background: product.bg }}>
                            {product.icon}
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.desc}</p>
                        <span className="product-arrow">
                            <ArrowUpRight size={14} />
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
