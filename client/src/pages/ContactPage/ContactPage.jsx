import { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For now, we're just simulating a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Me</h1>
            <p className="subtitle">Let's discuss your project or opportunity</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>dkundrats@proton.me</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>Available at request</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>Asbury Park, NJ, USA</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Connect with Me</h3>
                <div className="socials">
                  <a href="https://github.com/dkundrats" target="_blank" rel="noopener noreferrer" className="social-link">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/david-kundrats/" target="_blank" rel="noopener noreferrer" className="social-link">
                    LinkedIn
                  </a>
                  </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <h2>Send Me a Message</h2>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map or Location Section (optional) */}
      <section className="map-section">
        <div className="map-placeholder">
          <p>Google Map or Location Embed Would Go Here</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
