const posts = [
  {
    id: 1,
    title: 'First Dev Log',
    date: '2024-05-01',
    tags: ['Next.js', 'React'],
    description: 'Started my new blog project using Next.js and Tailwind CSS.'
  },
  {
    id: 2,
    title: 'Interesting News',
    date: '2024-05-10',
    tags: ['News', 'Web'],
    description: 'Read about the latest trends in web development.'
  }
];

export default function PostList() {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 max-w-2xl mx-auto border border-gray-200">
      {posts.map(post => (
        <div key={post.id} className="border-l-4 border-blue-400 pl-4 py-2 bg-gray-50 hover:bg-blue-50 transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <div className="flex gap-2 mt-1 mb-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">{post.description}</p>
        </div>
      ))}
    </div>
  );
} 