'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles, Zap, Shield, Globe, Brain, MessageCircle, Search, GraduationCap, PenTool, Trophy } from 'lucide-react';

interface ProductFeature {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

interface Product {
    id: string;
    name: string;
    tagline: string;
    emoji: string;
    color: string;
    bg: string;
    image: string;
    url: string;
    features: ProductFeature[];
}

const products: Product[] = [
    {
        id: 'ai-hub',
        name: 'BandhanNova AI Hub',
        tagline: 'Multi-agent AI assistant with 15+ models.',
        emoji: '🧠',
        color: '#7c3aed',
        bg: '#f5f3ff',
        image: '/product-ai-hub.png',
        url: 'https://ai.bandhannova.in',
        features: [
            { icon: <Brain size={20} />, title: 'Multi-Model Intelligence', desc: 'Access 15+ AI models including GPT, Claude, Gemini, and more — all in one interface. Switch models mid-conversation for the best answers.' },
            { icon: <Sparkles size={20} />, title: 'Custom AI Agents', desc: 'Create personalized agents with custom instructions, knowledge bases, and behaviors tailored to your workflow and needs.' },
            { icon: <Zap size={20} />, title: 'Real-Time Streaming', desc: 'See AI responses as they generate — no waiting. Lightning-fast streaming with context memory across conversations.' },
        ],
    },
    {
        id: 'bani',
        name: 'Bani AI',
        tagline: 'Your personal shadow assistant.',
        emoji: '🤖',
        color: '#14b8a6',
        bg: '#f0fdfa',
        image: '/product-bani.png',
        url: 'https://bani.bandhannova.in',
        features: [
            { icon: <Brain size={20} />, title: 'Pattern Learning', desc: 'Bani learns your daily patterns, preferences, and habits over time — becoming more helpful the more you use it.' },
            { icon: <MessageCircle size={20} />, title: 'Natural Conversations', desc: 'Talk to Bani like a friend. Voice and text interactions that feel natural, with emotional intelligence built in.' },
            { icon: <Shield size={20} />, title: 'Private & Secure', desc: 'Your personal data stays private. Bani processes your patterns locally and never shares your information with third parties.' },
        ],
    },
    {
        id: 'chat',
        name: 'BandhanNova Chat',
        tagline: 'Real-time messaging, reimagined.',
        emoji: '💬',
        color: '#2563eb',
        bg: '#eff6ff',
        image: '/product-chat.png',
        url: 'https://chat.bandhannova.in',
        features: [
            { icon: <MessageCircle size={20} />, title: 'Rich Media Messaging', desc: 'Send text, images, voice notes, files, and reactions. Full-featured messaging with inline media previews and threads.' },
            { icon: <Zap size={20} />, title: 'Instant Delivery', desc: 'Messages delivered in milliseconds with real-time presence indicators, typing status, and read receipts.' },
            { icon: <Shield size={20} />, title: 'End-to-End Encrypted', desc: 'Your conversations are protected with industry-standard encryption. Only you and the recipient can read your messages.' },
        ],
    },
    {
        id: 'smartpedia',
        name: 'BandhanNova Smartpedia',
        tagline: 'AI search that understands the web.',
        emoji: '🔍',
        color: '#a855f7',
        bg: '#faf5ff',
        image: '/product-smartpedia.png',
        url: 'https://smartpedia.bandhannova.in',
        features: [
            { icon: <Search size={20} />, title: 'Real-Time Web Scraping', desc: 'Smartpedia fetches and scrapes the latest information from across the web in real-time — always up to date, never stale.' },
            { icon: <Brain size={20} />, title: 'AI-Summarized Answers', desc: 'Get comprehensive, cited AI summaries instead of a list of links. Understand any topic in seconds with rich markdown formatting.' },
            { icon: <Globe size={20} />, title: 'Source Transparency', desc: 'Every answer comes with source citations so you can verify and explore further. Full transparency in every response.' },
        ],
    },
    {
        id: 'academy',
        name: 'BandhanNova Academy',
        tagline: 'AI-powered learning for everyone.',
        emoji: '🎓',
        color: '#16a34a',
        bg: '#f0fdf4',
        image: '/product-academy.png',
        url: 'https://academy.bandhannova.in',
        features: [
            { icon: <GraduationCap size={20} />, title: 'Personalized Courses', desc: 'AI creates custom learning paths based on your skill level, goals, and learning pace. No one-size-fits-all approach.' },
            { icon: <Zap size={20} />, title: 'Progress Analytics', desc: 'Track your advancement with detailed analytics, streaks, and achievement milestones that keep you motivated.' },
            { icon: <Brain size={20} />, title: 'Smart Assessments', desc: 'AI-generated quizzes and assignments that adapt to your performance, testing exactly what you need to practice most.' },
        ],
    },
    {
        id: 'blogs',
        name: 'BandhanNova Blogs',
        tagline: 'AI-assisted publishing platform.',
        emoji: '📝',
        color: '#f59e0b',
        bg: '#fffbeb',
        image: '/product-blogs.png',
        url: 'https://blogs.bandhannova.in',
        features: [
            { icon: <PenTool size={20} />, title: 'AI Writing Assistant', desc: 'Get suggestions, auto-completions, and grammar fixes in real-time. Write faster and better with AI at your fingertips.' },
            { icon: <Globe size={20} />, title: 'Instant Publishing', desc: 'Write, edit, and publish in one seamless flow. Your content goes live instantly with beautiful, responsive formatting.' },
            { icon: <Sparkles size={20} />, title: 'SEO Optimization', desc: 'AI automatically suggests titles, meta descriptions, and keywords to maximize your reach and discoverability.' },
        ],
    },
    {
        id: 'bscca',
        name: 'BSCCA',
        tagline: 'Cricket council management system.',
        emoji: '🏏',
        color: '#059669',
        bg: '#ecfdf5',
        image: '/product-bscca.png',
        url: 'https://bscca.bandhannova.in',
        features: [
            { icon: <Trophy size={20} />, title: 'Tournament Management', desc: 'Create, schedule, and manage cricket tournaments with automatic fixtures, standings tables, and real-time score updates.' },
            { icon: <Zap size={20} />, title: 'Live Scoring', desc: 'Ball-by-ball live scoring with detailed statistics — batting averages, bowling economy, strike rates, and more.' },
            { icon: <Shield size={20} />, title: 'Team & Player Registry', desc: 'Complete player profiles with career stats, team rosters, photo management, and detailed performance history.' },
        ],
    },
];

function ProductSection({ product, index }: { product: Product; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const isReversed = index % 2 !== 0;

    return (
        <section
            ref={ref}
            className={`pd-section ${isReversed ? 'reversed' : ''}`}
            style={{ background: index % 2 === 0 ? 'var(--bg)' : 'var(--bg-white)' }}
        >
            <div className="pd-inner">
                {/* Image */}
                <motion.div
                    className="pd-image-wrapper"
                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={480}
                        height={480}
                        className="pd-image"
                        style={{ boxShadow: `0 24px 64px ${product.color}15` }}
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="pd-content"
                    initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <div className="pd-badge" style={{ background: product.bg, color: product.color }}>
                        <span>{product.emoji}</span> {product.name}
                    </div>
                    <h2 className="pd-title">{product.tagline}</h2>

                    <div className="pd-features">
                        {product.features.map((feat, i) => (
                            <motion.div
                                key={feat.title}
                                className="pd-feature"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                            >
                                <div className="pd-feature-icon" style={{ background: product.bg, color: product.color }}>
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="pd-feature-title">{feat.title}</h4>
                                    <p className="pd-feature-desc">{feat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <a
                        href={product.url}
                        className="pd-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: product.color }}
                    >
                        Visit {product.name.replace('BandhanNova ', '')} <ArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default function ProductsPage() {
    return (
        <>
            {/* Hero */}
            <section className="pd-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">📦 Product Library</span>
                    <h1 className="pd-hero-title">
                        Our <span className="text-gradient">Products</span>
                    </h1>
                    <p className="pd-hero-desc">
                        Explore the complete BandhanNova ecosystem — every product built with AI at its core,
                        designed for performance, and unified under one account.
                    </p>
                </motion.div>
            </section>

            {/* Products */}
            {products.map((product, i) => (
                <ProductSection key={product.id} product={product} index={i} />
            ))}

            {/* Bottom CTA */}
            <section className="pd-bottom-cta">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
                >
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Ready to dive in?</h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 32px' }}>
                        Create your free BandhanNova account and start exploring all products today.
                    </p>
                    <a
                        href="https://accounts.bandhannova.in/signup"
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Create Free Account <ArrowUpRight size={16} />
                    </a>
                </motion.div>
            </section>
        </>
    );
}
