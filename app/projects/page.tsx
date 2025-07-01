import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export const metadata = {
  title: "Projects - Bima Adityo Kurniawan",
  description: "Featured projects and work portfolio of Bima Adityo Kurniawan"
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl max-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}