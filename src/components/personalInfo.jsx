// components/PersonalInfo.jsx
import Section from "./section";

export default function PersonalInfo() {
  return (
    <Section
      id="personal-info"
      title="Información Personal"
      description="Aquí puedes encontrar información personal sobre mí."
    >
      <ul className="text-gray-700 space-y-2">
        <li><strong>Nombre:</strong> Victor Díaz</li>
        <li><strong>Email:</strong> victordiaz@example.com</li>
        <li><strong>Teléfono:</strong> +123 456 789</li>
        <li><strong>Ubicación:</strong> Ciudad, País</li>
      </ul>
    </Section>
  );
}
