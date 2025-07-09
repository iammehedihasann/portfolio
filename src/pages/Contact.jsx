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

function Contact() {
  // const [status, setStatus] = useState("");

  return (
    <section className="bg-gray-900 text-white px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact Info */}
        <div className="space-y-6"
        data-aos="fade-right"
        data-aos-duration="1000">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Let's Connect</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            I'm always open to discuss your project ideas or help with your web development needs.
            You can reach me directly via email or by submitting the form.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-blue-400 text-xl"></i>
              <span className="text-gray-200 ">mehediextreme@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fab fa-linkedin text-blue-400 text-xl"></i>
              <a
                href="https://www.linkedin.com/in/hasanmehedix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                linkedin.com/in/hasanmehedix
              </a>
            </div>
            <div className="flex items-center gap-4">
              <i className="fab fa-github text-blue-400 text-xl"></i>
              <a
                href="https://github.com/iammehedihasann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                github.com/iammehedihasann
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          action="https://formspree.io/f/xeokbygo"
          method="POST"
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          data-aos="fade-left"
         data-aos-duration="1000"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-4">Get in Touch</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 min-w-full  rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 px-6 rounded mt-4 mx-auto block mb-3"
          >
            Send Message
          </button>

          {status && (
            <p className="text-green-400 mt-2 text-center">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
