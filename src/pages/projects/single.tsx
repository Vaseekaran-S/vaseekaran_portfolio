import { Link, useParams } from "react-router-dom";

import FadeEffects from "../../components/animations/FadeEffects"

import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

import { getProject } from "../../utils/api/projects"
import { useEffect, useState } from "react";

interface ProjectDetails {
  url: string,
  title: string,
  category: string,
  status: string,
  link: string,
  github: string,
  description: string,
  role: string,
  techStack: Array<string>,
  year: number,
  image: string,
  order: number,
  type: string,
  org: string,
  orgLink: string
}

function ProjectSingle() {

  const { id } = useParams()
  const [projectData, setProjectData] = useState<ProjectDetails>({
    url: "", title: "", category: "", status: "", link: "", github: "", description: "", role: "", techStack: [], year: 0, image: "", order: 0, type: "", org: "", orgLink: ""
  })
  useEffect(() => {
    setProjectData(getProject(id))
  }, [id])

  const { image, title, category, status, link, github, description, techStack, year, type, org, orgLink } = projectData

  return (
    <div>
      <section className='py-10'>
        <div className="grid grid-cols-12 lg:min-h-[100vh] lg:items-center gap-5">
          <div className="col-span-12 lg:col-span-5">
            <FadeEffects direction='leftToRight'>
              <div className="flex-center flex-col h-full w-full">
                <img src={image} alt="img" className="max-w-[300px] max-h-[400px] rounded mb-3" />
                <p className="hidden lg:block">
                  {title}
                </p>
              </div>
            </FadeEffects>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <FadeEffects direction='rightToLeft'>
              <div className='text-center lg:text-start'>
                <h2 className="text-4xl text-center lg:text-start font-bold">
                  {title} <Link to={link} target="_blank"><LaunchIcon className="hover:scale-125"/></Link>
                </h2>
                <h6>{category}</h6>
                <p className="mt-5">{description}</p>
                <span className="mt-4 inline-block px-2 py-1 border font-bold">{techStack.join(" | ")}</span>
                <p className="mt-3">Started: <span className="font-bold">{year}</span></p>
                <p>Status: <span className="font-bold">{status}</span></p>
                <p>Type: <span className="font-bold">{type} Project</span></p>
                <p className={org || 'hidden'}>Org: <Link to={orgLink} className="font-bold">{org}</Link></p>
                <div className='gap-3 mt-4 flex-center lg:justify-start'>
                  <Link to={link} target="_blank"><LanguageIcon /></Link>
                  <Link to={github} target="_blank"><GitHubIcon /></Link>
                </div>
              </div>
            </FadeEffects>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectSingle
