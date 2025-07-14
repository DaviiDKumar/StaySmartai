// src/app/posts/page.js
// No "use client"; needed here if all children are client components and this page itself has no client-side logic.
// If it needs client-side features beyond just rendering client components, add "use client";

import Link from "next/link";
// Import Navbar from src/components

// Import Posts.css: Go up two levels from src/app/posts, then into styles/
import '../../styles/Posts.css';

export const metadata = {
  title: "Posts | Stay Smart AI",
  description: "Read the latest blog posts and AI articles from our team.",
};

// Mock data for blog posts
const blogPosts = [
  {
    id: 'ai-ethics-future',
    title: 'The Ethics of AI: Navigating the Future of Intelligent Systems',
    date: 'June 20, 2025',
    excerpt: 'As AI becomes more integrated into our daily lives, understanding its ethical implications is crucial. This post explores fairness, accountability, and transparency in AI development.',
  },
  {
    id: 'generative-ai-creativity',
    title: 'Generative AI and the New Era of Creativity',
    date: 'June 15, 2025',
    excerpt: 'From creating stunning art to composing music, generative AI is revolutionizing creative industries. Discover how these models are pushing the boundaries of what\'s possible.',
  },
  {
    id: 'ml-in-healthcare',
    title: 'Machine Learning in Healthcare: Transforming Diagnostics and Treatment',
    date: 'June 10, 2025',
    excerpt: 'Explore how machine learning algorithms are improving disease detection, personalizing treatment plans, and accelerating drug discovery in the medical field.',
  },
  {
    id: 'nlp-advances',
    title: 'The Latest Advances in Natural Language Processing (NLP)',
    date: 'June 05, 2025',
    excerpt: 'NLP continues to evolve rapidly, enabling more natural human-computer interaction. We look at recent breakthroughs in large language models and their applications.',
  },
  {
    id: 'ai-for-beginners',
    title: 'AI for Beginners: Your First Steps into Artificial Intelligence',
    date: 'May 28, 2025',
    excerpt: 'New to AI? This introductory guide covers the fundamental concepts, key terminology, and provides resources to help you start your AI learning journey.',
  },
];

export default function Posts() {
  return (
    <>
     
      
      <main className="container">
        <h1>Blog Posts</h1>
        <p className="hero-subheading">Here you&apos;ll find all our latest blog articles, deep dives, and insights into the world of Artificial Intelligence.</p>

        <section className="post-list">
          {blogPosts.map((post) => (
            <article key={post.id} className="post-item">
              <h2>{post.title}</h2>
              <p className="post-date">Published: {post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/posts/${post.id}`} className="navbar-link">
                Read More &rarr;
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}