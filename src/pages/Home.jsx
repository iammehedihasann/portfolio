// src/pages/Home.jsx
import { Button } from "@mui/material";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import mehediImage from "../assets/images/mehedi_image.jpg";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
export default function Home() {
  return (
    <>
      {/* HERO – Clean, Professional & HR-Approved (2025 Style) */}
      <section className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center md:text-left space-y-8">
            {/* Greeting */}
            <div data-aos="fade-up">
              <h3 className="text-2xl text-gray-400 font-medium tracking-wider">
                Hello, I'm
              </h3>
            </div>

            {/* Name – Big & Bold */}
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              Mehedi Hasan
            </h1>

            {/* Title – With subtle accent line */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="relative inline-block"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
                Full-Stack Web Developer
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Short Bio */}
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              I build fast, responsive, and user-focused web applications using
              React, Tailwind CSS, Node.js, and modern tools. Passionate about
              clean code and great user experience.
            </p>

            {/* Social Links – Minimal & Elegant */}
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex justify-center md:justify-start gap-6 pt-6"
            >
              <a
                href="https://github.com/iammehedihasann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-2xl"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hasanmehedix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition text-2xl"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:mehediextreme@gmail.com"
                className="text-gray-400 hover:text-red-500 transition text-2xl"
              >
                <FiMail />
              </a>
            </div>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6"
            >
              <Button
                variant="contained"
                size="large"
                href="#contact"
                className="!bg-blue-600 hover:!bg-blue-700 !px-8 !py-3 !text-lg !font-medium !rounded-full"
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/resume"
                className="!border-gray-500 !text-gray-300 hover:!bg-gray-800 !px-8 !py-3 !text-lg !font-medium !rounded-full"
              >
                View Resume
              </Button>
            </div>
          </div>

          {/* Right: Profile Image – Clean & Professional */}
          <div
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative">
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-xl scale-110"></div>

              <img
                src={mehediImage}
                alt="Mehedi Hasan"
                className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full object-cover 
                           border-8 border-gray-800 shadow-2xl 
                           hover:border-blue-600 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections – All in same clean style */}
      <section id="#about" className="bg-gray-900">
        <About />
      </section>
      <section id="#skills" className="bg-gray-900">
        <Skills />
      </section>
      <section id="#projects" className="bg-gray-900">
        <Projects />
      </section>
      <section id="#contact" className="bg-gray-900">
        <Contact />
      </section>
      <section id="#contact" className="bg-gray-900">
        <Resume />
      </section>
    </>
  );
}
