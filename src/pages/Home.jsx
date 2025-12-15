// src/pages/Home.jsx
"use client";
import { Button } from "@mui/material";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
// import mehediImage from "../assets/images/mehedi_image.jpg";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import { BackgroundBeamsDemo } from "../components/BackgroundBeamsDemo";
export default function Home() {
  return (
    <>
      {/* HERO – */}
      <section className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-16">
        <BackgroundBeamsDemo />
      </section>

      {/* Other Sections */}
      <section id="#about" className="bg-gray-900 pb-4  ">
        <About />
      </section>
      <section id="#skills" className="bg-gray-900 pb-4">
        <Skills />
      </section>
      <section id="#projects" className="bg-gray-900">
        <Projects />
      </section>
      <section id="#contact" className="bg-gray-900">
        <Contact />
      </section>
      <section id="#resume" className="bg-gray-900">
        <Resume />
      </section>
    </>
  );
}
