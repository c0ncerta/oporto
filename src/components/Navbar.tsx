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
            setScrolled(window.scrollY > 50);
            // Close mobile menu on scroll to prevent overlap
            setMobileOpen(false);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
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
    );
}

