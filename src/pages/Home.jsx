
import image from '../assets/images/mehedi_image.jpg';
function Home() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12">
      
      {/* Left Content Box */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 pl-10 md:pl-20"
          data-aos="fade-down"
            data-aos-duration="1000"
        >
        <h2 className="text-4xl font-extrabold leading-snug">
          Hi! <br /> I'm <span className="text-blue-400">Mehedi Hasan</span>
        </h2>
        <p className="text-xl text-gray-300">
          A passionate Web Application Developer.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 pt-4 text-3xl">
          <a
            href="https://github.com/iammehedihasann"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hasanmehedix/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="mailto:mehediextreme@gmail.com"
            className="hover:text-red-400 transition"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
       >
        <img
          src={image}
          alt="Mehedi Hasan"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg border-4 border-[#02055D]  object-cover"
        />
      </div>
    </section>
  );
}

export default Home;
