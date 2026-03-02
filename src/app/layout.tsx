import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ram Daod — Full-Stack Developer",
    template: "%s | Ram Daod",
  },
  description:
    "Portfolio de Ram Daod. Desarrollador Full-Stack con foco frontend en React/Next.js y backend con Node.js. Barcelona.",
  keywords: [
    "Ram Daod",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Barcelona",
    "TypeScript",
  ],
  authors: [{ name: "Ram Daod" }],
  creator: "Ram Daod",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "Ram Daod — Full-Stack Developer",
    description:
      "Desarrollo web orientado a producto: interfaces claras, rendimiento y soluciones funcionales.",
    siteName: "Ram Daod Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Daod — Full-Stack Developer",
    description:
      "Portfolio con proyectos, stack y contacto para oportunidades de desarrollo web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
