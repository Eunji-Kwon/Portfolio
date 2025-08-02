import BlogHeader from '@/components/common/BlogHeader';
import ProjectList from '@/components/projects/ProjectList';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogHeader />
        <ProjectList />
      </div>
    </main>
  );
} 