import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import Tools from './Tools'
import Learning from './Learning'
import Header from './Header'
const Skills = () => {
    const frontEnd =[
      {
        name: "React",
        percentage: 95,
        color: "bg-blue-600"
      },
      {
        name: "Next",
        percentage:50,
        color: "bg-green-600"
      },
      {
        name: "JavaScript",
        percentage: 90,
        color: "bg-yellow-500"
      },
      {
        name: "TypeScript",
        percentage: 70,
        color: "bg-blue-500"
      },
      {
        name: "CSS/Tailwind/Bootstrap",
        percentage: 92,
        color: "bg-purple-500"
      }
    
 ]
  const backend = [
      {
        name: "Node.js",
        percentage: 88,
        color: "bg-green-600"
      },
      {
        name: "Express.js",
        percentage: 90,
        color: "bg-gray-700"
      },
      {
        name: "PostgreSQL",
        percentage: 85,
        color: "bg-indigo-600"
      },
      {
        name: "MongoDB",
        percentage: 78,
        color: "bg-green-500"
      }
];

  return (
    <section id="skills" className=" pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 sora-family">Frontend Development</h3>
            {frontEnd.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 sora-family">Backend Development</h3>
            {backend.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
        <Tools />
        <Learning />
      </div>
    </section>
  )
}

const SkillBar = ({ name, percentage, color }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div ref={ref} className="space-y-6 inter-family">
      <div className="skill-item">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-gray-800">{name}</span>
          <span className="text-sm text-gray-600">
            {inView ? <CountUp end={percentage} duration={1.5} suffix="%" /> : '0%'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`${color} h-3 rounded-full transition-all duration-1000 ease-out`}
            style={{ width: inView ? `${percentage}%` : '0%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}



export default Skills
