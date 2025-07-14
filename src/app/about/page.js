// pages/about.js (or app/about/page.js if you're using the App Router)

import Link from "next/link";
export const metadata = {
  title: "About | Stay Smart AI",
  description: "Learn more about Stay Smart AI and what we do: our mission, vision, and commitment to artificial intelligence insights.",
};

export default function About() {
  return (
    <>
    
      
      {/* The 'container' class is assumed to be defined in your global CSS (styles/globals.css).
        If it's not, you should add a definition like this to styles/globals.css:
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: var(--spacing-lg) var(--spacing-md);
        }
      */}
      <main className="container">
        <h1>About Stay Smart AI</h1>
        <p>
          Welcome to <strong>Stay Smart AI</strong>, your premier destination for cutting-edge insights and analysis in the rapidly evolving world of Artificial Intelligence. Our mission is to demystify AI, making complex topics accessible and understandable for everyone, from tech enthusiasts to industry professionals.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a future where informed decision-making driven by intelligent insights is the norm. Stay Smart AI is committed to being a leading voice in this transformation by providing accurate, timely, and thought-provoking content. We believe that understanding AI is not just for experts, but a critical skill for navigating the modern world.
        </p>

        <h3>What We Offer</h3>
        <p>
          At Stay Smart AI, we cover a broad spectrum of AI-related subjects, including:
        </p>
        <ul>
          <li><strong>Latest AI Trends:</strong> Keeping you abreast of breakthroughs and emerging technologies.</li>
          <li><strong>Practical Applications:</strong> Exploring how AI is being used across various industries.</li>
          <li><strong>Ethical AI Discussions:</strong> Delving into the societal impact and responsible development of AI.</li>
          <li><strong>Deep Dives & Tutorials:</strong> Breaking down complex AI concepts into digestible knowledge.</li>
          <li><strong>Expert Interviews:</strong> Featuring insights from leaders and innovators in the AI space.</li>
        </ul>

        <p>
          Our team of dedicated writers and researchers are passionate about AI and committed to delivering high-quality, reliable information. We strive to foster a community where curiosity is celebrated and knowledge is shared.
        </p>

        <h4>Join Our Journey</h4>
        <p>
          Whether you&apos;re looking to understand the basics of machine learning, stay updated on the latest deep learning models, or explore the philosophical implications of artificial general intelligence, Stay Smart AI is here to guide you.
        </p>
        <p>
          Explore our <Link href="/posts" className="navbar-link">latest posts</Link> or <Link href="/contact" className="navbar-link">contact us</Link> to learn more about how AI is shaping our world.
        </p>
      </main>
    </>
  );
}