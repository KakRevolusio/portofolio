const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="mb-4">Who I Am</h3>
            <p className="mb-3">
              I'm a passionate web developer with 5 years of experience creating modern web applications.
              My journey in web development started when I was in college studying Computer Science.
            </p>
            <p className="mb-3">
              I specialize in building responsive, accessible, and performant user interfaces
              with modern technologies like React, Vue.js, and TypeScript.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading sci-fi novels,
              or playing guitar.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="h4 mb-4">My Skills</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> React</li>
                      <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> JavaScript</li>
                      <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> HTML5/CSS3</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Node.js</li>
                      <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> UI/UX Design</li>
                      <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Git</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;