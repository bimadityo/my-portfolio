import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export const metadata = {
  title: "Projects - Bima Adityo Kurniawan",
  description: "Featured projects and work portfolio of Bima Adityo Kurniawan"
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}