const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with cart functionality and payment processing.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/600x400"
  },
  {
    title: "Task Management App",
    description: "Productivity application for managing tasks with team collaboration.",
    technologies: ["React", "Firebase", "Material UI"],
    image: "https://via.placeholder.com/600x400"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with 5-day forecast using API.",
    technologies: ["JavaScript", "API", "CSS3"],
    image: "https://via.placeholder.com/600x400"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="project-card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h3 className="h5">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-1">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <a href="#" className="btn btn-primary me-2">Live Demo</a>
                  <a href="#" className="btn btn-outline-secondary">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;