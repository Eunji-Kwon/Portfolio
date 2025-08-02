export default function Sidebar() {
  return (
    <aside className="w-64 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="relative">
        <div className="absolute -top-3 left-0 w-12 h-3 bg-gray-200 rounded-t-lg"></div>
        <div className="pt-4">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">Profile</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <p>Frontend Developer</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <p>Based in Seoul, Korea</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <p>Next.js / React</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 