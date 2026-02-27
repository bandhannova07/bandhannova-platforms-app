'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { value: 10, suffix: '+', label: 'Products' },
    { value: 15, suffix: '+', label: 'AI Models' },
    { value: 500, suffix: '+', label: 'Users' },
    { value: 99, suffix: '%', label: 'Uptime' },
];

export default function Stats() {
    return (
        <section className="stats-section">
            <div className="stats-inner">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className="stat-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <h3>
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                        </h3>
                        <p>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
