import { Horizontal } from "../showcase-1/showcaseOneStyledElements";
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsSection,
  OurProjects,
  CardProject,
  ProjectTitle,
  Button,
} from "./projectsStyledElements";
import { ProjectsData } from "./projectsData";

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <ProjectsContent>
          <h3>Current Projects</h3>
          <Horizontal />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam
            explicabo inventore excepturi laborum ratione magni facilis in
            suscipit rerum?
          </p>
          <OurProjects>
            {ProjectsData.map((elem) => {
              return (
                <CardProject key={elem.id}>
                  <img src={elem.image} alt="eco-world" />
                  <ProjectTitle>
                    <p>{elem.title}</p>
                  </ProjectTitle>
                </CardProject>
              );
            })}
          </OurProjects>
          <Button>Become a Volunteer</Button>
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
