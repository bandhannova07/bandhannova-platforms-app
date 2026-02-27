'use client';

import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

// Lazy load 3D scene (heavy)
const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Image
            src="/bandhannova-logo-final.svg"
            alt="BandhanNova"
            width={160}
            height={32}
            priority
            style={{ filter: 'brightness(2)' }}
          />
          <div className="navbar-links">
            <a href="#products" className="navbar-link">Products</a>
            <a href="https://support.bandhannova.in" className="navbar-link" target="_blank" rel="noopener noreferrer">Support</a>
            <a href="https://policies.bandhannova.in" className="navbar-link" target="_blank" rel="noopener noreferrer">Policies</a>
            <a href="https://accounts.bandhannova.in/signin" className="navbar-cta" target="_blank" rel="noopener noreferrer">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="hero-section">
        {/* Background glows */}
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        {/* 3D Scene */}
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        {/* Content */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles size={14} />
            Powered by AI
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            The Future of<br />
            <span className="gradient-text">Digital India</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            One platform, infinite possibilities. AI assistants, real-time messaging,
            intelligent search, education — all unified under BandhanNova.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#products" className="btn-hero-primary">
              Explore Products <ArrowRight size={16} />
            </a>
            <a
              href="https://accounts.bandhannova.in/signup"
              className="btn-hero-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== PRODUCTS ========== */}
      <ProductGrid />

      {/* ========== FEATURES ========== */}
      <Features />

      {/* ========== STATS ========== */}
      <Stats />

      {/* ========== CTA ========== */}
      <section className="cta-section">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Ready to explore?</h2>
          <p>Join the BandhanNova ecosystem and experience the future of digital India.</p>
          <div className="cta-buttons">
            <a
              href="https://accounts.bandhannova.in/signup"
              className="btn-hero-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create Account <ArrowRight size={16} />
            </a>
            <a
              href="https://accounts.bandhannova.in/signin"
              className="btn-hero-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
          </div>
        </motion.div>
      </section>

      {/* ========== FOOTER ========== */}
      <Footer />
    </>
  );
}
