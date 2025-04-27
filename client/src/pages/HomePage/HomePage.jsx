import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">David</span></h1>
            <h2>Machine Learning Engineer</h2>
            <p>I build exceptional and accessible digital experiences for the web.</p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
            </div>
          </div>
          <div className="hero-image">
            {/* Placeholder for profile image */}
            <div className="profile-image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>My Skills</h2>
            <p>Here are some of the technologies I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Some of my recent work</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <div className="project-image-placeholder"></div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/portfolio" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for skills
const skills = [
  { name: "React", icon: "🔵" },
  { name: "JavaScript", icon: "🟡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "Rust", icon: "🦀" },
  { name: "CSS/SASS", icon: "🎨" },
  { name: "HTML", icon: "📄" },
  { name: "Git", icon: "🔄" }
];

// Sample data for featured projects
const featuredProjects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with React and modern CSS techniques.",
    tags: ["React", "CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects with real-time updates.",
    tags: ["React", "Firebase", "Redux"],
    liveLink: "#",
    githubLink: "#"
  }
];

export default HomePage;