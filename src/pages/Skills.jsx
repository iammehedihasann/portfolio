// // Skills.jsx — Fully Responsive & Mobile-Optimized (2025 Ready)
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiJavascript,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiPython,
//   SiDocker,
//   SiFigma,
//   SiGit,
// } from "react-icons/si";

// const skills = [
//   { name: "React", icon: SiReact, gradient: "from-cyan-400 to-blue-600" },
//   { name: "Next.js", icon: SiNextdotjs, gradient: "from-black to-gray-700" },
//   {
//     name: "TypeScript",
//     icon: SiTypescript,
//     gradient: "from-blue-500 to-blue-700",
//   },
//   {
//     name: "JavaScript",
//     icon: SiJavascript,
//     gradient: "from-yellow-400 to-amber-600",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: SiTailwindcss,
//     gradient: "from-teal-400 to-cyan-600",
//   },
//   {
//     name: "Node.js",
//     icon: SiNodedotjs,
//     gradient: "from-green-500 to-emerald-700",
//   },
//   { name: "Python", icon: SiPython, gradient: "from-blue-400 to-yellow-500" },
//   { name: "Docker", icon: SiDocker, gradient: "from-sky-500 to-blue-700" },
//   { name: "Figma", icon: SiFigma, gradient: "from-purple-500 to-pink-600" },
//   { name: "Git & GitHub", icon: SiGit, gradient: "from-orange-600 to-red-700" },
// ];

// export default function Skills() {
//   return (
//     <section className="py-16 md:py-24 lg:py-32 px-6  min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         {/* Responsive Title */}
//         <h2
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 md:mb-16 lg:mb-24
//                         bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
//         >
//           Skills & Technologies
//         </h2>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl
//                          border border-white/10 p-6 sm:p-8 md:p-10
//                          transform transition-all duration-500
//                          hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:shadow-purple-500/40
//                          active:scale-95" // Tap feedback on mobile
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Gradient Overlay — Now Responsive & Smoother */}
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-50
//                            transition-opacity duration-1000 ease-out
//                            pointer-events-none"
//                 style={{
//                   backgroundImage: `linear-gradient(135deg,
//                     ${skill.gradient.split(" ")[1]},
//                     ${
//                       skill.gradient.split(" ")[3] ||
//                       skill.gradient.split(" ")[1]
//                     })`,
//                 }}
//               />

//               {/* Icon Container */}
//               <div
//                 className={`relative z-10 p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br ${skill.gradient}
//                                shadow-2xl transform group-hover:scale-125 group-hover:-rotate-12
//                                transition-all duration-700`}
//               >
//                 <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-10 lg:w-12 lg:h-12 text-white mx-auto" />
//               </div>

//               {/* Skill Name */}
//               <h3
//                 className="relative z-10 mt-5 sm:mt-6 text-center text-sm sm:text-base md:text-lg lg:text-xl
//                               font-semibold text-white tracking-wide
//                               group-hover:text-transparent group-hover:bg-clip-text
//                               group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400
//                               transition-all duration-700"
//               >
//                 {skill.name}
//               </h3>

//               {/* Shine Effect on Hover/Tap */}
//               <div
//                 className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 md:w-40 h-32 sm:h-40
//                               bg-white/20 rounded-full blur-3xl opacity-0
//                               group-hover:opacity-100 active:opacity-100
//                               transition-opacity duration-1000"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// pages/Skills.jsx  (or place directly in Home.jsx as a section)
import { Box, Typography, Chip, Avatar } from "@mui/material";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiNextdotjs,
  SiPython,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB", level: "Expert" },
  {
    name: "JavaScript (ES6+)",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: "Expert",
  },
  { name: "Firebase", icon: SiFirebase, color: "#FFA611", level: "Advanced" },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    level: "Intermediate",
  },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: "Learning" },
  { name: "Python (AI)", icon: SiPython, color: "#3776AB", level: "Academic" },
  { name: "Git & GitHub", icon: SiGit, color: "#F05032", level: "Advanced" },
];

export default function Skills() {
  return (
    <section className="bg-gray-900 py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <Typography
          variant="h2"
          className="text-3xl md:text-5xl font-extrabold text-center pb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Skills & Technologies
        </Typography>

        {/* Skills Grid */}
        <Box className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 pb-10">
          {skills.map((skill, index) => (
            <Box
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700 
                         p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 
                         hover:border-blue-500/50 cursor-pointer"
            >
              {/* Gradient Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                }}
              />

              {/* Icon */}
              <Avatar
                sx={{
                  width: { xs: 60, md: 80 },
                  height: { xs: 60, md: 80 },
                  bgcolor: skill.color + "20",
                  color: skill.color,
                  border: `3px solid ${skill.color}40`,
                  margin: "0 auto 16px",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "rotate(360deg) scale(1.2)",
                    boxShadow: `0 0 30px ${skill.color}60`,
                  },
                }}
                className="group-hover:rotate-360 group-hover:scale-110"
              >
                <skill.icon size={36} />
              </Avatar>

              {/* Skill Name */}
              <Typography
                variant="h6"
                align="center"
                className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300"
              >
                {skill.name}
              </Typography>

              {/* Level Badge */}
              <Chip
                label={skill.level}
                size="small"
                sx={{
                  mt: 1.5,
                  bgcolor:
                    skill.level === "Expert"
                      ? "rgba(34, 197, 94, 0.2)"
                      : skill.level === "Advanced"
                      ? "rgba(59, 130, 246, 0.2)"
                      : skill.level === "Intermediate"
                      ? "rgba(251, 146, 60, 0.2)"
                      : "rgba(168, 85, 247, 0.2)",
                  color:
                    skill.level === "Expert"
                      ? "#22c55e"
                      : skill.level === "Advanced"
                      ? "#3b82f6"
                      : skill.level === "Intermediate"
                      ? "#fb923c"
                      : "#a855f7",
                  border: "1px solid",
                  borderColor:
                    skill.level === "Expert"
                      ? "#22c55e40"
                      : skill.level === "Advanced"
                      ? "#3b82f640"
                      : skill.level === "Intermediate"
                      ? "#fb923c40"
                      : "#a855f740",
                  fontWeight: "bold",
                  fontSize: "0.7rem",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Optional Footer Note */}
        <Typography
          variant="body2"
          align="center"
          className="mt-16 text-gray-400 italic "
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Always learning • Always building • Always improving
        </Typography>
      </div>
    </section>
  );
}
