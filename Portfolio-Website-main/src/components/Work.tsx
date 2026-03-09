import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Caso de <span>Estudio</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>E-commerce B2B/B2C Ferretero</h4>
                  <p>Escalado & Automatización</p>
                </div>
              </div>
              <h4>Contexto</h4>
              <p>Empresa de distribución ferretera en Colombia. Sector tradicional con baja madurez digital.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Caso de estudio" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>+116% Ventas Totales</h4>
                  <p>Resultado clave</p>
                </div>
              </div>
              <h4>El Reto</h4>
              <p>Transformar el canal digital en una máquina de ventas eficiente, superando tecnológicamente a los competidores locales.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Ventas" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Asistente WhatsApp con IA</h4>
                  <p>Manychat + IA</p>
                </div>
              </div>
              <h4>Ejecución</h4>
              <p>Integración para calificar leads, responder dudas técnicas y cerrar ventas en el canal favorito de LATAM.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="WhatsApp IA" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Catálogo SEO & CRO</h4>
                  <p>Optimización masiva</p>
                </div>
              </div>
              <h4>Ejecución</h4>
              <p>Uso de IA para reestructurar, enriquecer y optimizar masivamente fichas de producto, eliminando fricción de compra.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="SEO CRO" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>-83% Devoluciones</h4>
                  <p>Impacto operativo</p>
                </div>
              </div>
              <h4>Resultado</h4>
              <p>Pre-calificación por IA y mejoras en información de producto hundieron las devoluciones un 83%.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Devoluciones" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>+178% Añadido al Carrito</h4>
                  <p>Métricas globales</p>
                </div>
              </div>
              <h4>Más resultados</h4>
              <p>+75% pedidos · +48% clientes habituales · +13% tasa de conversión global.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Métricas" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
