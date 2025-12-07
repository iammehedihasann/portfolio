// src/pages/About.jsx  (or use inside Home as a section)
import about_image from "../assets/images/pic.jpg";

export default function About() {
  return (
    <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-gray-900 ">
      {/* Background Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-6xl md:text-7xl lg:text-5xl font-bold text-center mb-16 lg:mb-24 
                        bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 lg:space-y-10">
            <div
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 
                            shadow-2xl hover:shadow-purple-500/20 transition-all duration-700"
            >
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-200">
                Hello! I'm{" "}
                <span className="text-white font-bold text-2xl lg:text-3xl">
                  Mehedi Hasan
                </span>
                , a passionate{" "}
                <span className="text-cyan-400 font-bold">
                  Full-Stack Web Developer
                </span>{" "}
                who turns ideas into beautiful, high-performance digital
                experiences.
              </p>

              <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                Currently building real-world applications at{" "}
                <span className="text-purple-400 font-bold">BasiFy</span>,
                mastering the{" "}
                <span className="text-green-400 font-bold">MERN stack</span>,
                and diving deep into{" "}
                <span className="text-yellow-400 font-bold">
                  AI with Python
                </span>
                . I believe clean code and stunning design can change the world
                — one pixel at a time.
              </p>
            </div>

            {/* Tech Stack Card */}
            <div
              className="backdrop-blur-xl bg-gradient-to-br from-purple-900/50 to-cyan-900/30 
                            border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-3 h-12 bg-gradient-to-b from-pink-500 to-cyan-500 rounded-full"></span>
                Core Technologies
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  "React & Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js + Express",
                  "Firebase",
                  "MongoDB",
                  "Python + AI",
                  "Git & GitHub",
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 
                               backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 
                               transition-all duration-300 hover:scale-105 hover:border-cyan-500/50"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-ping"></div>
                    <span className="text-gray-200 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Gradient Border Ring */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 
                              rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"
              ></div>

              {/* Image */}
              <img
                src={about_image}
                alt="Mehedi Hasan"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                           rounded-full object-cover border-8 border-slate-900 
                           shadow-2xl transition-all duration-700 
                           group-hover:scale-105 group-hover:rotate-3"
              />

              {/* Floating Badge */}
              <div
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-600 to-cyan-600 
                              text-white font-bold px-6 py-3 rounded-full shadow-2xl 
                              animate-bounce"
              >
                Available for Hire
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
