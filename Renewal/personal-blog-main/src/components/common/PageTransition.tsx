// src/components/PageTransition.tsx (CRA용 예시)
import { useNavigate } from 'react-router-dom';

interface PageTransitionProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ to, children, className = '' }: PageTransitionProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const blind = document.createElement('div');
    blind.className = 'blind-slide';
    document.body.appendChild(blind);
    setTimeout(() => blind.classList.add('active'), 10);
    setTimeout(() => navigate(to), 300);
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
}
