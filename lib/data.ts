import { Certification, Project, WorkExperience } from "./types";

export const workExperiences: WorkExperience[] = [
  {
    id: "1",
    company: "PT. Eksa Digital Agency",
    position: "Programmer Staff",
    duration: "April 2025 - Present",
    location: "Tegal, Indonesia",
    description: [
      "Test",
      "Test 2"
    ],
    technologies: ["React", "Express", "MySQL"],
    logo: "/logo-eda.png"
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "Jun 2020 - Dec 2021",
    location: "Remote",
    description: [
      "Built responsive web applications using React and Next.js",
      "Optimized application performance achieving 95+ Lighthouse scores",
      "Integrated third-party APIs and payment systems",
      "Participated in agile development processes",
    ],
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Stripe API"],
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    company: "Digital Agency Pro",
    position: "Junior Web Developer",
    duration: "Aug 2019 - May 2020",
    location: "New York, NY",
    description: [
      "Developed custom WordPress themes and plugins",
      "Created responsive websites for small to medium businesses",
      "Collaborated with designers to implement pixel-perfect designs",
      "Maintained and updated existing client websites",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "MySQL"],
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with admin dashboard",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, payment processing, inventory management, and an admin dashboard for order management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A modern task management application with real-time collaboration features, drag-and-drop functionality, team management, and progress tracking.",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    longDescription:
      "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps using various weather APIs.",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "March 2023",
    expiryDate: "March 2026",
    credentialId: "AWS-SAA-123456",
    verificationUrl: "https://aws.amazon.com/verification",
    description: "Validates expertise in designing distributed systems on AWS platform",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    issueDate: "January 2023",
    expiryDate: "January 2025",
    credentialId: "GCP-PD-789012",
    verificationUrl: "https://cloud.google.com/certification/verify",
    description: "Demonstrates ability to build scalable applications on Google Cloud Platform",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta (Facebook)",
    issueDate: "September 2022",
    credentialId: "META-FE-345678",
    verificationUrl: "https://coursera.org/verify",
    description: "Comprehensive program covering React, JavaScript, and modern frontend development",
    image: "/placeholder.svg?height=100&width=100",
  },
]