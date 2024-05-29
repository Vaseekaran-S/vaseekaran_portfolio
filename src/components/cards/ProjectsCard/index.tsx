import { Link } from "react-router-dom"

import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
import BusinessIcon from '@mui/icons-material/Business';

interface ProjectCardDetails {
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
    orgLink: string
}

export default function ProjectCard({ title, link, url, category, github, techStack, image, orgLink }: ProjectCardDetails) {
    return (
        <div className="group border rounded-lg p-6 hover:shadow-md hover:shadow-white">
            <div className="overflow-hidden h-[200px]">
                <img src={image} alt={title} className="rounded-lg mb-2 w-full h-full object-contain duration-300 group-hover:scale-110 cursor-pointer" />
            </div>
            <h5 className="text-2xl mt-3 font-bold cursor-pointer tranform duration-300 group-hover:underline">
                <Link to={`/projects/${url}`}>{title}</Link>
            </h5>
            <p className="pb-2 text-sm">{category}</p>
            <span className="text-sm">
                {techStack.join(" | ")}
            </span>
            <div className="mt-3 flex justify-between gap-3">
                <div className="flex gap-3">
                    { link && <Link to={link} target="_blank"><LanguageIcon /></Link> }
                    { github && <Link to={github} target="_blank"><GitHubIcon /></Link> }
                    { orgLink && <Link to={orgLink} target="_blank"><BusinessIcon /></Link> }
                </div>
                <Link to={`/projects/${url}`} className="font-bold hover:underline">View <span className="hidden group-hover:inline"><EastIcon/></span></Link>
            </div>
        </div>
    )
}