import PageTransition from './PageTransition';

export default function DrawerNav() {
  return (
    <nav className="flex gap-6 bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/10 shadow-lg">
      <PageTransition href="/posts" className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-yellow-400/20 transition-all duration-300 group">
        <span className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(255,165,0,0.5)] transition-all"></span>
        <span className="font-medium text-white group-hover:text-yellow-300 transition-colors">Posts</span>
      </PageTransition>
      <PageTransition href="/projects" className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-yellow-400/20 transition-all duration-300 group">
        <span className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(255,165,0,0.5)] transition-all"></span>
        <span className="font-medium text-white group-hover:text-yellow-300 transition-colors">Projects</span>
      </PageTransition>
      <PageTransition href="/about" className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-yellow-400/20 transition-all duration-300 group">
        <span className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(255,165,0,0.5)] transition-all"></span>
        <span className="font-medium text-white group-hover:text-yellow-300 transition-colors">About</span>
      </PageTransition>
    </nav>
  );
} 