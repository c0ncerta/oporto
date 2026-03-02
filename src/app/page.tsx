"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ram Daod",
    jobTitle: "Full-Stack Developer",
    email: "mailto:rmdaod@proton.me",
    sameAs: [
      "https://github.com/c0ncerta",
      "https://www.linkedin.com/in/ram-daod/",
    ],
    knowsLanguage: ["ar", "es", "ca", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Timeline />
        <About />
      </main>
      <Footer />
    </>
  );
}
