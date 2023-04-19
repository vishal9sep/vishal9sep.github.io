import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import LightWave from "../Waves/LightWave";

function Project2() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/OverStock.png"
          alt="Health Fusion Project Add Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">OverStock Clone</h3>
          <p className="project__description project__body">
            OverStock is a American E-Commerce platform. OverStock provides you
            with many varieties of furniture and household items and allows our
            end users to choose and purchase any product which is listed on the
            website.
            built by a team of 5, executed in 5 days.
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · CSS · HTML
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/vishal9sep/OverStock-Clone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://jade-sopapillas-ac0a87.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
