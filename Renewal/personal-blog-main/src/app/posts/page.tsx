import BlogHeader from '@/components/common/BlogHeader';
import PostList from '@/components/posts/PostList';

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogHeader />
        <PostList />
      </div>
    </main>
  );
} 