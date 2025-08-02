import Image from 'next/image';
import DrawerNav from './DrawerNav';

export default function BlogHeader() {
  return (
    <header className="flex items-center justify-between mb-8 py-6 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src="/icons/mascot.png"
            alt="Blog Mascot"
            width={64}
            height={64}
            className="rounded-full"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Eunji&apos;s Archive</h1>
          <p className="text-gray-600 text-sm mt-1">개발 일지와 생각을 기록하는 공간</p>
        </div>
      </div>
      <DrawerNav />
    </header>
  );
} 