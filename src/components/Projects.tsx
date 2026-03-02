"use client";

import styles from "./Projects.module.css";

type Project = {
    id: number;
    title: string;
    subtitle: string;
    stack: string[];
    problem: string;
    solution: string;
    impact: string;
    featured?: boolean;
    repoUrl?: string;
    repoLabel?: string;
    demoUrl?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Discord-like App",
        subtitle: "App tipo chat para comunidades con soporte y moderación.",
        stack: ["Node.js", "TypeScript", "WebSocket"],
        problem:
            "Soporte y gestión manuales consumían tiempo en comunidades activas.",
        solution:
            "Diseño de flujos de tickets y herramientas de moderación anti-spam con comandos de administración.",
        impact:
            "Menos trabajo manual del staff y trazabilidad de incidencias.",
        featured: true,
        repoLabel: "En progreso · Repo privado",
        demoUrl: "https://divilus-demo.vercel.app/",
    },
    {
        id: 2,
        title: "Bot de tickets y moderación",
        subtitle: "Automatización de soporte para servidores de comunidad.",
        stack: ["Node.js", "Discord.js"],
        problem: "Los canales se saturaban y era difícil priorizar incidencias.",
        solution:
            "Sistema de creación de tickets y comandos de control para spam, advertencias y acciones disciplinarias.",
        impact: "Flujo de soporte más claro y tiempos de respuesta más predecibles.",
        repoLabel: "Próximamente",
    },
    {
        id: 3,
        title: "Dotfiles & Dev Environment",
        subtitle: "Setup reproducible para desarrollo diario.",
        stack: ["Shell", "Git", "Zsh"],
        problem:
            "Configurar un entorno nuevo desde cero era lento e inconsistente.",
        solution:
            "Dotfiles versionados con aliases, scripts y defaults para shell/editor/git.",
        impact: "Onboarding técnico más rápido y flujo de trabajo más estable.",
        repoUrl: "https://github.com/c0ncerta/.dotfiles",
    },
];

export default function Projects() {
    return (
        <section className={styles.section} id="proyectos">
            <div className={styles.container}>
                {/* Section header */}
                <div className={`${styles.header} reveal`}>
                    <span className={styles.sectionLabel}>S — 02</span>
                    <h2 className={styles.heading}>
                        <span className="gradient-text">Proyectos</span>
                    </h2>
                    <p className={styles.description}>
                        Cada proyecto resume problema, implementación y resultado para que
                        se entienda rápido mi aporte técnico.
                    </p>
                </div>

                {/* Featured project */}
                {projects
                    .filter((p) => p.featured)
                    .map((project) => (
                        <article
                            key={project.id}
                            className={`${styles.featuredCard} reveal`}
                        >
                            <div className={styles.featuredBadge}>
                                <span className={styles.badgeDot} />
                                Proyecto destacado
                            </div>

                            <div className={styles.featuredContent}>
                                <div className={styles.featuredInfo}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectSub}>{project.subtitle}</p>

                                    <div className={styles.stackRow}>
                                        {project.stack.map((tech) => (
                                            <span key={tech} className={styles.stackPill}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <dl className={styles.detailsGrid}>
                                    <div className={styles.detailItem}>
                                        <dt className={styles.detailLabel}>Problema</dt>
                                        <dd className={styles.detailValue}>{project.problem}</dd>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <dt className={styles.detailLabel}>Implementación</dt>
                                        <dd className={styles.detailValue}>{project.solution}</dd>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <dt className={styles.detailLabel}>Resultado</dt>
                                        <dd className={styles.detailValue}>{project.impact}</dd>
                                    </div>
                                </dl>

                                <div className={styles.projectFooter}>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.demoLink}
                                            id={`demo-project-${project.id}`}
                                        >
                                            Ver demo en vivo →
                                        </a>
                                    )}
                                    {project.repoUrl ? (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.repoLink}
                                        >
                                            Ver repositorio →
                                        </a>
                                    ) : (
                                        <span className={styles.repoMuted}>
                                            {project.repoLabel}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}

                {/* Secondary projects grid */}
                <div className={styles.grid}>
                    {projects
                        .filter((p) => !p.featured)
                        .map((project, idx) => (
                            <article
                                key={project.id}
                                className={`${styles.card} reveal reveal-delay-${idx + 1}`}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardNumber}>
                                        0{project.id}
                                    </span>
                                    <div className={styles.stackRow}>
                                        {project.stack.map((tech) => (
                                            <span key={tech} className={styles.stackPill}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardSub}>{project.subtitle}</p>

                                <dl className={styles.cardDetails}>
                                    <div className={styles.detailItem}>
                                        <dt className={styles.detailLabel}>Problema</dt>
                                        <dd className={styles.detailValue}>{project.problem}</dd>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <dt className={styles.detailLabel}>Solución</dt>
                                        <dd className={styles.detailValue}>{project.solution}</dd>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <dt className={styles.detailLabel}>Resultado</dt>
                                        <dd className={styles.detailValue}>{project.impact}</dd>
                                    </div>
                                </dl>

                                <div className={styles.projectFooter}>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.demoLink}
                                            id={`demo-card-${project.id}`}
                                        >
                                            Ver demo →
                                        </a>
                                    )}
                                    {project.repoUrl ? (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.repoLink}
                                        >
                                            Repositorio →
                                        </a>
                                    ) : (
                                        <span className={styles.repoMuted}>
                                            {project.repoLabel}
                                        </span>
                                    )}
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    );
}
