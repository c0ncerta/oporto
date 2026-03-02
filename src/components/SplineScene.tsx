"use client";

export default function SplineScene({ scene }: { scene: string }) {
    return (
        <iframe
            src={scene}
            width="100%"
            height="100%"
            style={{ border: "none", display: "block" }}
            loading="lazy"
            title="3D Scene"
        />
    );
}
