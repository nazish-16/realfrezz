'use client'

import { useEffect, useState } from "react";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#13243c] h-screen">
      <Navbar />
      <Homepage />
      <About />
      <Tech />
      <Testimonials />
      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionProperty: 'opacity, transform' }}
      >
        <img
          src="https://img.icons8.com/?size=100&id=26124&format=png&color=FFFFFF"
          alt="arrow"
          className="w-8"
        />
      </button>
    </div>
  );
}
