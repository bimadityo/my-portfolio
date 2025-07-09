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
    name: "Applied Machine Learning",
    issuer: "Dicoding Indonesia",
    issueDate: "May 2025",
    credentialId: "NVP75RN6VXR0",
    verificationUrl: "https://www.dicoding.com/certificates/NVP75RN6VXR0",
    description: "Developed practical skills in implementing machine learning models for real-world problem-solving.",
    image: "/certificates/dicoding-applied-machine-learning.jpg"
  },
  {
    id: "2",
    name: "Front-End Web & Back-End Developer Bootcamp - Distinction Graduate",
    issuer: "Dicoding Indonesia",
    issueDate: "December 2024",
    credentialId: "DCD/DB24/DIST/XXIV-12/030",
    description: "Mastered full-stack web development with best practices over a 6-month bootcamp.",
    image: "/certificates/bootcamp-dicoding.jpg"
  },
  {
    id: "3",
    name: "Intermediate Native Android App Development",
    issuer: "Dicoding Indonesia",
    issueDate: "September 2023",
    credentialId: "NVP75RN6VXR0",
    verificationUrl: "https://www.dicoding.com/certificates/NVP75RN6VXR0",
    description: "Developed practical skills in building native Android applications, focusing on intermediate-level concepts and best practices.",
    image: "/certificates/dicoding-android-intermediate.jpg"
  },
  {
    id: "4",
    name: "Cloud Computing",
    issuer: "Bangkit led by Google, Goto, and Traveloka",
    issueDate: "July 2021",
    description: "Completed a 6-month apprenticeship, gaining proficiency in Google Cloud Platform services for cloud infrastructure and operations.",
    image: "/certificates/bangkit-cloud-computing.jpg"
  },
  {
    id: "5",
    name: "Google IT Support Specialization",
    issuer: "Google - Coursera",
    issueDate: "March 2021",
    credentialId: "YTSEBLSAPB2Z",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/YTSEBLSAPB2Z",
    description: "Acquired foundational IT support skills including troubleshooting, networking, and system administration.",
    image: "/certificates/google-it-support.jpg",
  },
  {
    id: "6",
    name: "Google IT Automation with Python",
    issuer: "Google - Coursera",
    issueDate: "March 2021",
    credentialId: "VZMNUXCU4C2N",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/VZMNUXCU4C2N",
    description: "Mastered Python for IT automation, including scripting, configuration management, and cloud interaction.",
    image: "/certificates/google-it-automation.jpg",
  },
  {
    id: "7",
    name: "EF SET English Certificate 81/100 (C2 Proficient)",
    issuer: "English First (EF)",
    issueDate: "March 2021",
    verificationUrl: "https://www.efset.org/cert/6emyf8",
    description: "The achieved level is 81/100 on the EF SET score scale and C2 Proficient according to the Common European Framework of Reference (CEFR). The EF SET score is calculated as an average of the skill section scores.",
    image: "/certificates/efset.png",
  },
]