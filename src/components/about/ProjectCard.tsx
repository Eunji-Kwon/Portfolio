import styles from '@/styles/about/about.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  period: string;
  color?: 'green' | 'orange';
}

export default function ProjectCard({ title, description, period, color = 'green' }: ProjectCardProps) {
  const colorClass = color === 'green' ? styles.greenCard : styles.orangeCard;

  return (
    <div className={`${colorClass} ${styles.projectCard} mb-2`}>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-1">{description}</p>
      <span className={color === 'green' ? 'text-xs text-green-700' : 'text-xs text-orange-700'}>{period}</span>
    </div>
  );
} 