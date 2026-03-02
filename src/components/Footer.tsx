"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Footer.module.css";

const EMAIL = "rmdaod@proton.me";

export default function Footer() {
    const year = new Date().getFullYear();
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const closeModal = useCallback(() => setShowModal(false), []);

    const copyToClipboard = useCallback((text: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).catch(() => {
                // fallback
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
        setShowToast(true);
    }, []);

    const handleEmailClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            copyToClipboard(EMAIL);
            // Small delay to let the toast show before mailto redirect
            setTimeout(() => {
                window.location.href = `mailto:${EMAIL}`;
            }, 100);
        },
        [copyToClipboard]
    );

    useEffect(() => {
        if (!showToast) return;
        const timer = setTimeout(() => setShowToast(false), 3000);
        return () => clearTimeout(timer);
    }, [showToast]);

    // Listen for email-copied events from Navbar
    useEffect(() => {
        const handler = () => setShowToast(true);
        window.addEventListener("email-copied", handler);
        return () => window.removeEventListener("email-copied", handler);
    }, []);

    useEffect(() => {
        if (!showModal) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [showModal, closeModal]);

    return (
        <>
            <footer className={styles.footer} id="footer">
                <div className={styles.container}>
                    {/* Top CTA */}
                    <div className={`${styles.ctaBlock} reveal`}>
                        <h2 className={styles.ctaHeading}>
                            <span className="accent-gradient-text">¿Hablamos?</span>
                        </h2>
                        <p className={styles.ctaText}>
                            Disponible para oportunidades junior · Barcelona
                        </p>
                        <a
                            href={`mailto:${EMAIL}`}
                            className={styles.ctaButton}
                            id="footer-contact"
                            onClick={handleEmailClick}
                        >
                            <span>{EMAIL}</span>
                            <span className={styles.ctaIcon}>✦</span>
                        </a>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider} />

                    {/* Bottom */}
                    <div className={styles.bottom}>
                        <p className={styles.copyright}>
                            © {year} Ram Daod
                        </p>

                        <nav className={styles.links}>
                            <a
                                href="https://github.com/c0ncerta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                                id="footer-github"
                            >
                                GitHub
                            </a>
                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className={`${styles.link} ${styles.linkBtn}`}
                                id="footer-linkedin"
                            >
                                LinkedIn
                            </button>
                            <a
                                href="https://pdflink.to/cv_rmdaod/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                                id="footer-cv"
                            >
                                Pedir CV
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>

            {/* LinkedIn Unavailable Modal */}
            {showModal && (
                <div
                    className={styles.modalOverlay}
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label="LinkedIn no disponible"
                >
                    <div
                        className={styles.modalCard}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalGlow} />
                        <span className={styles.modalIcon}>⚠</span>
                        <h3 className={styles.modalTitle}>Enlace no disponible</h3>
                        <p className={styles.modalMessage}>
                            Lo sentimos, pero no es posible acceder a este enlace
                            por circunstancias fuera de nuestro control.
                            Disculpa las molestias.
                        </p>
                        <button
                            type="button"
                            className={styles.modalButton}
                            onClick={closeModal}
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            )}

            {/* Email Copied Toast */}
            <div
                className={`${styles.toast} ${showToast ? styles.toastVisible : ""}`}
                role="status"
                aria-live="polite"
            >
                <span className={styles.toastIcon}>✓</span>
                Email copiado al portapapeles
            </div>
        </>
    );
}
