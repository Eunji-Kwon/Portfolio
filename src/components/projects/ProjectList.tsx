
import Image from 'next/image';
const projects = [
  {
    id: 1,
    name: 'Personal Blog',
    image: 'https://via.placeholder.com/150',
    description: 'A digital archive for my development journey.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 2,
    name: 'Portfolio Site',
    image: 'https://via.placeholder.com/150',
    description: 'Showcase of my projects and skills.',
    technologies: ['React', 'Styled Components']
  }
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {projects.map(project => (
        <div key={project.id} className="bg-white rounded-lg shadow border border-gray-200 p-4 flex flex-col">
          <Image src={project.image} alt={project.name} className="rounded mb-3 w-full h-32 object-cover" />
          <h2 className="text-lg font-bold mb-1">{project.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 