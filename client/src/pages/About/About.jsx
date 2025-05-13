import imageProfile from "../../assets/evelynfotolink.webp";
import "./About.css";

const About = () => {
  return (
    <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6 about-img">
              <img
                src={imageProfile}
                alt="profile_pic"
              />
            </div>
            <div className="col-12 col-xl-6 col-lg-6 mt-3 mt-lg-0 about-content">
              <h1>Sobre mí</h1>
              <p>
              Abogada especializada en derecho laboral, civil, contratos, sucesiones, familia, divorcios y alimentos. Cuento con amplia experiencia brindando asesoramiento legal personalizado, claro y eficaz. Mi compromiso es ofrecer soluciones justas y estratégicas a cada cliente, defendiendo sus derechos con responsabilidad y empatía. Trabajo con dedicación en cada etapa del proceso, desde la consulta inicial hasta la resolución del conflicto. Me caracteriza la cercanía, la atención a los detalles y el profesionalismo. Estoy aquí para ayudarte a tomar decisiones informadas y proteger tus intereses con firmeza y transparencia.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
