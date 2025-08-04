"use client"

import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

interface ClientProject {
  client: string
  achievements: {
    icon: React.ReactNode
    metric: string
    description: string
  }[]
  technologies: string[]
}

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  website?: string
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Tata Consultancy Services (TCS)",
    position: "Frontend Developer",
    duration: "Feb 2022 - Present",
    location: "Bengaluru, India",
    description: [
      "Developed modular frontend components using React.js to support internal enterprise dashboards for GE Healthcare",
      "Reduced system downtime by 20% through real-time monitoring UI and improved frontend error handling",
      "Achieved 99.9% platform uptime by collaborating with backend and infrastructure teams",
      "Led end-user training sessions, boosting user satisfaction scores by 25%",
      "Built responsive UIs for financial dashboards and portals for HDFC Ltd. using React.js, HTML5, and CSS3",
      "Improved UI bug reports by 30% through cross-browser testing and mobile optimization",
      "Delivered 5+ production features in collaboration with cross-functional teams",
      "Conducted code reviews and integrated ESLint and Prettier for team-wide code consistency",
    ],
    technologies: ["React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    website: "https://tcs.com",
  },
]

const clientProjects: ClientProject[] = [
  {
    client: "GE Healthcare",
    achievements: [
      {
        icon: <Clock className="w-5 h-5" />,
        metric: "20% Reduction",
        description: "System downtime through real-time monitoring UI",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        metric: "99.9% Uptime",
        description: "Platform availability achieved",
      },
      {
        icon: <Users className="w-5 h-5" />,
        metric: "25% Increase",
        description: "User satisfaction scores through training",
      },
    ],
    technologies: ["React.js", "Redux", "JavaScript", "Real-time Monitoring"],
  },
  {
    client: "HDFC Ltd.",
    achievements: [
      {
        icon: <TrendingUp className="w-5 h-5" />,
        metric: "30% Improvement",
        description: "UI bug reports through testing optimization",
      },
      {
        icon: <Award className="w-5 h-5" />,
        metric: "5+ Features",
        description: "Production features delivered successfully",
      },
      {
        icon: <Users className="w-5 h-5" />,
        metric: "Cross-functional",
        description: "Team collaboration and code reviews",
      },
    ],
    technologies: ["React.js", "HTML5", "CSS3", "Responsive Design", "Cross-browser Testing"],
  },
]


export function Experience() {
  return (
    <>
    <section className="py-20 px-4 bg-black relative overflow-hidden" id='experience'>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through my professional career, building innovative solutions and leading development teams.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 font-medium">
                          <span>{exp.company}</span>
                          {exp.website && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto"
                              asChild
                            >
                              <a href={exp.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-2">
                          <span className=" mt-2 w-1 h-1 rounded-full bg-white flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-500/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
     {/* {here are the client highlights} */}
    <section className=" px-4 bg-black pb-16">
      <div className="max-w-6xl mx-auto bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]">

        <div className="grid md:grid-cols-2 gap-8">
          {clientProjects.map((project, index) => (
            <Card
              key={index}
              className="transition-all duration-300 "
            >
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-6">{project.client}</h4>

                <div className="space-y-4 mb-6">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-white mt-1">{achievement.icon}</div>
                      <div>
                        <div className="font-semibold text-gray-300 text-md">{achievement.metric}</div>
                        <div className="text-sm text-gray-600">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-500/10 text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
