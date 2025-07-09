// src/pages/Resume.jsx

function Resume() {
  return (
    <section className="bg-gray-900 text-white px-6 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Resume</h2>

        {/* Top Download Button */}
        <div className="text-center mb-10">
          <a
            href="/Mehedi_Hasan_CV.pdf" // <-- place your resume in public folder
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded inline-block transition"
          >
            <i className="fas fa-download mr-2"></i> Download CV
          </a>
        </div>

        {/* Resume Sections */}
        <div className="grid md:grid-cols-2 gap-8" >
          {/* Experience */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
            <ul className="space-y-4 text-gray-300">
              <li data-aos="fade-right" data-aos-duration="1000">
                <strong>BasiFy - React Developer</strong><br />
                Working on real-life web apps using React, Tailwind, and Firebase.
              </li>
              <li data-aos="fade-right" data-aos-duration="1000">
                <strong>Academic AI Project</strong><br />
                Python + AI model with visualization for data-driven insights.
              </li>
            </ul>
          </div>

          {/* Education */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <ul className="space-y-4 text-gray-300">
              <li data-aos="fade-left" data-aos-duration="1000">
                <strong>B.Sc (Honours) in CSE</strong><br />
                Learning MERN Stack, AI, DSA, CS Fundamentals.
              </li>
              <li data-aos="fade-left" data-aos-duration="1000">
                <strong>100 Days of Code Challenge</strong><br />
                Full-stack Dev Journey (MERN + Projects + Hackathons).
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-white mb-4">Key Skills</h3>
          <div className="flex flex-wrap gap-4 text-sm text-blue-300">
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-up" data-aos-duration="1000">HTML5</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-down" data-aos-duration="1000">CSS</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-up" data-aos-duration="1000">React.js</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-down" data-aos-duration="1000">JavaScript</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-up" data-aos-duration="1000">Tailwind CSS</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-down" data-aos-duration="1000">Firebase</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-up" data-aos-duration="1000">Python</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-down" data-aos-duration="1000">GitHub</span>
            <span className="bg-gray-700 px-3 py-1 rounded" data-aos="fade-up" data-aos-duration="1000">Next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
