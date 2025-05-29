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
            <img 
    src="http://127.0.0.1/pfp"/>
    <div className="bio-image-placeholder"></div>
            </div>
            <div className="bio-content">
              <h2>My Journey</h2>
             <p>
            I'm a passionate AI / ML Engineer specializing in agentic workflows and advanced 
 natural language processing systems. With several years of experience building 
 intelligent agents and conversational AI, I excel at designing RAG pipelines, 
 multi-agent systems, and LLM-powered applications using cutting-edge frameworks.
</p>
<p>
 My journey into AI began during college, where I discovered my passion for creating 
 autonomous systems that can reason, plan, and execute complex tasks. Since then, I've 
 developed sophisticated agentic architectures, from retrieval-augmented generation systems 
 to multi-modal AI agents, constantly exploring the frontiers of prompt engineering, 
 fine-tuning, and emergent AI capabilities.
</p>
<p>
 I believe in building robust, scalable agent frameworks and crafting AI solutions 
 that not only demonstrate technical excellence in areas like vector databases, 
 semantic search, and tool-calling, but also deliver transformative automation 
 and intelligent decision-making capabilities for real-world applications.
</p>
   
              
              <div className="bio-details">
                <div className="bio-detail">
                  <strong>Name:</strong>
                  <span>David Kundrats</span>
                </div>
                <div className="bio-detail">
                  <strong>Email:</strong>
                  <span>dkundrats@proton.me</span>
                </div>
                <div className="bio-detail">
                  <strong>Location:</strong>
                  <span>Asbury Park, NJ, USA</span>
                </div>
                <div className="bio-detail">
                  <strong>Experience:</strong>
                  <span>3 Years</span>
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
    position: "Gen AI Engineer",
    company: "Anika Systems Inc.",
    period: "March 2024 - Present",
    description:"Develop and maintain scalable, production ready LLM powered applications utilizing agentic workflows and RESTful APIs. Develop and deploy containerized (Docker) microservices that LLM Agents utilize to assist in their workflows." 
  },
  {
    position: "Research Assitant",
    company: "Monmouth University",
    period: "September 2023 - January 2024",
    description: "Conduct research concerning video generation and frame synchronization leveraging DNN and GAN models."
  },
  {
    position: "Corporate IT Automation",
    company: "HFA Public Accountants",
    period: "March 2023 - February 2024",
    description: "Automate document processing workflows in an Azure Cloud enviornment, extracting structured data from finanical documents and spreadsheets through RESTful APIs"
  }
];

// Sample data for education
const education = [
  {
    degree: "Master of Computer Science",
    institution: "Monmouth University",
    period: "2021 - 2024",
    description: "Specialized in Machine Learning and Computer Vision. Graduate research was oriented around utilizing transformers and GAN models to generate lip synchronization videos."
  },
  {
    degree: "Bachelor of Science, Business Administration",
    institution: "Monmouth University",
    period: "2015 - 2019",
    description: ""
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
