import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";
import DarkWave from "../Waves/DarkWave";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div id="about_container">
        <section id="about" className="about">
          <div data-aos="fade-right" className="about__text">
            <h2 className="about__heading">About Me</h2>
            <br></br>
            <p className="about__body">
              Hello! My name is Vishal Singh and I am a Bootcamp graduate from
              Masai School, Bengaluru.I am a highly passionate Backend
              developer, who loves creating APIs and working with databases. I
              am also extremely interested in creating elegant solutions, more
              specifically on System Design and High performaning solutions.
            </p>
            <br />
            <p className="about__body">
              You can reach out to me on my{" "}
              <NavHashLink smooth to="#contact">
                contact
              </NavHashLink>{" "}
              page
            </p>
            <br></br>

            <div></div>
          </div>
          <img
            className="about__headshot"
            src="images/DD.png"
            alt="Brand Logo"
            width="300"
            height="300"
          />

          <DarkWave />
        </section>
      </div>
    </div>
  );
}

export default About;
