// src/components/ProjectCard.jsx

function ProjectCard({ title, description, tech, image, github, live }) {
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Project Details */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="text-sm text-blue-200 mb-4">
          {tech.join(" • ")}
        </div>

        {/* Links */}
        <div className="flex justify-between gap-4 text-xl">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
              title="Live Preview"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
