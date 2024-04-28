import Section from "../../components/Section"
import ProjectCard from "../../components/cards/ProjectsCard"
import projects from '../../data/projects.json'

function Projects() {
  return (
    <>
      <Section id='projects' title='My Projects' subTitle='Projects'>
        <div className="grid grid-cols-12 mt-10 gap-5 justify-center" >
          {projects.map((project) => (
            <div key={project.title} className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Projects
