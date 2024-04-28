import { Link } from "react-router-dom"

interface ServiceCardDetails {
  title: string,
  description: string,
  techStack: string
}

export default function ServiceCard({ title, description, techStack }: ServiceCardDetails) {
  return (
    <div className="group border rounded-lg p-6 shadow-md hover:shadow-white">
      <h5 className="text-2xl font-bold group-hover:text-green-400">{title}</h5>
      <p className="py-3 text-md">{description}</p>
      <span className="text-sm">
        {techStack}
      </span>
      <div className="group-hover:block mt-3">
        <a href="/#contact" className="group-hover:underline">
          Create a Project 
        </a>
      </div>
    </div>
  )
}

