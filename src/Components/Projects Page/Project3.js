import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project3() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Masai Learning Management System
          </h3>
          <p className="project__description project__body">
            Students can signup to the site and login to the site and search for
            lectures and watch previous lectures and attend live lectures and
            submit assignments. And on admin side admins can login to the site
            and upload lectures and search for lectures copy lectures and edit
            lectures and delete lectures., executed in 6 hours.
          </p>
          <p className="project__tech project__body">
            &gt; Java · SpringBoot · MySQL · AWS
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/masai-builds/Team4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCodeDark"
            href="http://learning-management-system-masai.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/LMS.png"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project3;
