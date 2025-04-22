import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill, BsWhatsapp } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  const phone = import.meta.env.VITE_PHONE;

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hola 👋 Soy la Abogada</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Evelyn Shifman",
                  "Abogada especializada en derecho civil",
                  "Experta en asesoría legal y litigación",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href={`https://api.whatsapp.com/send?phone=${phone}`}
              rel="noreferrer"
              target="_blank"
            >
              Contactame
              <span>
                {" "}
                <BsWhatsapp />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
