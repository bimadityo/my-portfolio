export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
  image: string;
}