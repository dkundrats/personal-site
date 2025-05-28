import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Me</h1>
            <p className="subtitle">Learn more about my journey, skills, and experience</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-image">
              {/* Placeholder for bio image */}
              <div className="bio-image-placeholder"></div>
            </div>
            <div className="bio-content">
              <h2>My Journey</h2>
              <p>
                I'm a passionate Full Stack Developer with a love for creating elegant, 
                efficient, and user-friendly applications. With several years of experience 
                in web development, I specialize in building modern web applications using 
                cutting-edge technologies.
              </p>
              <p>
                My journey in programming began when I was in college, where I discovered 
                my passion for solving problems through code. Since then, I've worked on 
                numerous projects, ranging from simple websites to complex web applications, 
                always striving to improve my skills and learn new technologies.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating applications 
                that not only meet the technical requirements but also provide an 
                exceptional user experience.
              </p>
              <div className="bio-details">
                <div className="bio-detail">
                  <strong>Name:</strong>
                  <span>David Smith</span>
                </div>
                <div className="bio-detail">
                  <strong>Email:</strong>
                  <span>david@example.com</span>
                </div>
                <div className="bio-detail">
                  <strong>Location:</strong>
                  <span>New York, USA</span>
                </div>
                <div className="bio-detail">
                  <strong>Experience:</strong>
                  <span>5+ Years</span>
                </div>
              </div>
              <a href="http://localhost:3000/resume" className="btn btn-primary">Download Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="section-header">
            <h2>Experience & Education</h2>
            <p>My professional journey and academic background</p>
          </div>

          <div className="experience-grid">
            <div className="experience-column">
              <h3 className="column-title">Work Experience</h3>
              {workExperience.map((experience, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{experience.position}</h4>
                    <h5>{experience.company}</h5>
                    <p className="timeline-date">{experience.period}</p>
                    <p>{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-column">
              <h3 className="column-title">Education</h3>
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="timeline-date">{edu.period}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section-detailed">
        <div className="container">
          <div className="section-header">
            <h2>Skills & Expertise</h2>
            <p>Technical skills I've acquired throughout my career</p>
          </div>

          <div className="skills-container">
            {skillCategories.map((category, index) => (
              <div className="skill-category" key={index}>
                <h3>{category.name}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skillIndex}>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for work experience
const workExperience = [
  {
    position: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Lead development of web applications using React, Node.js, and AWS. Collaborate with cross-functional teams to deliver high-quality software solutions."
  },
  {
    position: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2019 - 2022",
    description: "Developed responsive web applications using modern JavaScript frameworks. Implemented RESTful APIs and database solutions."
  },
  {
    position: "Junior Web Developer",
    company: "Web Crafters",
    period: "2017 - 2019",
    description: "Assisted in building websites and web applications. Gained experience in front-end development and version control systems."
  }
];

// Sample data for education
const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2015 - 2017",
    description: "Specialized in software engineering and web technologies. Completed thesis on modern JavaScript frameworks."
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2011 - 2015",
    description: "Studied programming fundamentals, algorithms, data structures, and web development."
  }
];

// Sample data for skill categories
const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "TypeScript", level: 85 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Rust", level: 75 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 75 },
      { name: "RESTful APIs", level: 85 }
    ]
  }
];

export default AboutPage;
