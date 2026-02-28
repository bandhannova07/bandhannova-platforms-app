'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const duration = 2200;
        const start = Date.now();
        const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // quartic ease-out
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { value: 10, suffix: '+', label: 'Products Built' },
    { value: 7, suffix: '+', label: 'AI Models Integrated' },
    { value: 5000, suffix: '+', label: 'Active Users' },
    { value: 99, suffix: '%', label: 'Uptime SLA' },
];

export default function Stats() {
    return (
        <section id="stats" className="section-dark" aria-labelledby="stats-title">
            <div className="section-inner">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '16px' }}
                >
                    <span className="section-label" style={{ color: '#60a5fa' }}>📊 By the Numbers</span>
                    <h2 id="stats-title" className="section-title" style={{ color: '#fff' }}>Growing fast.<br />Built to scale.</h2>
                </motion.div>

                <div className="stats-grid">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="stat-number" style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <Counter target={s.value} suffix={s.suffix} />
                            </div>
                            <div className="stat-label">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
