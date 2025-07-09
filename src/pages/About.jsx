
import about_image from '../assets/images/pic.jpg'
function About() {
  return (
    <section className="bg-gray-900 min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-6 py-12"
                    
   >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10"
          
      >

           {/* Right Profile Image */}
        <div className=" flex justify-center">
          <img
            src={about_image}
            alt="Mehedi Hasan"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-lg object-cover mt-4 md:mt-0"
             data-aos="fade-down"
             data-aos-duration="1000"
          />
        </div>
        
        {/* Left Content */}
        <div className="md:w-2/3" 
         data-aos="fade-up"
            data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6"
           >
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hello! I'm <span className="text-white font-semibold">Mehedi Hasan</span>, a passionate web application developer specializing in building responsive, user-friendly interfaces using <span className="text-blue-400">React</span> and <span className="text-blue-400">Tailwind CSS</span>. I'm currently contributing at <span className="text-blue-400">BasiFy</span> and learning the full <span className="text-blue-400">MERN stack</span> along with AI development in Python.
          </p>

          <div className="bg-gray-600  p-6 rounded-lg shadow-md"  data-aos="fade-left"
            data-aos-duration="1000">
            <h3 className="text-xl font-semibold mb-4 text-black font-3xl">Tech Stack</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white list-disc list-inside">
              <li>React & JavaScript (ES6+)</li>
              <li>Firebase Auth & Firestore</li>
              <li>Tailwind CSS</li>
              <li>Next.js (learning)</li>
              <li>Python + AI (Academic)</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>

     
      </div>
    </section>
  );
}

export default About;


