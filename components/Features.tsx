'use client';

import { motion } from 'framer-motion';

const features = [
    {
        icon: '🔐',
        title: 'One Account, All Products',
        desc: 'Sign in once and access every BandhanNova product seamlessly — no switching, no friction.',
        bg: '#eff6ff',
    },
    {
        icon: '🧠',
        title: 'AI-Powered Everything',
        desc: 'From intelligent search to personal assistants — AI is woven into every layer of our platform.',
        bg: '#f5f3ff',
    },
    {
        icon: '🇮🇳',
        title: 'Built for India',
        desc: 'Designed, developed, and deployed in India — optimized for speed and accessibility across the nation.',
        bg: '#f0fdf4',
    },
];

export default function Features() {
    return (
        <section className="features-section">
            <div className="features-inner">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>Why BandhanNova?</h2>
                    <p>A unified digital experience built with purpose.</p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="feature-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div className="feature-icon-wrapper" style={{ background: feature.bg }}>
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
