"use client";

import styles from "./TechStack.module.css";

type TechItem = {
    name: string;
    category: "language" | "framework" | "tool" | "database";
};

const techs: TechItem[] = [
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "HTML", category: "language" },
    { name: "CSS", category: "language" },
    { name: "Python", category: "language" },
    { name: "PHP", category: "language" },
    { name: "C/C++", category: "language" },
    { name: "React", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: "Node.js", category: "framework" },
    { name: "Git", category: "tool" },
    { name: "Arduino", category: "tool" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
];

const categoryLabels: Record<TechItem["category"], string> = {
    language: "Lenguajes",
    framework: "Frameworks & Runtime",
    tool: "Herramientas",
    database: "Bases de datos",
};

const categoryOrder: TechItem["category"][] = [
    "language",
    "framework",
    "database",
    "tool",
];

export default function TechStack() {
    return (
        <section className={styles.section} id="stack">
            <div className={styles.container}>
                <div className={`${styles.header} reveal`}>
                    <span className={styles.sectionLabel}>S — 03</span>
                    <h2 className={styles.heading}>
                        <span className="gradient-text">Stack principal</span>
                    </h2>
                </div>

                {/* Marquee row - continuous scroll */}
                <div className={`${styles.marqueeWrapper} reveal reveal-delay-1`}>
                    <div className={styles.marquee}>
                        {[...techs, ...techs].map((tech, i) => (
                            <span key={`${tech.name}-${i}`} className={styles.marqueeItem}>
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Categorized grid */}
                <div className={styles.grid}>
                    {categoryOrder.map((cat, catIdx) => (
                        <div
                            key={cat}
                            className={`${styles.categoryBlock} reveal reveal-delay-${catIdx + 1}`}
                        >
                            <h3 className={styles.categoryLabel}>{categoryLabels[cat]}</h3>
                            <div className={styles.techList}>
                                {techs
                                    .filter((t) => t.category === cat)
                                    .map((tech) => (
                                        <div key={tech.name} className={styles.techCard}>
                                            <span className={styles.techDot} />
                                            <span className={styles.techName}>{tech.name}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
