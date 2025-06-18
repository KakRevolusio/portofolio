import React from 'react';
import { useTheme } from "../context/ThemeContext";
import profileImage from '../assets/images/profile.jpg'; // Ganti dengan path gambar Anda

const Hero = () => {
  const { darkMode } = useTheme(); // Menggunakan context theme

  return (
    <section 
      className={`hero-section py-5 ${darkMode ? 'bg-dark text-light' : 'bg-primary text-white'}`}
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Bagian Teks */}
          <div className="col-lg-6 order-lg-1 order-2 mt-lg-0 mt-4">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-warning">John Doe</span>
            </h1>
            <p className="lead mb-4">
              Professional <span className="fw-bold">Frontend Developer</span> with 3+ years of experience building modern web applications
            </p>
            
            <div className="d-flex flex-wrap gap-3">
              <a 
                href="#contact" 
                className={`btn btn-lg px-4 ${darkMode ? 'btn-warning' : 'btn-light'}`}
              >
                <i className="fas fa-envelope me-2"></i> Contact Me
              </a>
              <a 
                href="#projects" 
                className={`btn btn-outline-${darkMode ? 'light' : 'dark'} btn-lg px-4`}
              >
                <i className="fas fa-briefcase me-2"></i> View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-4 social-links">
              <a href="#" className="text-decoration-none mx-2">
                <i className={`fab fa-github ${darkMode ? 'text-light' : 'text-white'} fs-4`}></i>
              </a>
              <a href="#" className="text-decoration-none mx-2">
                <i className={`fab fa-linkedin ${darkMode ? 'text-light' : 'text-white'} fs-4`}></i>
              </a>
              <a href="#" className="text-decoration-none mx-2">
                <i className={`fab fa-twitter ${darkMode ? 'text-light' : 'text-white'} fs-4`}></i>
              </a>
            </div>
          </div>

          {/* Bagian Gambar */}
          <div className="col-lg-6 order-lg-2 order-1 text-center">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="John Doe Profile" 
                className="img-fluid rounded-circle shadow-lg border border-4 border-white"
                style={{ 
                  maxWidth: '350px',
                  aspectRatio: '1/1',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;