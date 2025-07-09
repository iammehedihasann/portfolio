

// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import images from "../assets/images/agrotrends.jpg";
import images2 from "../assets/images/medical.jpg";
import images3 from "../assets/images/random_password.png";


function Projects() {
  const projectList = [
    {
      title: "AgriBlog",
      description:
        "A blog platform for agricultural news & tips, built with React, Firebase, Tailwind.",
      tech: ["React", "Tailwind", "Firebase"],
      image: images,
      github: "https://github.com/iammehedihasann/AgroTrends",
      live: "https://agro-trends.vercel.app",
    },
    {
      title: "Random password generator",
      description:
        "A simple web app to generate random passwords, built with React.",
      tech: ["React", "Tailwind"],
      image: images3,
      github: "https://github.com/iammehedihasann/RandomPasswordGenerator",
      live: "https://random-password-generator.vercel.app",
    },
    {
      title: "Online Medical Booking",
      description:
        "A platform for booking medical appointments, built with React, Firebase, Tailwind.",
      tech: ["React", "Tailwind", "Firebase"],
      image: images2,
      github: "https://github.com/iammehedihasann/online-medical-booking",
      live: "https://online-medical-booking.vercel.app",
    },
  ];

  return (
    <section className="bg-gray-900 min-h-screen text-white px-6 py-16" id="projects"
    >
      <div className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-10">
          Featured Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
         data-aos="fade-left"
       data-aos-duration="1000"
        >
          {projectList.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
