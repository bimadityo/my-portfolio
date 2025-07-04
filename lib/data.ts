import { Certification, Project, WorkExperience } from "./types";

export const workExperiences: WorkExperience[] = [
  {
    id: "1",
    company: "PT. Eksa Digital Agency",
    position: "Internal Programmer Staff",
    duration: "April 2025 - Present",
    location: "Tegal, Indonesia",
    description: [
      "Developed a responsive KPI dashboard with React, enabling real-time data visualization and improving decision-making for stakeholders",
      "Designed and implemented secure RESTful APIs to manage storage, retrieval, and encryption of sensitive company data, ensuring compliance with security policies",
      "Led a database migration project, optimizing MySQL schema design with improved normalization, indexing, and table relationships to enhance query performance",
      "Maintained comprehensive documentation for code changes, including detailed commit messages and pull request descriptions to improve team collaboration and knowledge sharing"
    ],
    technologies: ["React", "Express", "MySQL"],
    logo: "/logo-eda.png"
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