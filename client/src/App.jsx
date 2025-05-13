import MobileNav from "./components/MobileNav/MobileNav";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import { Helmet } from "react-helmet-async";
import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Abogada Evelyn Shifman | Derecho Civil y Asesoría Legal</title>
        <meta
          name="description"
          content="Página oficial de Evelyn Shifman, abogada especializada en derecho civil, asesoría legal y litigación en Argentina."
        />
        <meta
          name="keywords"
          content="abogada, derecho civil, asesoría legal, litigación, Evelyn Shifman, servicios legales, laboral, familia,violencia, divorcio, abogado, sucesiones, sucesion, paternidad, filiación, perjuicios, contrato, litigar, sociedades, societario, despidos, indemnización, alimentos, regimen de comunicación, argentina"
        />
        <meta name="author" content="Evelyn Shifman" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Buenos Aires" />
        <meta name="geo.position" content="-34.6037;-58.3816" />
        <meta name="ICBM" content="-34.6037, -58.3816" />
        {/* <link rel="canonical" href="https://evelynshifman.com" /> */}
        <meta property="og:title" content="Abogada Evelyn Shifman" />
        <meta
          property="og:description"
          content="Especialista en derecho civil y asesoría legal. Conocé más sobre los servicios legales que ofrece Evelyn Shifman."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.evelynshifman.com" />
        <meta
          property="og:image"
          content="https://www.evelynshifman.com/og-image.jpg"
        /> */}
      </Helmet>

      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <main className="container">
          <About />
          <Education />
          <Projects />
          <WorkExp />
          <Contact />
        </main>
        <footer className="footer pb-3 ms-3">
          <h4 className="text-center">
            © {currentYear} - Designed by Ivan Shifman
          </h4>
        </footer>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
