import { WorkExperience } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface ExperienceCardProps {
  experience: WorkExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={`${experience.company} logo`}
            width={48}
            height={48}
            className="rounded-lg border"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">
              {experience.position}
            </h3>
            <p className="text-primary font-medium">
              {experience.company}
            </p>
            <p className="text-sm text-muted-foreground">
              {experience.duration}
            </p>
            <p className="text-sm text-muted-foreground">
              {experience.location}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}