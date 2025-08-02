import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Simple Multi Timer App(iOS/Android)',
    description: 'A modern portfolio site with AI-driven blog and project showcase.',
    period: '2024.03 ~ Present',
    color: 'green' as const,
  },
  {
    title: "JamSocial's Website Revamp",
    description: 'Smart Home IoT Dashboard (React, Node.js, MongoDB)',
    period: '2025.01 ~ 2025.04',
    color: 'orange' as const,
  },
  {
    title: 'SETA Lab Checklist System',
    description: 'Smart Home IoT Dashboard (React, Node.js, MongoDB)',
    period: '2025.01 ~ 2025.04',
    color: 'orange' as const,
  },
];

export default function ProjectList() {
  return (
    <div className="w-full flex flex-col gap-4">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
} 