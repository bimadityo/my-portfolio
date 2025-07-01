import ExperienceCard from "@/components/experience-card"
import { workExperiences } from "@/lib/data"

export const metadata = {
  title: "Work Experience - Bima Adityo Kurniawan",
  description: "Professional work experience and career journey of Bima Adityo Kurniawan"
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-muted-foreground">
            My professional journey and the companies I`ve had the privilege to work with
          </p>
        </div>

        <div className="space-y-6">
          {workExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  )
}