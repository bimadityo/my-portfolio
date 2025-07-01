import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Bima Adityo Kurniawan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer passionate about creating exceptional digital experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              React
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Next.js
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Express
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="mailto:bimaadityokurniawan@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I`m a passionate full stack developer with over 4 years of experience building scalable web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              When I`m not coding, you can find me exploring new technologies, contributing to open source projects, or
              sharing my knowledge through technical writing and mentoring.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Kota Bogor, Indonesia</span>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/bimadityo" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://linkedin.com/in/bimaadityokurniawan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Express", "MySQL", "PostgreSQL", "MongoDB"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Server & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "GCP", "Plesk", "Linux"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/experience" className="group">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">Work Experience</h3>
              <p className="text-muted-foreground text-sm">
                1+ years of professional development experience across various companies
              </p>
            </div>
          </Link>
          <Link href="/projects" className="group">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">Projects</h3>
              <p className="text-muted-foreground text-sm">
                Featured projects showcasing my technical skills and creativity
              </p>
            </div>
          </Link>
          <Link href="/certifications" className="group">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">Certifications</h3>
              <p className="text-muted-foreground text-sm">
                Professional certifications from AWS, Google Cloud, and Meta
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
