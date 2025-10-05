import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-justify mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl ? (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="rounded-full cursor-not-allowed"
              disabled
            >
              Unavailable
            </Button>
          )}

          {githubUrl ? (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="rounded-full shadow-none cursor-not-allowed"
              disabled
            >
              <GithubLogo className="mr-1 h-4 w-4" />
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Simple AI Resume Builder",
      description:
        "A simple CohereAI-powered resume builder that helps users create professional resumes quickly.",
      image: "/ai-resume-builder.png",
      technologies: ["Next.JS", "TypeScript", "CohereAI", "Tailwind CSS"],
      liveUrl: "https://ai-resume-builder-pi-navy.vercel.app/",
      githubUrl: "https://github.com/KentKalaw/ai-resume-builder",
    },
    {
      title:
        "University of Batangas - Internal Quality Assurance Office (iQAO) Auditing System",
      description:
        "A comprehensive auditing system for the University of Batangas' Internal Quality Assurance Office.",
      image: "/iqao-login.png",
      technologies: [
        "Next.JS",
        "Prisma",
        "MySQL",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN/UI",
      ],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Koyam's Recette - Recipe App for Filipino Dishes",
      description:
        "A feature-rich recipe mobile application for Filipino dishes, allowing users to browse, share, and create recipes. Includes user authentication, favorites, and search functionality.",
      image: "/koyam-recette.png",
      technologies: ["Dart", "Flutter", "Firebase", "Provider"],
      liveUrl: "",
      githubUrl: "https://github.com/kentkalaw/koyam-final",
    },
    {
      title:
        "Alumnite: Leveraging Responsive Web Development for Enhancing Alumni Engagement and Reinforcing University Core Values - Capstone",
      description:
        "A responsive web application designed to enhance alumni engagement and reinforce university core values. Features include event management, news updates, and networking opportunities.",
      image: "/alumnite.png",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      liveUrl: "",
      githubUrl: "",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
