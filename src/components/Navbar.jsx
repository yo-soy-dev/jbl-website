import { useState } from "react";

const navLinks = ["HOME", "PRODUCT", "BLOG", "ABOUT US", "CONTACT US"];

export default function Navbar({ activePage = "HOME", onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-3"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Logo */}
      <div className="relative z-10">
        <div
          style={{
            background: "linear-gradient(135deg, #7c3aed 0%, #FF4500 100%)",
            fontFamily: "'Bebas Neue', sans-serif",
          }}
          className="px-4 py-1.5 rounded text-white text-2xl tracking-widest"
        >
          JBL
        </div>
      </div>

      {/* Nav Links */}
      <ul className="relative z-10 hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = link === activePage;
          return (
            <li key={link}>
              <button
                onClick={() => onNavigate && onNavigate(link)}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  cursor: "pointer",
                  position: "relative",
                  padding: "4px 0",
                  color: isActive ? "white" : "rgba(255,255,255,0.6)",
                  transition: "color 0.2s",
                  fontWeight: isActive ? "600" : "400",
                }}
              >
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "#FF4500",
                    }}
                  />
                )}
                {link}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Icons */}
      <div className="relative z-10 flex items-center gap-5 text-gray-300">
        <button className="hover:text-white transition-colors">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </div>
    </nav>
  );
}