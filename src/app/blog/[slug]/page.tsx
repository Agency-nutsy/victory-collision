import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return siteConfig.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = siteConfig.blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#1A1815] text-[#F5F1EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-accent hover:text-[#F5F1EA] transition-colors mb-8 inline-block font-medium">&larr; Back to Blog</Link>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA] mb-6">{post.title}</h1>
        <p className="text-[#A8A093] mb-8 text-sm">Published on {new Date(post.date).toLocaleDateString()}</p>
        
        {post.image && (
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border border-[#38332C] shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="text-[#E6E1D8] text-lg leading-relaxed space-y-6">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}
