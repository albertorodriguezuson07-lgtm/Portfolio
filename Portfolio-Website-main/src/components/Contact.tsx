import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>¿Hablamos de rentabilidad?</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:alberto.ru7713@gmail.com" data-cursor="disable">
                alberto.ru7713@gmail.com
              </a>
            </p>
            <h4>Ubicación</h4>
            <p>Murcia, España</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/alberto-rodr%C3%ADguez-us%C3%B3n-244906396/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Si buscas un perfil con mentalidad de negocio, <br /> capacidad técnica y que entienda que el marketing <br /> debe traducirse en <span>ventas y procesos eficientes</span>, conectemos.
            </h2>
            <h5>
              <MdCopyright /> 2025 Alberto Rodríguez Usón
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
