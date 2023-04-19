import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";

function Projects() {
  return (
    <section className="projects">
      <Project1 id="project1" />
      <Project3 />
      <Project2 id="project2" />
      <Project4 />
      <Project5 />
    </section>
  );
}

export default Projects;
