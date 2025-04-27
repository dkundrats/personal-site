import { useState } from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');

  const filterProjects = (category) => {
    setFilter(category);
  };

  // Filter projects based on selected category
  const filteredProjects = 
    filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio-page">
      {/* Portfolio Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content">
            <h1>My Portfolio</h1>
            <p className="subtitle">A showcase of my projects and work</p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-filter">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => filterProjects('all')}
            >
              All
            </button>
            <button 
              className={filter === 'web' ? 'active' : ''} 
              onClick={() => filterProjects('web')}
            >
              Web Development
            </button>
            <button 
              className={filter === 'mobile' ? 'active' : ''} 
              onClick={() => filterProjects('mobile')}
            >
              Mobile Apps
            </button>
            <button 
              className={filter === 'design' ? 'active' : ''} 
              onClick={() => filterProjects('design')}
            >
              UI/UX Design
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div className="portfolio-item" key={index}>
                <div className="portfolio-image">
                  <div className="project-image-placeholder"></div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-overlay-content">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <i className="link-icon">🔗</i>
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <i className="github-icon">📂</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample project data
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication and payment processing.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and modern CSS techniques.",
    category: "web",
    tags: ["React", "CSS", "Responsive"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects with real-time updates.",
    category: "web",
    tags: ["React", "Firebase", "Redux"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Weather Forecast App",
    description: "A mobile app that displays weather forecasts using a third-party API.",
    category: "mobile",
    tags: ["React Native", "API Integration"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile application to track workout routines and fitness progress.",
    category: "mobile",
    tags: ["Flutter", "Firebase"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Dashboard UI Design",
    description: "A modern UI design for an analytics dashboard with data visualization.",
    category: "design",
    tags: ["Figma", "UI/UX"],
    liveLink: "#",
    githubLink: "#"
  }
];

export default PortfolioPage;