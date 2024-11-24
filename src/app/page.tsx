"use client";

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const VisualizarCertificado = (nombre_archivo: string) => {
    window.open(`/certificates/${nombre_archivo}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Curriculum Vitae - Víctor Díaz</title>
        <meta name="description" content="Curriculum Vitae de Víctor Díaz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Curriculum Vitae</h1>
        <section className={styles.section}>
          <h2>Información Personal</h2>
          <p><strong>Nombre:</strong> Víctor Díaz</p>
          <p><strong>Dirección:</strong> Las Teodokildas, Av. Caracas, Ciudad Guayana</p>
          <p><strong>Teléfono:</strong> (0412) 180-8884</p>
          <p><strong>Email:</strong> arteagaj124@gmail.com</p>
          <p>Soy una persona diligente y comprometida...</p>
        </section>

        <section className={styles.section}>
          <h2>Prácticas</h2>
          <p><strong>Servicio Comunitario:</strong> Universidad Nacional Experimental de Guayana</p>
          <p>Desarrollo integral de una aplicación web...</p>
        </section>

        <section className={styles.section}>
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li>C/C++</li>
            <li>Python</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Visual Code</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Idiomas</h2>
          <p>Español: Nativo</p>
          <p>Inglés: Básico</p>
        </section>

        <section className={styles.section}>
          <h2>Certificados</h2>
          <button className={styles.button} onClick={() => VisualizarCertificado("certificado_1.pdf")}>
            Certificado de Introducción al Desarrollo Web
          </button>

          
          <button className={styles.button} onClick={() => VisualizarCertificado("certificado_2.pdf")}>
            Introducción al UX/UI sin ser diseñador
          </button>
          
          <button className={styles.button} onClick={() => VisualizarCertificado("certificado_3.pdf")}>
            UX/UI En la era remota: Estrategias para un diseño efectivo
          </button>

          <button className={styles.button} onClick={() => VisualizarCertificado("certificado_4.pdf")}>
            Bases de GIT, GITHUB
          </button>

          <button className={styles.button} onClick={() => VisualizarCertificado("certificado_5.pdf")}>
            Evoluciona en diseño: Técnicas esenciales de Design System UX UI
          </button>
          
          <button className={styles.button} onClick={() => VisualizarCertificado("certificado_6.pdf")}>
            Taller de Figma
          </button>
          
        </section>
      </main>
    </div>
  );
}
