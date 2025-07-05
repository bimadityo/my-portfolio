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
    title: "EnergyMate",
    description: "AI-powered energy assistant with personalized recommendations",
    longDescription:
      "A time-series machine learning platform that predicts household electricity usage and provides optimization recommendations. Processes 2M+ data rows with 4 years of historical time-series data, achieving <0.01 MAE & RMSE for accurate 24/7 predictions. Helps users optimize their electrical efficiency through AI-powered insights",
    technologies: ["React", "ShadCN UI", "Flask", "Google Vertex AI"],
    githubUrl: "https://github.com/bagusangkasawan/CapstoneProjectLaskarAI",
    liveUrl: "https://energymate.netlify.app",
    image: "/energymate.png",
  },
  {
    id: "2",
    title: "Counter Begal",
    description: "Community-based crime reporting platform with interactive mapping",
    longDescription:
      "A web-based interactive map application that enables citizens to report and visualize motorcycle theft (begal) incidents in real-time. Features include crowd-sourced crime reporting with detailed incident data (reporter information, location, description, and photos), interactive heatmaps of high-risk areas, and community alert systems to enhance public safety awareness.",
    technologies: ["Vanilla Javascript", "MapLibre", "Express.js", "MongoDB", "Amazon AWS"],
    githubUrl: "https://github.com/bimadityo/counter-begal",
    liveUrl: "https://counter-begal.netlify.app",
    image: "/counter-begal.png",
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