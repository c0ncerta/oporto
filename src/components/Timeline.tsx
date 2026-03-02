"use client";

import styles from "./Timeline.module.css";

type TimelineEntry = {
    date: string;
    title: string;
    description: string;
};

const entries: TimelineEntry[] = [
    {
        date: "Actualidad",
        title: "Búsqueda activa & mejora continua",
        description:
            "Construcción del portfolio, mejora continua de proyectos propios y búsqueda activa de oportunidades junior.",
    },
    {
        date: "Proyectos recientes",
        title: "Colaboración en app tipo Discord",
        description:
            "Colaboración en app tipo Discord y desarrollo de bots de tickets/moderación con Node.js.",
    },
    {
        date: "Formación base",
        title: "IFCD0210 — Desarrollo web",
        description:
            "Certificado profesional de desarrollo web y práctica constante en proyectos personales.",
    },
];

export default function Timeline() {
    return (
        <section className={styles.section} id="experiencia">
            <div className={styles.container}>
                <div className={`${styles.header} reveal`}>
                    <span className={styles.sectionLabel}>S — 04</span>
                    <h2 className={styles.heading}>
                        <span className="gradient-text">Experiencia y recorrido</span>
                    </h2>
                </div>

                <div className={styles.timeline}>
                    {entries.map((entry, idx) => (
                        <div
                            key={idx}
                            className={`${styles.entry} reveal reveal-delay-${idx + 1}`}
                        >
                            <div className={styles.entryLeft}>
                                <span className={styles.entryDate}>{entry.date}</span>
                            </div>

                            <div className={styles.entryLine}>
                                <div className={styles.dot}>
                                    <div className={styles.dotInner} />
                                </div>
                                {idx < entries.length - 1 && (
                                    <div className={styles.connector} />
                                )}
                            </div>

                            <div className={styles.entryRight}>
                                <h3 className={styles.entryTitle}>{entry.title}</h3>
                                <p className={styles.entryDesc}>{entry.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
