import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import { useMediaQuery } from "react-responsive";
import "./ProjectLight.css";

function Project2({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/cabBook.png"
          alt="Health Fusion Project Add Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop ? (
          <>
            <div data-aos="fade-left" className="project__right">
              <h3 className="project__title">
                REST API for Online Cab Booking App
              </h3>
              <p className="project__description project__body">
                We have create a REST API for online Cab Booking Application
                which can be used by Customers to login into their profile
                update their information and book cabs, by a driver to login and
                update their details along with their cab details and accept a
                ride from the customer.update their information. All this is
                over looked by the admin who can also login and update their
                information as well as access the data in the application. We
                have implemented data and user validation at every step, for
                every user.A collaborative project built by a team of 5,
                executed in 5 days.
              </p>
              <p className="project__tech project__body">
                &gt; Java · SpringBoot · Hibernate · Spring Data JPA · MySQL ·
                Maven · Swagger UI
              </p>
              <a
                className="project__sourceCode"
                href="https://github.com/Oneza786/Online-Cab-Booking-App"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="=Website GitHub Repository"
              >
                <FaGithub className="project__githubLogo" size={25} />
                <h3 className="project__sourceCodeText">Source Code</h3>
              </a>
              <a
                className="project__sourceCode"
                href="https://drive.google.com/file/d/1D92ANaARxTXCV1kUitWLkia2ppxIv8L9/view?usp=sharing"
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
              <h3 className="project__title">
                REST API for Online Cab Booking App
              </h3>
              <p className="project__description project__body">
                We have create a REST API for online Cab Booking Application
                which can be used by Customers to login into their profile
                update their information and book cabs, by a driver to login and
                update their details along with their cab details and accept a
                ride from the customer.update their information.
              </p>
              <p className="project__tech project__body">
                &gt; Java · SpringBoot · Hibernate · Spring Data JPA · MySQL ·
                Maven · Swagger UI
              </p>
              <a
                className="project__sourceCode"
                href="https://github.com/Oneza786/Online-Cab-Booking-App"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="=Website GitHub Repository"
              >
                <FaGithub className="project__githubLogo" size={25} />
                <h3 className="project__sourceCodeText">Source Code</h3>
              </a>
              <a
                className="project__sourceCode"
                href="https://drive.google.com/file/d/1D92ANaAR xTXCV1kUitWLkia2ppxIv8L9/view?usp=sharing"
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

export default Project2;
