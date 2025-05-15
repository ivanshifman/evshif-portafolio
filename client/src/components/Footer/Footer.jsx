import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mb-0">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-initials">E S</h1>
          <p className="footer-title">
            A B O G A D A &nbsp; -<br />C A B A
          </p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-right">
          <h5 className="footer-name">Dra. Evelyn Shifman</h5>
          <p className="footer-info">
            <em>laboral - Civil - Contratos -</em>
          </p>
          <p className="footer-info">
            <em>Sucesiones - Familia - Divorcio -</em>
          </p>
          <p className="footer-info">
            <em>Alimentos</em>
          </p>
          <p className="footer-contact">11-6893-2090</p>
          <p className="footer-contact">evelynshifman@gmail.com</p>
          <p className="footer-contact">@abogadafamilialaboralcivil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
