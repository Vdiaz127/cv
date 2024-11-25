"use client";

import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const VisualizarCertificado = (nombre_archivo: string) => {
    window.open(`/certificates/${nombre_archivo}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Título con imagen de fondo */}
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Victor Diaz</h1>
          <h2 className={styles.subtitle}>Desarollador - Ingeniero en Informática</h2>
          <a href="https://github.com/Vdiaz127" target="_blank" className={styles.githubLink}>
            <Image src="/github-mark.svg" alt="GitHub" width={30} height={30} className={styles.githubIcon} />
          </a>
        </div>
        
        {/* Sección de Información Personal */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Información Personal</h2>
          <p><strong>Dirección:</strong> Core 8, Av. Caracas, Ciudad Guayana</p>
          <p><strong>Teléfono:</strong> (0412) 180-8884</p>
          <p><strong>Email:</strong> arteagaj124@gmail.com</p>
        </section>

        {/* Sección Acerca de mí */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Acerca de mi</h2>
          <p>Soy una persona diligente y comprometida, siempre cumplo con mis responsabilidades con precisión y puntualidad. Me apasiona desarrollar soluciones innovadoras en el ámbito de la informática, explorando ideas creativas para resolver problemas técnicos y cotidianos. Valoro el trabajo en equipo y encuentro inspiración al aprender de los demás y compartir conocimientos siempre que es posible.</p>
        </section>

        {/* Sección Prácticas */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Prácticas</h2>
          <p><i>Servicio Comunitario:</i> Universidad Nacional Experimental de Guayana</p>
          <p>Desarrollo integral de una aplicación web con Laravel 10 y PHP 8.1, utilizando PostgreSQL. Responsable del diseño del frontend, desarrollo de la base de datos, implementación de funciones del backend y coordinación de la reunión de requerimientos. El proyecto consiste en la creación y entrega de certificados de actividades para acreditar con código QR para la verificación, a los participantes en la Universidad Nacional Experimental de Guayana.</p>
        </section>

        {/* Sección Habilidades Técnicas */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
          <ul>
            <li>C/C++</li>
            <li>Python</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Visual Code</li>
          </ul>
        </section>

        {/* Sección Idiomas */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Idiomas</h2>
          <p>Español: Nativo</p>
          <p>Inglés: Básico</p>
        </section>

        {/* Sección de Certificados */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Certificados</h2>

  {/* Card para visualizar los certificados */}
  <div className={styles.cardContainer}>
    <div className={styles.card} onClick={() => VisualizarCertificado("certificado_1.pdf")}>
      <h3>Certificado de Introducción al Desarrollo Web</h3>
      <p>Haz clic para ver más detalles</p>
    </div>

    <div className={styles.card} onClick={() => VisualizarCertificado("certificado_2.pdf")}>
      <h3>Introducción al UX/UI sin ser diseñador</h3>
      <p>Haz clic para ver más detalles</p>
    </div>

    <div className={styles.card} onClick={() => VisualizarCertificado("certificado_3.pdf")}>
      <h3>UX/UI En la era remota: Estrategias para un diseño efectivo</h3>
      <p>Haz clic para ver más detalles</p>
    </div>

    <div className={styles.card} onClick={() => VisualizarCertificado("certificado_4.pdf")}>
      <h3>Bases de GIT, GITHUB</h3>
      <p>Haz clic para ver más detalles</p>
    </div>

    <div className={styles.card} onClick={() => VisualizarCertificado("certificado_5.pdf")}>
      <h3>Evoluciona en diseño: Técnicas esenciales de Design System UX UI</h3>
      <p>Haz clic para ver más detalles</p>
    </div>

    <div className={styles.card} onClick={() => VisualizarCertificado("certificado_6.pdf")}>
      <h3>Taller de Figma</h3>
      <p>Haz clic para ver más detalles</p>
    </div>
  </div>
</section>
      </main>
    </div>
  );
}
