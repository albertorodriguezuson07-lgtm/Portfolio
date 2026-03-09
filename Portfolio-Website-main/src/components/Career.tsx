import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experiencia <span>&</span>
          <br /> formación
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Grado en Marketing y Dirección Comercial</h4>
                <h5>UCAM — Universidad Católica de Murcia</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Formación académica en marketing estratégico, comportamiento del
              consumidor, investigación de mercados y dirección comercial con
              enfoque digital.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Director / E-commerce Manager</h4>
                <h5>Almacenes HJ — Medellín, Colombia</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Liderazgo del canal digital de un distribuidor ferretero B2B/B2C.
              Gestión de Shopify, Google Ads, Meta Ads y automatización con IA.
              Resultados: +116% ventas, -83% devoluciones, +75% pedidos.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Especialización en IA & Automatización</h4>
                <h5>Autodidacta & Proyectos Reales</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Integración de IA (Claude, ChatGPT, Gemini) y plataformas de
              automatización (n8n, Make, Manychat) en flujos de negocio reales.
              Construcción de asistentes inteligentes, optimización de catálogos
              y sistemas de datos end-to-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
