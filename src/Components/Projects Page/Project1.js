import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";
import "./ProjectLight.css";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        {isDesktopOrLaptop ? (
          <>
            <img
              className="project__image"
              src="/images/QuesTyme.png"
              alt="QuesTyme"
              width="50%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <>
            <img
              className="project__image"
              src="/images/QuesTyme.png"
              alt="QuesTyme"
              width="50%"
              height="auto"
              loading="lazy"
            />
          </>
        )}

        {isDesktopOrLaptop ? (
          <>
            <div data-aos="fade-left" className="project__right">
              <h3 className="project__title">QuesTyme</h3>
              <p className="project__description project__body">
                It is a Interview Scheduling Application that allows individuals
                and teams to schedule meetings and appointments with ease. Here
                users can create personalized booking links that they can share
                with their clients, colleagues, or anyone else they need to
                schedule meetings with. It also offers features such as time
                zone detection, buffer times, and custom reminders to ensure
                meetings run smoothly. It can be used by professionals in
                various fields such as education, healthcare, sales, and more.
              </p>
              <p className="project__tech project__body">
                &gt; Java · SpringBoot · Hibernate · Spring Data JPA · MySQL ·
                Maven · Swagger UI
              </p>
              <a
                className="project__sourceCode"
                href="https://github.com/vishal9sep/Interview-Scheduling-System"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="=Website GitHub Repository"
              >
                <FaGithub className="project__githubLogo" size={25} />
                <h3 className="project__sourceCodeText">Source Code</h3>
              </a>
              <a
                className="project__sourceCode"
                href="https://ques-tymes.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="=Website GitHub Repository"
              >
                <h3 className="project__sourceCodeText">Live Demo</h3>
              </a>
            </div>
          </>
        ) : (
          <>
            <div data-aos="fade-left" className="project__right">
              <h4 className="project__title" /* style={{fontSize:"30px"}} */>
                QuesTyme
              </h4>
              <p className="project__description project__body">
                It is a Interview Scheduling Application that allows individuals
                and teams to schedule meetings and appointments with ease. Here
                users can create personalized booking links that they can share.
              </p>
              <p className="project__tech project__body">
                &gt; Java · SpringBoot · Hibernate · Spring Data JPA · MySQL ·
                Maven · Swagger UI
              </p>
              <a
                className="project__sourceCode"
                href="https://github.com/vishal9sep/Interview-Scheduling-System"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="=Website GitHub Repository"
              >
                {/* <FaGithub className="project__githubLogo" size={25} />
                <h3 className="project__sourceCodeText">Source Code</h3> */}
              </a>
              <a
                className="project__sourceCode"
                href="https://ques-tymes.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="=Website GitHub Repository"
              >
                <h3 className="project__sourceCodeText">Live Demo</h3>
              </a>
            </div>
          </>
        )}
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
