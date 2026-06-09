import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  const [page, setPage] = useState("HOME");

  const handleNavigate = (link) => {
    if (link === "HOME" || link === "ABOUT US") {
      setPage(link);
    } else {
      setPage("HOME"); 
    }
  };

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
      <Navbar activePage={page} onNavigate={handleNavigate} />
      {page === "HOME" && <HeroSection />}
      {page === "ABOUT US" && <AboutSection />}
    </div>
  );
}