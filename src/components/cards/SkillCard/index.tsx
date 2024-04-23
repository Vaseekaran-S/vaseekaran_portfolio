
interface CardProps {
    skill: string,
    level: string,
    from: string,
    category: string
}

function SkillCard({ skill, level, from, category }: CardProps) {
  return (
    <div className="bg-white text-black p-4 rounded-lg">
        <div className="font-bold flex justify-between">
            <h2 className="text-xl">{skill}</h2>
            <span className="text-md">{from}</span>
        </div>
        <p>Level: {level}</p>
    </div>
  )
}

export default SkillCard