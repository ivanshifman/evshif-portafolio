import { MdWorkOutline } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Experiencia Profesional
        </h2>
        <hr />
        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Feb. 2025 - Actualidad"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Consultora Legal
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Oficina de Transparencia y Control Externo Policial - GCBA
            </h4>
            <p>Asesoría jurídica especializada en asuntos institucionales.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Mar. 2023 - Feb. 2025"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">Legal Executive</h3>
            <h4 className="vertical-timeline-element-subtitle">
              NH Hotel Group - Madrid, España
            </h4>
            <p>
              Derecho societario y contractual. Redacción de actas, estatutos,
              poderes, contratos, asesoramiento interno y respuesta a
              requerimientos administrativos y laborales.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="May. 2022 - Mar. 2023"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">Abogada</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fenix Entertainment
            </h4>
            <p>
              Negociación y redacción de contratos comerciales, soporte legal
              interno, gestión de juicios, audiencias de conciliación y defensa
              del consumidor.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Feb. 2022 - Nov. 2022"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">Legales</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ministerio de Seguridad de la Nación
            </h4>
            <p>
              Práctica profesional en la Dirección Nacional de Estadísticas
              Criminales.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jul. 2020 - Jun. 2022"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">Paralegal</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Renault Group
            </h4>
            <p>
              Contratos, asesoramiento a concesionarios, contestación de
              reclamos y oficios, gestión documental jurídica.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Mar. 2017 - Jul. 2020"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">Paralegal</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Estudio Jurídico Roch
            </h4>
            <p>
              Tareas de apoyo legal en derecho civil y comercial, redacción de
              escritos judiciales y atención al cliente.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;
