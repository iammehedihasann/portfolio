// const Contact =()=> {
//   return (
//     <section>
//       <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
//       <form className="flex flex-col gap-4 max-w-md">
//         <input className="border p-2" type="text" placeholder="Your Name" />
//         <input className="border p-2" type="email" placeholder="Your Email" />
//         <textarea className="border p-2" rows="4" placeholder="Your Message" />
//         <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">Send</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

// src/pages/Contact.jsx
// import { useState } from "react";

// src/pages/Contact.jsx
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Divider,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real project → connect to EmailJS, Formspree, or your backend
    setOpen(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setOpen(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <Typography
            variant="h3"
            className="text-4xl md:text-5xl font-extrabold text-white pb-4"
          >
            Get In Touch
          </Typography>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <Typography
            variant="body1"
            className="text-gray-400 mt-6 max-w-2xl mx-auto "
          >
            I'm currently open to new opportunities. Whether you have a project
            or just want to say hi, my inbox is always open!
          </Typography>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info + Social */}
          <Box data-aos="fade-right">
            <Typography
              variant="h5"
              className="text-2xl font-bold text-white mb-8"
            >
              Let's connect
            </Typography>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/30">
                  <FiMail className="text-blue-400 text-xl" />
                </div>
                <div>
                  <Typography className="text-gray-400 text-sm">
                    Email
                  </Typography>
                  <Link
                    href="mailto:mehediextreme@gmail.com"
                    className="text-white hover:text-blue-400 transition"
                  >
                    mehediextreme@gmail.com
                  </Link>
                </div>
              </div>

              {/* Phone (optional) */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/30">
                  <FiPhone className="text-blue-400 text-xl" />
                </div>
                <div>
                  <Typography className="text-gray-400 text-sm">
                    Phone
                  </Typography>
                  <Typography className="text-white">
                    +880 1757705728
                  </Typography>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/30">
                  <FiMapPin className="text-blue-400 text-xl" />
                </div>
                <div>
                  <Typography className="text-gray-400 text-sm">
                    Location
                  </Typography>
                  <Typography className="text-white">
                    Dhaka, Bangladesh
                  </Typography>
                </div>
              </div>
            </div>

            <Divider sx={{ my: 4, borderColor: "rgba(59, 130, 246, 0.2)" }} />

            {/* Social Links */}
            <div className="flex gap-4">
              <IconButton
                href="https://github.com/iammehedihasann"
                target="_blank"
                sx={{
                  bgcolor: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  color: "#93c5fd",
                  "&:hover": {
                    bgcolor: "rgba(59, 130, 246, 0.2)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FiGithub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/hasanmehedix"
                target="_blank"
                sx={{
                  bgcolor: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  color: "#93c5fd",
                  "&:hover": {
                    bgcolor: "rgba(59, 130, 246, 0.2)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FiLinkedin />
              </IconButton>
            </div>
          </Box>

          {/* Right: Contact Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
            sx={{
              bgcolor: "rgba(31, 41, 55, 0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: 3,
              p: { xs: 4, md: 6 },
            }}
          >
            <Typography variant="h6" className="text-white font-bold mb-6">
              Send me a message
            </Typography>

            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              className="text-white"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "rgba(59, 130, 246, 0.3)" },
                  "&:hover fieldset": { borderColor: "#60a5fa" },
                },
                "& .MuiInputLabel-root": { color: "gray.400" },
              }}
            />

            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "rgba(59, 130, 246, 0.3)" },
                  "&:hover fieldset": { borderColor: "#60a5fa" },
                },
                "& .MuiInputLabel-root": { color: "gray.400" },
              }}
            />

            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={5}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "rgba(59, 130, 246, 0.3)" },
                  "&:hover fieldset": { borderColor: "#60a5fa" },
                },
                "& .MuiInputLabel-root": { color: "gray.400" },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<FiSend />}
              sx={{
                mt: 3,
                bgcolor: "#2563eb",
                px: 6,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 3,
                "&:hover": {
                  bgcolor: "#1d4ed8",
                  transform: "translateY(-2px)",
                },
                boxShadow: "0 8px 25px rgba(37, 99, 235, 0.3)",
              }}
            >
              Send Message
            </Button>
          </Box>
        </div>

        {/* Success Toast */}
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ bgcolor: "#166534", color: "white" }}>
            Message sent successfully! I'll reply soon
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
}
