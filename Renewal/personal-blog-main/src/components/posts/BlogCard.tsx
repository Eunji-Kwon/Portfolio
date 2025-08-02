import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: number;
  title: string;
  date: string;
  tags: string[];
  description: string;
  image: string;
}

export default function BlogCard({ id, title, date, tags, description, image }: BlogCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <article className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="relative">
          <div className="absolute -top-3 left-0 w-12 h-3 bg-orange-400 rounded-t-lg group-hover:bg-orange-500 transition-colors"></div>
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-orange-600 transition-colors">{title}</h2>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <div className="flex gap-2 mb-3">
            {tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
      </article>
    </Link>
  );
} 