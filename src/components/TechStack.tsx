"use client";

import { useEffect, useRef } from "react";
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
    const wrapperRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLSpanElement | null)[]>([]);

    // Detect which marquee item is closest to the center and highlight it
    useEffect(() => {
        let rafId: number;

        const updateCenter = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) {
                rafId = requestAnimationFrame(updateCenter);
                return;
            }

            const wrapperRect = wrapper.getBoundingClientRect();
            const centerX = wrapperRect.left + wrapperRect.width / 2;

            let closestIdx = -1;
            let closestDist = Infinity;

            itemsRef.current.forEach((el, i) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const itemCenterX = rect.left + rect.width / 2;
                const dist = Math.abs(itemCenterX - centerX);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestIdx = i;
                }
            });

            itemsRef.current.forEach((el, i) => {
                if (!el) return;
                if (i === closestIdx) {
                    el.classList.add(styles.marqueeActive);
                } else {
                    el.classList.remove(styles.marqueeActive);
                }
            });

            rafId = requestAnimationFrame(updateCenter);
        };

        rafId = requestAnimationFrame(updateCenter);
        return () => cancelAnimationFrame(rafId);
    }, []);

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
                <div className={`${styles.marqueeWrapper} reveal reveal-delay-1`} ref={wrapperRef}>
                    <div className={styles.marquee}>
                        {[...techs, ...techs].map((tech, i) => (
                            <span
                                key={`${tech.name}-${i}`}
                                className={styles.marqueeItem}
                                ref={(el) => {
                                    itemsRef.current[i] = el;
                                }}
                            >
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
