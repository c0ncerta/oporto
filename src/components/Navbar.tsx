"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.css";

const EMAIL = "rmdaod@proton.me";

const navLinks = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Sobre mí", href: "#about" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Only update scrolled state when menu is closed
            if (!mobileOpen) {
                setScrolled(window.scrollY > 50);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileOpen]);

    // iOS-safe body scroll lock
    useEffect(() => {
        if (mobileOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.overflow = "hidden";
        } else {
            const top = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.overflow = "";
            // Restore scroll position
            if (top) {
                window.scrollTo(0, parseInt(top, 10) * -1);
            }
        }
        return () => {
            const top = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.overflow = "";
            if (top) {
                window.scrollTo(0, parseInt(top, 10) * -1);
            }
        };
    }, [mobileOpen]);

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
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} id="navbar">
                <div className={styles.inner}>
                    <a href="#" className={styles.logo} id="nav-logo">
                        <span className={styles.logoIcon}>
                            <img
                                src="/logo4.svg"
                                alt=""
                                aria-hidden="true"
                                className={styles.logoIconImage}
                            />
                        </span>
                        <span className={styles.logoText}>Ram Daod</span>
                    </a>

                    <div className={styles.desktopLinks}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={styles.link}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <a
                            href={`mailto:${EMAIL}`}
                            className={styles.contactBtn}
                            id="nav-contact"
                            onClick={handleContactClick}
                        >
                            Contactar
                        </a>
                        <button
                            className={styles.hamburger}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menú"
                            id="nav-hamburger"
                        >
                            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen : ""}`} />
                            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen : ""}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay — OUTSIDE nav to avoid iOS nested fixed bug */}
            <div
                className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
                aria-hidden={!mobileOpen}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={() => setMobileOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    );
}

