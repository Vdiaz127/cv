"use client";

import AboutMe from "../components/aboutMe";
import PersonalInfo from "../components/personalInfo";
import CertificatesCarousel from "../components/CertificatesCarousel";


export default function Home() {
  return (
    <main className="mt-16 px-4 md:px-8 lg:px-16">
      {/* Información Personal */}
      <section id="personal-info" className="mb-8">
        <PersonalInfo />
      </section>

      {/* Acerca de mí */}
      <section id="about-me" className="mb-8">
        <AboutMe />
      </section>

       {/* Certificados */}
       <section id="certificates" className="mb-8">
        <CertificatesCarousel
          certificates={[
            {
              title: "Introducción al Desarrollo Web",
              
              link: "/certificates/certificado_1.pdf",
            },
            {
              title: "UX 101: Introducción al UX/UI sin ser diseñador",
              
              link: "/certificates/certificado_2.pdf",
            },
            {
              title: "UX/UI En la era remota: Estrategias para un diseño efectivo",
              
              link: "/certificates/certificado_3.pdf",
            },
            {
              title: "Bases de GIT, GITHUB",
              
              link: "/certificates/certificado_4.pdf",
            },
            {
              title: "Evoluciona en diseño: Técnicas esenciales de Design System UX UI",
              
              link: "/certificates/certificado_5.pdf",
            },
            {
              title: "Taller - Figma",
              
              link: "/certificates/certificado_6.pdf",
            },
          ]}
        />
      </section>
    </main>
  );
}
