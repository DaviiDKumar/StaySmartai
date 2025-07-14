// src/components/HeroSection.jsx
"use client"; // This is crucial for client-side interactivity and Next.js Image component

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import '../styles/Hero.css'; // Import the dedicated CSS file

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content"> {/* Left side: Text and Button */}
                <h1 className="hero-heading">
                    <b> 2025</b> is the year of Artificial Intelligence — and it’s transforming how we live and work.
                </h1>

                <h3 className="hero-heading2">  Everything You need at one place</h3>
                <p className="hero-subheading">

                    <strong>Stay Smart.ai</strong> helps you stay ahead with the <Link href="/tools">best AI tools</Link>, beginner-friendly guides, and <Link href="/posts">helpful AI blogs</Link>.<br />
                    AI made simple, for real people — not just tech experts.<br />
                </p>
                <p className="hero-subheading">
                    Your personal shortcut into the world of AI — no confusion, no fluff.<br />
                    Whether you&apos;re curious about how AI works, looking for tools to boost your productivity, or just trying to keep up with what’s trending, you’re in the right place.<br />
                    Explore handpicked AI tools, easy-to-follow guides, and real talk about how AI fits into your life — all in one place.
                </p>




                <div className="hero-buttons">
                    <Link href="/tools" className="hero-button primary">
                        Explore AI Tools
                    </Link>
                    <Link href="/posts" className="hero-button secondary">
                        Read Our Blogs
                    </Link>
                </div>
            </div>


        </section >
    );
};

export default HeroSection;