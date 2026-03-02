"use client";

import styles from "./About.module.css";

const languages = [
    { lang: "Árabe", level: "Nativo", percent: 100 },
    { lang: "Castellano", level: "Nativo", percent: 100 },
    { lang: "Catalán", level: "Nativo", percent: 100 },
    { lang: "Inglés", level: "C1 funcional", percent: 90 },
];

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={`${styles.header} reveal`}>
                    <span className={styles.sectionLabel}>S — 05</span>
                    <h2 className={styles.heading}>
                        <span className="gradient-text">Sobre mí</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* About text */}
                    <div className={`${styles.textBlock} reveal reveal-delay-1`}>
                        <p className={styles.bigText}>
                            Me centro en entregar software que funcione de verdad:
                        </p>
                        <p className={styles.bodyText}>
                            Código mantenible, buenas bases de UX y solución orientada al
                            problema del usuario. Me gusta construir cosas que la gente
                            realmente quiera usar.
                        </p>
                        <p className={styles.bodyText}>
                            Siempre aprendiendo, siempre iterando. Disponible para
                            oportunidades desde Barcelona.
                        </p>
                    </div>

                    {/* Languages */}
                    <div className={`${styles.languagesBlock} reveal reveal-delay-2`}>
                        <h3 className={styles.langTitle}>Idiomas</h3>
                        <div className={styles.langList}>
                            {languages.map((l) => (
                                <div key={l.lang} className={styles.langItem}>
                                    <div className={styles.langHeader}>
                                        <span className={styles.langName}>{l.lang}</span>
                                        <span className={styles.langLevel}>{l.level}</span>
                                    </div>
                                    <div className={styles.langBar}>
                                        <div
                                            className={styles.langFill}
                                            style={{ width: `${l.percent}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
