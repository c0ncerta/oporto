"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

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
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} id="navbar">
            <div className={styles.inner}>
                <a href="#" className={styles.logo} id="nav-logo">
                    <span className={styles.logoIcon}>✦</span>
                    <span className={styles.logoText}>RD</span>
                </a>

                <div className={`${styles.links} ${mobileOpen ? styles.open : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.link}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className={styles.actions}>
                    <a
                        href="mailto:rmdaod@proton.me"
                        className={styles.contactBtn}
                        id="nav-contact"
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
    );
}
