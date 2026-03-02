"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./Hero.module.css";

const EMAIL = "rmdaod@proton.me";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const y = window.scrollY;
            const opacity = Math.max(0, 1 - y / 700);
            const translateY = y * 0.3;
            heroRef.current.style.opacity = String(opacity);
            heroRef.current.style.transform = `translateY(${translateY}px)`;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleContactClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            const copyText = (text: string) => {
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).catch(() => {
                        const ta = document.createElement("textarea");
                        ta.value = text;
                        ta.style.position = "fixed";
                        ta.style.opacity = "0";
                        document.body.appendChild(ta);
                        ta.select();
                        document.execCommand("copy");
                        document.body.removeChild(ta);
                    });
                } else {
                    const ta = document.createElement("textarea");
                    ta.value = text;
                    ta.style.position = "fixed";
                    ta.style.opacity = "0";
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand("copy");
                    document.body.removeChild(ta);
                }
            };
            copyText(EMAIL);
            window.dispatchEvent(new CustomEvent("email-copied"));
            setTimeout(() => {
                window.location.href = `mailto:${EMAIL}`;
            }, 100);
        },
        []
    );

    return (
        <section className={styles.hero} id="hero">
            {/* Background glow effects */}
            <div className={styles.bgGlow} />
            <div className={styles.bgGlow2} />
            <div className={styles.bgImage} />

            <div ref={heroRef} className={styles.content}>
                {/* Kicker */}
                <div className={styles.kicker}>
                    <span className={styles.kickerDot} />
                    <span>Barcelona · Disponible para contratación</span>
                </div>

                {/* Main headline */}
                <h1 className={styles.headline}>
                    <span className={styles.line1}>Construyo</span>
                    <span className={styles.line2}>experiencias web</span>
                    <span className={styles.line3}>
                        que <em>funcionan</em>.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className={styles.subtitle}>
                    Desarrollador Full-Stack con foco frontend. Interfaces claras en
                    React/Next.js y soluciones backend con Node.js orientadas a producto.
                </p>

                {/* CTAs */}
                <div className={styles.ctas}>
                    <a
                        href={`mailto:${EMAIL}`}
                        className={styles.ctaPrimary}
                        id="hero-contact"
                        onClick={handleContactClick}
                    >
                        <span>Contactar</span>
                        <span className={styles.ctaIcon}>✦</span>
                    </a>
                    <a href="#proyectos" className={styles.ctaSecondary} id="hero-projects">
                        Ver proyectos
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M3 8h10M9 4l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>

                {/* Section marker like flank.ai */}
                <div className={styles.sectionMarker}>S — 01</div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}

