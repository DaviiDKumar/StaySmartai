"use client";

import "../styles/AboutAISection.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutAISection() {
  return (
    <section className="about-ai-section">
      <div className="about-ai-text">
        <h2>What is AI?</h2>


        <p>
          Artificial Intelligence, or AI, refers to the ability of machines to mimic human intelligence — like learning, reasoning, and problem-solving.</p>

        <p> It’s not just about robots taking over the world; it’s about building smarter software that can assist or enhance what humans do.
        </p>

        <p>
          You’ve likely already interacted with AI today — whether through facial recognition to unlock your phone, personalized recommendations on YouTube, or a chatbot answering your questions on a website. AI is already deeply integrated into tools we rely on daily.
        </p>

        <p>
          <strong>Narrow AI</strong> is the kind most widely used today — focused on doing one task really well, like translating languages or filtering spam. On the other hand, <strong>General AI</strong> is still a goal — a machine that can think and understand as broadly as a human across any subject or scenario.
        </p>

        <p>
          AI systems learn by analyzing massive amounts of data, identifying patterns, and continuously improving themselves over time. Technologies like <em>machine learning</em>, <em>natural language processing (NLP)</em>, and <em>computer vision</em> are at the core of these advancements.
        </p>

        <h4>The Technology Reshaping Everything</h4>
        <div className="about-ai-image-wrapper">
          <Image
            src="/Ai1.jpg"
            alt="AI Illustration"
            width={500}
            height={350}
            className="ai-inline-image"
          />
        </div>

        <p>
          AI is being used in healthcare to detect diseases earlier, in agriculture to monitor crop health, in finance to detect fraud, and even in creative fields like music, writing, and design. It's accelerating research, optimizing logistics, and helping people live more efficiently.
        </p>

        <p>
          But with great power comes great responsibility. AI can inherit biases from data, impact privacy, and even lead to job displacement in certain sectors. That's why ethical AI development, transparency, and regulation are crucial to ensure it’s used for good.
        </p>

        <p>
          As AI continues to evolve, it holds incredible potential — not just to automate, but to collaborate with us and help solve humanity's toughest challenges. From climate modeling to personalized education, the possibilities are vast — and we’re just getting started.
        </p>

        <div className="about-ai-links">
          <Link href="/blogs/pros-and-cons-of-ai">Pros and Cons of AI</Link>
          <Link href="/blogs/uses-of-ai">Uses of AI</Link>
          <Link href="/tools/best-ai-tools">Best AI Tools</Link>
        </div>
      </div>
    </section>
  );
}
