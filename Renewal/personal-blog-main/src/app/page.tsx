import DrawerNav from '@/components/common/DrawerNav';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 flex flex-col items-center justify-center relative overflow-hidden text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main text content */}
      <div className="relative z-10 text-center space-y-2 px-4 leading-none tracking-tight">
        <h2 className="text-3xl md:text-4xl font-light text-white/70 uppercase">Developer</h2>
        <h1 className="text-[4.5rem] md:text-[6rem] font-bold playwrite-dk-uloopet-h3 text-yellow-300 drop-shadow-[0_0_40px_rgba(255,255,0,0.6)]">
          Eunji Kwon
        </h1>
  
        <p className="text-2xl md:text-3xl text-white italic">Creative at heart.</p>
        <p className="text-2xl md:text-3xl text-white italic">Coder by craft.</p>
      </div>

      {/* Navigation */}
      <div className="relative z-10 mt-20">
        <DrawerNav />
      </div>
    </main>
  );
}
