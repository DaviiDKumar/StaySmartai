"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import "../styles/CategoriesSection.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const intro = {
  heading: "The Rise of AI Tools: Your Ultimate Productivity Partner in 2025",
  desc: `Artificial Intelligence has rapidly evolved from a futuristic concept into an everyday productivity partner. Today, we rely on AI to complete a wide range of tasks more quickly and effectively than ever before. From content creation to software development, AI is transforming the way individuals and businesses operate. In this guide, we’ll explore powerful AI tools that are shaping the digital landscape in 2025—and that you can start using today.`
};

const categories = [
  {
    title: "Content and Copywriting Tools",
    href: "/categories/content-generation",
    desc: "In today's fast-paced digital world, content is the driving force behind engagement, marketing, and communication. AI content and copywriting tools have revolutionized how we write — enabling bloggers, marketers, students, and businesses to generate high-quality content quickly, efficiently, and at scale. Whether you're crafting a compelling ad, a blog post, or a college essay, these AI-powered platforms act like co-writers that boost creativity, remove grammatical errors, and tailor your message to the target audience.",
    websites: [
      {
        name: "ChatGPT",
        image: "/chatgpt.jpg",
        description: "ChatGPT, developed by OpenAI, is a state-of-the-art conversational language model trained to understand and generate human-like text. It can hold realistic conversations, understand nuanced queries, and produce context-aware responses. Writers, students, coders, and researchers use it for tasks ranging from email drafting and storytelling to academic help and brainstorming. Its versatility and depth make it one of the most powerful AI tools available today.",
        useCases: [
          "Draft full-length blog posts, essays, and articles with minimal prompts",
          "Summarize research papers, documents, and meeting transcripts into clear points",
          "Generate engaging social media content or ad copy",
          "Rewrite and improve existing content in tone, clarity, and grammar",
          "Offer real-time tutoring or explanations for academic and technical subjects",
          "Develop ideas and outlines for fiction and nonfiction projects"
        ],
        link: "https://chat.openai.com",
        bestUseFor: "An all-round AI assistant ideal for creative writing, content ideation, and academic help."
      },
      {
        name: "Copy.ai",
        image: "/copyai.jpg",
        description: "Copy.ai is a writing automation platform focused on digital marketers, entrepreneurs, and ecommerce brands. It provides ready-to-use templates for hundreds of content formats, such as Instagram captions, Google ads, website landing pages, and more. With just a product name or prompt, Copy.ai can generate multiple variations of high-converting copy — saving teams hours of brainstorming.",
        useCases: [
          "Create ad copy variations for A/B testing on platforms like Google and Facebook",
          "Craft SEO-friendly product descriptions for online stores",
          "Generate persuasive headlines, taglines, and hero section text for websites",
          "Build entire landing pages and email sequences using branded tone",
          "Write LinkedIn posts and personal bios for professionals and creators"
        ],
        link: "https://www.copy.ai",
        bestUseFor: "Perfect for marketers and startups looking to automate ad, email, and product copywriting."
      },
      {
        name: "Jasper",
        image: "/jasper.jpg",
        description: "Jasper (formerly Jarvis) is a premium AI copywriting platform used by marketing teams, content agencies, and enterprises. With advanced control over tone, brand voice, and long-form structure, it’s great for scaling content creation while keeping brand consistency. It supports over 25 languages and integrates with tools like Surfer SEO for on-page optimization.",
        useCases: [
          "Write SEO-optimized blog posts using guided workflows and keyword inputs",
          "Generate marketing emails and lead-nurturing funnels",
          "Build website pages, ad sets, and campaign landing content with your brand voice",
          "Collaborate across teams using content projects and templates",
          "Translate and localize long-form content into multiple languages"
        ],
        link: "https://www.jasper.ai",
        bestUseFor: "Best suited for agencies and enterprise teams managing branded content at scale."
      },
      {
        name: "Writesonic",
        image: "/writesonic.jpg",
        description: "Writesonic combines the speed of short-form AI generation with the depth of long-form content tools. It’s beginner-friendly and ideal for creators, bloggers, and solopreneurs. It also includes an AI article writer, landing page generator, chatbot builder, and even image generation in premium tiers. With support for multiple content formats and keyword targeting, it's a full-stack tool for digital writers.",
        useCases: [
          "Quickly generate entire blog articles with introduction, headings, and conclusion",
          "Build landing page content using just a brand name and goal",
          "Generate high-converting product ads, descriptions, and email intros",
          "Access AI Chatbot and custom templates for niche industries",
          "Use SEO mode to rank better in Google search results"
        ],
        link: "https://writesonic.com",
        bestUseFor: "Great for bloggers and solopreneurs looking for fast, SEO-rich content generation."
      },
      {
        name: "Grammarly",
        image: "/grammarly.jpg",
        description: "Grammarly is more than a spellchecker—it's an AI-driven writing coach that enhances your grammar, spelling, clarity, and tone across any platform you write on. With real-time suggestions and tone detectors, it's trusted by professionals, students, and teams to produce polished, mistake-free writing. It seamlessly integrates with emails, docs, browsers, and more.",
        useCases: [
          "Proofread documents and correct grammar, punctuation, and sentence structure",
          "Receive real-time writing suggestions while typing emails or messages",
          "Refine tone to sound confident, friendly, or formal depending on the context",
          "Ensure academic writing meets grammar and citation standards",
          "Collaborate with teams using Grammarly Business for shared brand tone"
        ],
        link: "https://www.grammarly.com",
        bestUseFor: "Essential for polishing any writing — from resumes and emails to academic and professional reports."
      },
      {
        name: "Sudowrite",
        image: "/sudowrite.jpg",
        description: "Sudowrite is a powerful AI co-writer built specifically for novelists, poets, and screenwriters. Unlike generic writing tools, it understands the nuances of fiction: plot arcs, dialogue flow, and character development. Its unique features include 'expand', 'describe', and 'brainstorm' modes that unlock new perspectives and help overcome writer’s block.",
        useCases: [
          "Generate dialogue, plot twists, or emotional descriptions for stories",
          "Expand a single sentence or paragraph into a vivid narrative",
          "Visualize scenes with sensory detail or rephrase passages creatively",
          "Create names, backstories, and worlds for fictional characters",
          "Use AI brainstorming to break creative ruts and spark new ideas"
        ],
        link: "https://www.sudowrite.com",
        bestUseFor: "A must-have for fiction writers looking to develop plots, deepen characters, and write faster."
      },
      {
        name: "Quillbot",
        image: "/quilbot.jpg",
        description: "Quillbot is a trusted AI tool among students, educators, and researchers for paraphrasing, summarizing, and grammar correction. Its paraphraser intelligently rewrites sentences while preserving meaning, making it excellent for academic work, plagiarism avoidance, and content optimization. It also includes a grammar checker, citation tool, and co-writer.",
        useCases: [
          "Paraphrase essays or papers while retaining key points and tone",
          "Summarize articles, reports, and PDFs into key takeaways",
          "Use grammar checker to correct errors and improve writing flow",
          "Generate citations in multiple formats (APA, MLA, Chicago, etc.)",
          "Rephrase or simplify complex academic text for easier reading"
        ],
        link: "https://quillbot.com",
        bestUseFor: "Ideal for students and researchers needing clear, well-structured academic and paraphrased content."
      }
    ]
  }
  ,

  {
    title: "Image Generation Tools",
    href: "/categories/image-generation",
    desc: `Need cool, trendy visuals fast? AI has you covered. AI-driven art generators are unlocking new levels of creativity for designers, marketers, and content creators. Tools like Midjourney, DALL·E, Leonardo AI, and Artbreeder transform text prompts into unique digital images—from detailed illustrations to photorealistic artwork—making it easier to keep up with creative trends.`,
    websites: [
      { name: "Midjourney", link: "https://www.midjourney.com" },
      { name: "DALL·E", link: "https://openai.com/dall-e" },
      { name: "Leonardo AI", link: "https://leonardo.ai" },
      { name: "Artbreeder", link: "https://www.artbreeder.com" },
      { name: "Adobe Firefly", link: "https://firefly.adobe.com" },
      { name: "Ideogram", link: "https://ideogram.ai" },
      { name: "Recraft", link: "https://www.recraft.ai" },
    ]
  },
  {
    title: "Video Creation and Editing Tools",
    href: "/categories/video-tools",
    desc: `No camera crew? No editor? No problem. AI-powered video tools allow users to create professional-looking videos with minimal resources. Platforms such as Synthesia, Pictory, Runway ML, and HeyGen can generate realistic avatars, automate video editing, and even write scripts—making video production faster, easier, and more cost-effective.`,
    websites: [
      { name: "Synthesia", link: "https://www.synthesia.io" },
      { name: "Runway ML", link: "https://runwayml.com" },
      { name: "Pictory", link: "https://pictory.ai" },
      { name: "HeyGen", link: "https://www.heygen.com" },
      { name: "Descript", link: "https://www.descript.com" },
      { name: "LTX Studio", link: "https://www.ltx.studio" },
    ]
  },
  {
    title: "Chatbots and Virtual Assistants",
    href: "/categories/chatbots",
    desc: `Need data or answers instantly? AI assistants are here to help. Tools like ChatGPT, Poe, Claude, and Notion AI are becoming smarter and more human-like, capable of handling complex conversations, providing real-time insights, and assisting with personal and professional organization.`,
    websites: [
      { name: "ChatGPT", link: "https://chat.openai.com" },
      { name: "Claude", link: "https://claude.ai" },
      { name: "Poe", link: "https://poe.com" },
      { name: "Notion AI", link: "https://www.notion.so/product/ai" },
      { name: "Gemini", link: "https://gemini.google.com" },
      { name: "Perplexity", link: "https://www.perplexity.ai" },
    ]
  },
  {
    title: "Voice and Audio Tools",
    href: "/categories/voice-tools",
    desc: `Creating voiceovers, podcasts, or audio content is easier than ever thanks to AI. Whether you need lifelike synthetic voices or advanced audio editing, tools like ElevenLabs, Murf AI, Descript, and Voice.ai provide powerful features for creators and professionals alike.`,
    websites: [
      { name: "ElevenLabs", link: "https://www.elevenlabs.io" },
      { name: "Murf AI", link: "https://murf.ai" },
      { name: "Descript", link: "https://www.descript.com" },
      { name: "Voice.ai", link: "https://voice.ai" },
      { name: "Krisp", link: "https://krisp.ai" },
    ]
  },
  {
    title: "Code and Developer Tools",
    href: "/categories/dev-tools",
    desc: `From writing code to debugging, AI now acts as a co-pilot for developers. Tools such as GitHub Copilot, Replit Ghostwriter, and Tabnine can suggest code, troubleshoot errors, and accelerate the software development process, saving both time and effort.`,
    websites: [
      { name: "GitHub Copilot", link: "https://github.com/features/copilot" },
      { name: "Replit Ghostwriter", link: "https://replit.com/site/ghostwriter" },
      { name: "Tabnine", link: "https://www.tabnine.com" },
      { name: "AskCodi", link: "https://askcodi.com" },
      { name: "Codiga", link: "https://www.codiga.io" },
    ]
  },
  {
    title: "Education and Learning Tools",
    href: "/categories/education",
    desc: `Students, educators, and researchers benefit greatly from AI tools that simplify complex concepts, generate study materials, and support academic research. Platforms like Khanmigo, Scribe AI, Elicit, and Quizgecko offer personalized learning experiences and boost productivity in education.`,
    websites: [
      { name: "Khanmigo", link: "https://www.khanacademy.org/khan-labs" },
      { name: "Scribe AI", link: "https://scribehow.com" },
      { name: "Elicit", link: "https://elicit.org" },
      { name: "Quizgecko", link: "https://quizgecko.com" },
      { name: "ChatGPT", link: "https://chat.openai.com" },
    ]
  },
  {
    title: "Productivity and Task Management",
    href: "/categories/productivity",
    desc: `AI is making task management smarter and more automated. Tools like Notion AI, Zapier AI, Taskade, and Bardeen integrate with your existing workflows to handle repetitive tasks, manage data, and keep your day organized. These tools are no longer optional—they’ve become essential to modern digital life.`,
    websites: [
      { name: "Notion AI", link: "https://www.notion.so/product/ai" },
      { name: "Zapier", link: "https://zapier.com" },
      { name: "Taskade", link: "https://www.taskade.com" },
      { name: "Bardeen", link: "https://www.bardeen.ai" },
      { name: "Reclaim AI", link: "https://reclaim.ai" },
    ]
  }
];



const CategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const contentRef = useRef(null);

  const handleCategoryClick = (idx) => {
    setActiveIndex(idx);
    setMobileOpen(false);
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section className="categories-section">


      <h2 className="categories-heading">{intro.heading}</h2>
      <p className="intro-desc">{intro.desc}</p>

      <div className="categories-layout">

        {/* Desktop Sidebar */}
        <div className="categories-sidebar">
          <h5 className="sidebar-title">All Categories</h5>
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx}>
                <button
                  className={idx === activeIndex ? "active" : ""}
                  onClick={() => handleCategoryClick(idx)}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Sidebar */}
        {/* === Mobile Sidebar Toggle Button === */}
        <button
          className="mobile-sidebar-toggle"
          onClick={() => setShowSidebar(true)}
        >
          ☰ Categories
        </button>

        {/* === Mobile Sidebar === */}
        <div className={`mobile-sidebar ${showSidebar ? "open" : ""}`}>
          <button className="mobile-close" onClick={() => setShowSidebar(false)}>✖</button>
          <h5 className="sidebar-title">All Categories</h5>
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx}>
                <button
                  className={idx === activeIndex ? "active" : ""}
                  onClick={() => {
                    setActiveIndex(idx);
                    setShowSidebar(false); // close after selecting
                    document.querySelector(".categories-content").scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>


        {/* Main Content */}
        <div className="categories-content" ref={contentRef}>
          <h3 className="categories-subheading">{categories[activeIndex].title}</h3>
          <p>{categories[activeIndex].desc}</p>

          <h6 className="websites-heading">Top Websites for This Category</h6>
          <ul className="websites-list">
            {categories[activeIndex].websites.map((site, idx) => (
              <li key={idx} className="website-card">
                {/* Image */}
                <Image
                  src={site.image}
                  alt={site.name}
                  width={600}
                  height={300}
                  className="website-img"
                  unoptimized
                />


                {/* Split Content: Description + Use Cases */}
                <div className="website-info-split">
                  {/* Left: Description */}
                  <div className="website-description">
                    {/* Name + Link */}
                    <a
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="website-title"
                    >
                      {site.name} <OpenInNewIcon className="open-icon" fontSize="small" />
                    </a>
                    <br />

                    {site.description}
                  </div>

                  {/* Right: Use Cases */}
                  {site.useCases && (
                    <ul className="use-cases">
                      <h4 className="use-cases-heading"> Use cases</h4>
                      {site.useCases.map((use, i) => (
                        <li key={i} className="use-case-item">
                          <KeyboardArrowRightIcon fontSize="small" className="use-case-icon" />
                          <span>{use}</span>
                        </li>

                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom: Best Use For */}
                {site.bestUseFor && (
                  <p className="best-use">
                   {site.bestUseFor}
                  </p>
                )}
              </li>

            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

