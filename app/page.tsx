'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHeroMouse = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cursorGlowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    cursorGlowRef.current.style.left = `${e.clientX - rect.left}px`;
    cursorGlowRef.current.style.top = `${e.clientY - rect.top}px`;
  }, []);

  const marqueeProducts = [
    '🧠 AI Hub', '🤖 Bani AI', '💬 Chat', '🔍 Smartpedia', '🎓 Academy',
    '📝 Blogs', '🏏 BSCCA', '🔐 Accounts', '🆘 Support', '📄 Policies',
    '🧠 AI Hub', '🤖 Bani AI', '💬 Chat', '🔍 Smartpedia', '🎓 Academy',
    '📝 Blogs', '🏏 BSCCA', '🔐 Accounts', '🆘 Support', '📄 Policies',
  ];

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="/">
            <Image
              src="/bandhannova-logo-final.svg"
              alt="BandhanNova"
              width={180}
              height={40}
              priority
            />
          </a>
          <div className="nav-links">
            <a href="/products" className="nav-link">Products</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="https://support.bandhannova.in" className="nav-link" target="_blank" rel="noopener noreferrer">Support</a>
            <a href="https://policies.bandhannova.in" className="nav-link" target="_blank" rel="noopener noreferrer">Policies</a>
            <a href="https://accounts.bandhannova.in/signin" className="nav-cta" target="_blank" rel="noopener noreferrer">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="hero" className="hero" onMouseMove={handleHeroMouse} aria-label="BandhanNova Hero Section">
        <div className="hero-cursor-glow" ref={cursorGlowRef} />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <div className="hero-split">
          {/* Left: Text */}
          <div className="hero-text">
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="hero-eyebrow-dot" />
              Now live — 10+ products in the ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              The future of<br />
              <span className="text-gradient">Digital India</span>
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              One platform, infinite possibilities. AI assistants, real-time messaging,
              intelligent search, education, and more — all unified under BandhanNova.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#products" className="btn-primary">
                Explore Products <ArrowRight size={16} />
              </a>
              <a
                href="https://accounts.bandhannova.in/signup"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started — Free
              </a>
            </motion.div>
          </div>

          {/* Right: Hero Visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/hero-visual.png"
              alt="BandhanNova Unified Digital Platform Interface"
              width={520}
              height={520}
              className="hero-image"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section className="marquee-section" aria-label="Ecosystem Product Marquee">
        <div className="marquee-label">Powering the BandhanNova Ecosystem</div>
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track">
            {[...marqueeProducts, ...marqueeProducts].map((item, i) => (
              <span key={i} className="marquee-item">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <ProductGrid />

      {/* ==================== VISUAL SHOWCASE ==================== */}
      <section className="showcase-section" aria-labelledby="showcase-title">
        <div className="showcase-inner">
          <motion.div
            className="showcase-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">🌐 Unified Platform</span>
            <h2 id="showcase-title" className="section-title">Everything connects.<br />Everything works together.</h2>
            <p className="section-desc">
              BandhanNova isn&apos;t just a collection of apps — it&apos;s an interconnected ecosystem.
              Your data flows seamlessly between products. One account opens every door. What you do in
              AI Hub improves your Bani experience. Your Smartpedia research feeds into your Academy learning.
            </p>
            <a href="/products" className="btn-secondary" style={{ marginTop: '24px' }}>
              See All Products <ArrowRight size={14} />
            </a>
          </motion.div>
          <motion.div
            className="showcase-image-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/products-showcase.png"
              alt="BandhanNova Ecosystem"
              width={560}
              height={560}
              className="showcase-image"
            />
          </motion.div>
        </div>
      </section>

      {/* ==================== FEATURES (Bento) ==================== */}
      <div id="features">
        <Features />
      </div>

      {/* ==================== AI VISUAL SECTION ==================== */}
      <section className="ai-visual-section">
        <div className="ai-visual-inner">
          <motion.div
            className="ai-visual-image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/ai-feature.png"
              alt="AI Intelligence"
              width={480}
              height={480}
              className="ai-visual-image"
            />
          </motion.div>
          <motion.div
            className="ai-visual-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-label" style={{ color: '#60a5fa' }}>🧠 AI Intelligence</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Artificial Intelligence<br />at the core.</h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Every BandhanNova product is powered by advanced AI — from multi-agent assistants
              with 15+ language models to intelligent knowledge search that scrapes and summarizes
              the entire web in real-time. Our AI doesn&apos;t just assist — it anticipates, learns,
              and evolves with you.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#60a5fa' }}>7+</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>AI Models</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#a78bfa' }}>Real-time</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>Processing</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#34d399' }}>Custom</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>AI Agents</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <TestimonialsCarousel />

      {/* ==================== STATS ==================== */}
      <Stats />

      {/* ==================== CTA ==================== */}
      <section className="cta-visual-section" aria-label="Ready to experience the future">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cta-visual.svg"
          alt=""
          className="cta-bg-svg"
        />
        <div className="cta-overlay" />
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <h2 className="cta-title" style={{ color: '#fff' }}>Ready to experience<br />the future?</h2>
          <p className="cta-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Join thousands of users already exploring the BandhanNova ecosystem.
            One account, infinite possibilities.
          </p>
          <div className="cta-buttons">
            <a
              href="https://accounts.bandhannova.in/signup"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#fff', color: '#09090b' }}
            >
              Create Free Account <ArrowRight size={16} />
            </a>
            <a
              href="https://accounts.bandhannova.in/signin"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', background: 'rgba(255,255,255,0.1)' }}
            >
              Sign In
            </a>
          </div>
        </motion.div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </>
  );
}
