// src/pages/Resume.jsx
import { Button, Chip, Divider, Typography, Box, Paper } from "@mui/material";
import {
  FiDownload,
  FiCalendar,
  FiAward,
  FiCode,
  FiBookOpen,
} from "react-icons/fi";

const experiences = [
  {
    title: "React Developer",
    company: "Self Developer",
    period: "2025 – Present",
    description:
      "Building production-grade web applications using React, Tailwind CSS, Firebase Auth & Firestore. Working in agile teams on real user-facing products.",
    icon: <FiCode className="text-2xl text-blue-400" />,
  },
  {
    title: "AI Research Project (Academic)",
    company: "University Project",
    period: "2024",
    description:
      "Developed machine learning models in Python with data visualization dashboards using Matplotlib, Seaborn & Streamlit.",
    icon: <FiAward className="text-2xl text-blue-400" />,
  },
];

const education = [
  {
    degree: "B.Sc (Honours) in Computer Science & Engineering",
    institution: "Green University, Bangladesh",
    period: "2022 – 2026 (Expected)",
    description:
      "Specializing in Full-Stack Web Development, AI, Data Structures & Algorithms.",
    icon: <FiBookOpen className="text-2xl text-blue-400" />,
  },
  {
    degree: "100 Days of Code Challenge",
    institution: "Self-Taught (MERN + Projects)",
    period: "2023 – 2024",
    description:
      "Completed full MERN stack journey with 15+ deployed projects and participated in hackathons.",
    icon: <FiCalendar className="text-2xl text-blue-400" />,
  },
];

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Firebase",
  "Node.js",
  "Python",
  "Git & GitHub",
  "Responsive Design",
  "REST APIs",
  "AI & Machine Learning Basics",
  "Figma",
  "Vercel",
  "Problem Solving",
];

export default function Resume() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-950/20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header + Download Button */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h2"
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            My Resume
          </Typography>
          <div className="w-32 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>

          <Button
            variant="contained"
            size="large"
            startIcon={<FiDownload />}
            href="/Mehedi_Hasan_CV.pdf" // Put your PDF in public folder
            download
            sx={{
              bgcolor: "#1d4ed8",
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(29, 78, 216, 0.4)",
              "&:hover": {
                bgcolor: "#1e40af",
                transform: "translateY(-3px)",
                boxShadow: "0 15px 35px rgba(29, 78, 216, 0.5)",
              },
            }}
          >
            Download Resume (PDF)
          </Button>
        </div>

        {/* Timeline: Experience + Education */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <Box>
            <Typography
              variant="h4"
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <FiCode className="text-blue-400" /> Experience
            </Typography>
            {experiences.map((exp, i) => (
              <Paper
                key={i}
                elevation={6}
                sx={{
                  p: 4,
                  mb: 4,
                  bgcolor: "rgba(31, 41, 55, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: 3,
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: "#60a5fa",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <Typography
                      variant="h6"
                      className="text-xl font-bold text-white"
                    >
                      {exp.title}
                    </Typography>
                    <Typography className="text-blue-400 font-medium">
                      {exp.company} • {exp.period}
                    </Typography>
                    <Typography className="text-gray-300 mt-2 text-sm leading-relaxed">
                      {exp.description}
                    </Typography>
                  </div>
                </div>
              </Paper>
            ))}
          </Box>

          {/* Education */}
          <Box>
            <Typography
              variant="h4"
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <FiBookOpen className="text-blue-400" /> Education
            </Typography>
            {education.map((edu, i) => (
              <Paper
                key={i}
                elevation={6}
                sx={{
                  p: 4,
                  mb: 4,
                  bgcolor: "rgba(31, 41, 55, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: 3,
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: "#60a5fa",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <Typography
                      variant="h6"
                      className="text-xl font-bold text-white"
                    >
                      {edu.degree}
                    </Typography>
                    <Typography className="text-blue-400 font-medium">
                      {edu.institution} • {edu.period}
                    </Typography>
                    <Typography className="text-gray-300 mt-2 text-sm leading-relaxed">
                      {edu.description}
                    </Typography>
                  </div>
                </div>
              </Paper>
            ))}
          </Box>
        </div>

        {/* Skills Grid – Premium Chips */}
        <Box className="text-center">
          <Typography
            variant="h4"
            className="text-3xl font-bold text-white mb-10"
          >
            Technical Skills
          </Typography>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Chip
                  label={skill}
                  sx={{
                    bgcolor: "rgba(59, 130, 246, 0.15)",
                    color: "#93c5fd",
                    border: "1px solid rgba(59, 130, 246, 0.4)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    py: 2.5,
                    px: 3,
                    borderRadius: 3,
                    height: "auto",
                    "&:hover": {
                      bgcolor: "rgba(59, 130, 246, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                    },
                  }}
                />
              </div>
            ))}
          </div>
        </Box>
      </div>
    </section>
  );
}
