"use client";

import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
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
                        href="mailto:rmdaod@proton.me"
                        className={styles.ctaButton}
                        id="footer-contact"
                    >
                        <span>rmdaod@proton.me</span>
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
                        <a
                            href="https://www.linkedin.com/in/ram-daod/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            id="footer-linkedin"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:rmdaod@proton.me?subject=Solicitud%20de%20CV%20-%20Ram%20Daod"
                            className={styles.link}
                            id="footer-cv"
                        >
                            Pedir CV
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
