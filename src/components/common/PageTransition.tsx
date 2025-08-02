// ✅ 올바른 코드 (Next.js 기준)
'use client';
import { useRouter } from 'next/navigation';

interface PageTransitionProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ to, children, className = '' }: PageTransitionProps) {
const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const blind = document.createElement('div');
    blind.className = 'blind-slide';
    document.body.appendChild(blind);
    setTimeout(() => blind.classList.add('active'), 10);
    setTimeout(() => router.push(to), 300);
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
}
