// // src/components/ProjectCard.jsx

// function ProjectCard({ title, description, tech, image, github, live }) {
//   return (
//     <div
//       className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
//       data-aos="zoom-in"
//       data-aos-duration="1000"
//     >
//       {/* Project Image */}
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover"
//       />

//       {/* Project Details */}
//       <div className="p-5">
//         <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
//         <p className="text-gray-300 mb-4">{description}</p>

//         <div className="text-sm text-blue-200 mb-4">
//           {tech.join(" • ")}
//         </div>

//         {/* Links */}
//         <div className="flex justify-between gap-4 text-xl">
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-gray-400"
//             title="GitHub"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           {live && (
//             <a
//               href={live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-green-400"
//               title="Live Preview"
//             >
//               <i className="fas fa-external-link-alt"></i>
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

// src/components/ProjectCard.jsx
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  live,
}) {
  return (
    <div
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden 
                 border border-gray-700 shadow-xl 
                 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                 hover:shadow-blue-500/20 hover:border-blue-500/50"
      data-aos="zoom-in"
      data-aos-delay={500}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-700 
                     group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/30"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FiGithub size={20} />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition font-medium"
          >
            <FiExternalLink size={20} />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>

      {/* Hover Shine Effect */}
      <div
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 
                      bg-gradient-to-t from-blue-500/10 to-transparent 
                      transition-transform duration-700 pointer-events-none"
      ></div>
    </div>
  );
}
