// src/components/Navbar.jsx
"use client"; // This component needs to be a Client Component due to useState and event handlers.

import Link from "next/link";
// Adjust path to CSS: go up two levels from src/components, then into styles/
import '../styles/Navbar.css';
import { useState } from 'react'; // Import useState hook

// Import Lucide Icons
// You can browse available icons at: https://lucide.dev/
import { Home, Info, Rss, Wrench, Shield } from 'lucide-react'; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to open the mobile menu
    const openMenu = () => {
        setIsMenuOpen(true);
    };

    // Function to close the mobile menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <h2 className="navbar-title">Stay Smart.ai</h2>

            {/* Desktop links - hidden on small screens */}
            <div className="navbar-links-desktop">
                <Link href="/" className="navbar-link">Home</Link>
                <Link href="/about" className="navbar-link">About Us</Link>
                <Link href="/posts" className="navbar-link">Blogs</Link>
                <Link href="/posts" className="navbar-link">Tools</Link>
                {/* Assuming Privacy Policy also links to a /posts route for now, adjust as needed */}
                <Link href="/privacy" className="navbar-link">Privacy Policy</Link> 
            </div>

            {/* Hamburger icon - shown only on small screens when menu is CLOSED */}
            {!isMenuOpen && (
                <button
                    className="hamburger-menu-button"
                    onClick={openMenu}
                    aria-label="Open navigation menu"
                >
                    {/* Custom Hamburger SVG Icon (3 lines) */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                </button>
            )}

            {/* Mobile Menu Overlay - conditionally rendered and animated */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {/* Cross button inside mobile menu */}
                    <button
                        className="close-menu-button"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >
                        {/* Custom Cross SVG Icon (X shape) */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>

                    <div className="mobile-navbar-links">
                        {/* Mobile Navigation Links with Icons */}
                        <Link href="/" className="navbar-link" onClick={closeMenu}>
                            <Home size={30} /> {/* Home icon */}
                            <span>Home</span>
                        </Link>
                        <Link href="/about" className="navbar-link" onClick={closeMenu}>
                            <Info size={30} /> {/* Info icon */}
                            <span>About Us</span>
                        </Link>
                        <Link href="/posts" className="navbar-link" onClick={closeMenu}>
                            <Rss size={30} /> {/* Rss (blog) icon */}
                            <span>Blogs</span>
                        </Link>
                        <Link href="/tools" className="navbar-link" onClick={closeMenu}> {/* Changed href to /tools */}
                            <Wrench size={30} /> {/* Wrench (tools) icon */}
                            <span>Tools</span>
                        </Link>
                        <Link href="/privacy" className="navbar-link" onClick={closeMenu}> {/* Changed href to /privacy */}
                            <Shield size={30} /> {/* Shield (privacy) icon */}
                            <span>Privacy Policy</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;