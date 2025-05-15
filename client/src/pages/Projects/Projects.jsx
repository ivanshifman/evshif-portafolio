import "./Projects.css";
import imageProject1 from "../../assets/proyecto-1.webp";
import imageProject2 from "../../assets/proyecto-2.webp";
import imageProject3 from "../../assets/proyecto-3.webp";

const Projects = () => {
  return (
    <>
      <div className="container project ms-md-3" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROYECTOS DESTACADOS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          A lo largo de mi carrera, he participado en diversos proyectos legales
          que reflejan mi compromiso con la excelencia y la ética profesional. A
          continuación, algunos de los más destacados:
        </p>
        <div className="row" id="ads">
          <div className="col-lg-4 col-md-6 my-md-5">
            <div className="card rounded">
              <div className="card-image rounded-5">
                <span className="card-notify-badge">Consultoría Legal</span>
                <img src={imageProject1} alt="Asesoría en Contratos Internacionales" loading="lazy"/>
              </div>
              <div className="card-image-overly m-auto mt-3 d-flex align-content-center">
                <span className="card-detail-badge">Derecho Laboral</span>
                <span className="card-detail-badge">Derecho Civil</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Asesoría en Contratos Internacionales
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://www.linkedin.com/in/evelyn-shifman-a05921276/?originalSubdomain=ar"
                  target="_blank"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-md-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Litigios</span>
                <img src={imageProject2} alt="Representación en Juicios de Sucesión" loading="lazy"/>
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Derecho de Familia</span>
                <span className="card-detail-badge">Sucesiones</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Representación en Juicios de Sucesión
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://www.linkedin.com/in/evelyn-shifman-a05921276/?originalSubdomain=ar"
                  target="_blank"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-md-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Asesoría Corporativa</span>
                <img src={imageProject3} alt="Negociación de Contratos para Empresas" loading="lazy" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Contratos Comerciales</span>
                <span className="card-detail-badge">Derecho Empresarial</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Negociación de Contratos para Empresas
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://www.linkedin.com/in/evelyn-shifman-a05921276/?originalSubdomain=ar"
                  target="_blank"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
