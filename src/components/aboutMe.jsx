// components/AboutMe.jsx
import Section from "./section";

export default function AboutMe() {
  return (
    <Section
      id="about-me"
      title="Acerca de mí"
      description="Una breve introducción sobre quién soy y qué hago."
    >
      <p className="text-gray-700">
      Soy una persona diligente y comprometida, siempre cumplo con mis responsabilidades con precisión y puntualidad. Me apasiona desarrollar soluciones innovadoras en el ámbito de la informática, explorando ideas creativas para resolver problemas técnicos y cotidianos. Valoro el trabajo en equipo y encuentro inspiración al aprender de los demás y compartir conocimientos siempre que es posible.
      </p>
    </Section>
  );
}
