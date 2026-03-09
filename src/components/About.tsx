import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Combino marketing, tecnología e inteligencia artificial para optimizar
          e-commerce, mejorar la conversión y construir sistemas de crecimiento
          rentables y escalables. No me limito a ejecutar campañas; diseño la
          arquitectura para que tu negocio crezca en automático.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          Un perfil híbrido entre Marketing, Negocio y Tecnología. Soy estudiante
          de Marketing y Dirección Comercial, pero mi enfoque va mucho más allá
          de la teoría. Me especializo en crecimiento digital, e-commerce y
          automatización. Mi valor radica en combinar áreas que tradicionalmente
          operan en silos: entiendo el rendimiento publicitario, detecto fricciones
          en la experiencia de usuario (CRO) y utilizo IA para automatizar las
          soluciones.
        </p>
      </div>
    </div>
  );
};

export default About;
