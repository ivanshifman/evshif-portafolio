import MobileNav from "./components/MobileNav/MobileNav";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/about";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [theme] = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
         
            <h4 className="text-center">
              {currentYear} - Designed by Ivan Shifman
            </h4>
         
        </div>
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
