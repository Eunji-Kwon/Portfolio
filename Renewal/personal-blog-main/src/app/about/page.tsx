import BlogHeader from '@/components/common/BlogHeader';
import Timeline from '@/components/about/Timeline';
import ProjectList from '@/components/about/ProjectList';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogHeader />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Left: Timeline (3/10) */}
          <div className="md:basis-3/10 md:w-3/10 w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">History</h2>
            <Timeline />
          </div>
          {/* Right: Projects/Highlights (7/10) */}
          <div className="md:basis-7/10 md:w-7/10 w-full flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Projects & Highlights</h2>
            <div className="w-full bg-white rounded-lg shadow p-8 min-h-[300px] flex flex-col gap-6 border border-gray-100">
              <ProjectList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 