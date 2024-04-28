
interface CardProps {
    skill: string,
    level: string,
    from: string,
    category: string
}

function SkillCard({ skill, level, from, category }: CardProps) {
  return (
    <div className="bg-white group text-black p-3 rounded-lg cursor-pointer">
        <div className="font-bold flex justify-between">
            <h2 className="text-xl transform duration-500 group-hover:bg-green-400 px-2 rounded">{skill}</h2>
            <span className="text-md">{level}</span>
        </div>
        <p className="px-2">{category}</p>
    </div>
  )
}

export default SkillCard