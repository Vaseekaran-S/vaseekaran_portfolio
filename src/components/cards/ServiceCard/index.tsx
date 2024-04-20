
interface ServiceCardDetails {
    title: string,
    description: string,
    techStack: string
}

export default function ServiceCard({ title, description, techStack }: ServiceCardDetails) {
  return (
    <div className="border rounded-lg p-6">
        <h5 className="text-2xl font-bold">{title}</h5>
        <p className="py-3 text-md">{description}</p>
        <span className="text-sm">
            {techStack}
        </span>
    </div>
  )
}

