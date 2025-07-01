import { Project } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
            />
            {project.featured && (
              <Badge className="absolute top-2 right-2" variant="default">
                Featured
              </Badge>
            )}
          </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-6">
        <h3 className="text-lg font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {project.longDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}