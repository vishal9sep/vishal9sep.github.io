import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./Skills.css";
import "aos/dist/aos.css";
import DarkWave from "../Waves/DarkWave";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills" border="2px solid white" className="skills">
      <div data-aos="fade-right" className="skills__text">
        <h2 className="skills__heading" id="skill">
          My Skills
        </h2>

        <div className="techstackMarginBox">
          <a href="https://www.java.com/">
            <img
              className="techstackMargin"
              src="images/java.svg"
              alt="Brand Logo"
              width="110"
              height="110"
            />
          </a>

          <a href="https://www.javascript.com/">
            {" "}
            <img
              className="techstackMargin"
              src="images/javascript.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://hibernate.org/">
            {" "}
            <img
              className="techstackMargin"
              src="images/hibernate.gif"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://spring.io/">
            <img
              className="techstackMargin"
              src="images/springboot.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://www.mysql.com/">
            <img
              className="techstackMargin"
              src="images/mysql.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://www.w3.org/Style/CSS/Overview.en.html">
            <img
              className="techstackMargin"
              src="images/html5.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a>
            <img
              className="techstackMargin"
              src="images/css3.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://www.postman.com">
            <img
              className="techstackMargin"
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://git-scm.com/">
            <img
              className="techstackMargin"
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://aws.com/">
            <img
              className="techstackMargin"
              src="images/aws.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://git-scm.com/">
            <img
              className="techstackMargin"
              src="https://img.icons8.com/color/256/java-web-token.png"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://github.com/">
            <img
              className="techstackMargin"
              src="images\github3.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://git-scm.com/">
            <img
              className="techstackMargin"
              src="https://chandanachaitanya.github.io/Images/skills/maven.png"
              alt="Brand Logo"
              margin-top="10px"
              width="120"
              height="50"
            />
          </a>

          <a href="https://git-scm.com/">
            <img
              className="techstackMargin"
              src="https://chandanachaitanya.github.io/Images/skills/rest.png"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>
        </div>

        {/* New Line */}

        {/* <div className="techstackMarginBox">

          <a href="https://www.javascript.com/">
            {" "}
            <img
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://hibernate.org/">
            {" "}
            <img
              className="techstackMargin"
              src="https://design.jboss.org/hibernate/logo/final/hibernate_logo_whitebkg_stacked_256px.gif"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://spring.io/">
            <img
              className="techstackMargin"
              src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>

          <a href="https://www.mysql.com/">
            <img
              className="techstackMargin"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="Brand Logo"
              width="100"
              height="100"
            />
          </a>
         
        </div> */}
      </div>

      <LightWave></LightWave>
    </section>
  );
}

export default Skills;
