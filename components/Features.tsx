'use client';

import { motion } from 'framer-motion';

const features = [
    {
        emoji: '🔐',
        title: 'One Account, All Products',
        desc: 'Sign in once and access everything — AI Hub, Chat, Smartpedia, Academy, and more. No friction, no separate logins.',
        highlight: true,
    },
    {
        emoji: '🧠',
        title: 'AI at Every Layer',
        desc: 'From intelligent search to personal assistants — AI is woven into every product.',
    },
    {
        emoji: '🇮🇳',
        title: 'Built for India',
        desc: 'Designed, developed, and deployed from India for a billion people.',
    },
    {
        emoji: '⚡',
        title: 'Blazing Fast',
        desc: 'Performance-first architecture — sub-second loads, real-time data, zero bloat.',
    },
    {
        emoji: '🌐',
        title: 'Works Everywhere',
        desc: 'Fully responsive — desktop, tablet, mobile. Your workflow, wherever you are.',
    },
    {
        emoji: '🎨',
        title: 'Premium Design Language',
        desc: 'Crafted with world-class aesthetics — clean typography, smooth animations, and minimal UI.',
        highlight: true,
    },
    {
        emoji: '🛡️',
        title: 'Secure by Design',
        desc: 'End-to-end encryption, industry-standard auth, and data privacy at every layer.',
        highlight: true,
    },
    {
        emoji: '🔄',
        title: 'Seamless Sync',
        desc: 'Your data flows across every BandhanNova product in real-time. No exports, no imports.',
    },
    {
        emoji: '📊',
        title: 'Analytics & Insights',
        desc: 'Built-in dashboards and metrics across all products — know your usage, track your growth.',
    },
    {
        emoji: '🔔',
        title: 'Smart Notifications',
        desc: 'Context-aware alerts that never spam — get notified about what matters, when it matters.',
    },
    {
        emoji: '🌙',
        title: 'Dark Mode Native',
        desc: 'Beautiful dark themes across every product, designed for comfort and reduced eye strain.',
    },
    {
        emoji: '🚀',
        title: 'Continuous Updates',
        desc: 'New features and improvements ship weekly — the platform evolves with your needs.',
        highlight: true,
    },
];

export default function Features() {
    return (
        <section id="features" className="section-white" aria-labelledby="features-title">
            <div className="section-inner">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '8px' }}
                >
                    <span className="section-label">💡 Why BandhanNova</span>
                    <h2 id="features-title" className="section-title" style={{ textAlign: 'center' }}>Built different.<br />Designed better.</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto' }}>A unified digital experience built with purpose, performance, and people in mind.</p>
                </motion.div>

                <div className="bento-grid-v2">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className={`bento-card ${f.highlight ? 'highlight' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        >
                            <span className="bento-emoji">{f.emoji}</span>
                            <h3 className="bento-title">{f.title}</h3>
                            <p className="bento-desc">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
