// src/components/Footer.jsx
import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/iammehedihasann",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/hasanmehedix/",
      label: "LinkedIn",
    },
    {
      icon: <FiMail />,
      href: "mailto:mehediextreme@gmail.com",
      label: "Email",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "rgba(17, 24, 39, 0.95)", // gray-900/95
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(59, 130, 246, 0.2)",
        py: { xs: 8, md: 10 },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand + Tagline */}
          <Box>
            <Typography
              variant="h4"
              className="font-extrabold text-3xl mb-3"
              sx={{
                background: "linear-gradient(to right, #60a5fa, #3b82f6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Mehedi.
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-400 leading-relaxed"
            >
              Full-Stack Web Developer passionate about building modern,
              responsive, and user-focused digital experiences.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" className="text-white font-bold mb-5">
              Quick Links
            </Typography>
            <div className="flex flex-col space-y-3">
              {["Home", "About", "Projects", "Contact", "Resume"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item === "Home" ? "" : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                    underline="none"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" className="text-white font-bold mb-5">
              Get in Touch
            </Typography>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FiMail className="text-blue-400" />
                <span>mehediextreme@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FiPhone className="text-blue-400" />
                <span>+880 1757705728</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FiMapPin className="text-blue-400" />
                <span>Madhabdi, Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <IconButton
                  key={i}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  sx={{
                    bgcolor: "rgba(59, 130, 246, 0.1)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    color: "#93c5fd",
                    "&:hover": {
                      bgcolor: "rgba(59, 130, 246, 0.2)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </div>
          </Box>
        </div>

        <Divider sx={{ my: 8, borderColor: "rgba(59, 130, 246, 0.2)" }} />

        {/* Bottom Bar */}
        <div className="text-center">
          <Typography variant="body2" className="text-gray-500">
            © {currentYear} Mehedi Hasan. All rights reserved.
          </Typography>
          <Typography variant="caption" className="text-gray-600 mt-2 block">
            Crafted with React, Tailwind & lots of coffee
          </Typography>
        </div>
      </div>
    </Box>
  );
}
