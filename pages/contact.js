import React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact Us - Shrimantyogi Chatrapati Shivray Upkram LLP</title>
          <meta property="og:title" content="Contact Us - Shrimantyogi Chatrapati Shivray Upkram LLP" />
          <meta name="description" content="Get in touch with Shrimantyogi Chatrapati Shivray Upkram LLP for agricultural export services. Contact us via phone, email, or visit our office in Pune." />
        </Head>
        <Navigation />
        
        <main className="contact-main">
          {/* Hero Section */}
          <section className="contact-hero">
            <div className="contact-hero-content">
              <div className="contact-hero-text">
                <span className="contact-hero-subtitle">Contact Us</span>
                <h1 className="contact-hero-title">
                  Get in Touch with Our Export Team
                </h1>
                <p className="contact-hero-description">
                  Ready to start your agricultural export journey? Contact our team for personalized solutions and expert guidance.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="contact-info">
            <div className="contact-info-content">
              <div className="contact-info-grid">
                {/* Phone */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06611 2.16708 8.43376 2.48353C8.8014 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="contact-card-title">Phone</h3>
                  <p className="contact-card-text">+91 (XXX) XXX-XXXX</p>
                  <p className="contact-card-subtext">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="contact-card-title">Email</h3>
                  <p className="contact-card-text">info@shrimantyogi.com</p>
                  <p className="contact-card-subtext">We'll respond within 24 hours</p>
                </div>

                {/* Address */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="contact-card-title">Address</h3>
                  <p className="contact-card-text">Pune, Maharashtra, India</p>
                  <p className="contact-card-subtext">Export Business Center</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form & Map Section */}
          <section className="contact-form-map">
            <div className="contact-form-map-content">
              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send us a Message</h2>
                  <p className="contact-form-subtitle">
                    Have questions about our export services? We'd love to hear from you.
                  </p>
                </div>
                
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <select id="subject" name="subject" className="form-select" required>
                      <option value="">Select a subject</option>
                      <option value="export-inquiry">Export Inquiry</option>
                      <option value="product-information">Product Information</option>
                      <option value="pricing">Pricing & Quotes</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      className="form-textarea"
                      placeholder="Tell us about your export requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="form-submit-btn">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div className="contact-map-section">
                <div className="map-header">
                  <h3 className="map-title">Find Us</h3>
                  <p className="map-subtitle">Visit our office in Pune</p>
                </div>
                
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588128304!2d73.85674331541647!3d18.520430387384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8d21%3A0xdbde5e14aecf4b90!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shrimantyogi Chatrapati Shivray Upkram LLP Location"
                  ></iframe>
                </div>
                
                <div className="map-info">
                  <div className="map-info-item">
                    <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
                  </div>
                  <div className="map-info-item">
                    <strong>Location:</strong> Pune, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          background: #ffffff;
        }

        .contact-main {
          padding-top: 80px;
        }

        /* Hero Section */
        .contact-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23b6472f" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23b6472f" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
          z-index: 1;
        }

        .contact-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .contact-hero-subtitle {
          color: #b6472f;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
        }

        .contact-hero-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          color: #2c3e50;
          margin-bottom: 24px;
        }

        .contact-hero-description {
          font-size: 18px;
          line-height: 1.6;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Contact Info Section */
        .contact-info {
          padding: 100px 0;
          background: #ffffff;
        }

        .contact-info-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .contact-info-card {
          background: #ffffff;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .contact-info-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #b6472f;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #b6472f, #d97757);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #ffffff;
        }

        .contact-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 12px;
        }

        .contact-card-text {
          font-size: 16px;
          color: #6c757d;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .contact-card-subtext {
          font-size: 14px;
          color: #6c757d;
          opacity: 0.8;
        }

        /* Contact Form & Map Section */
        .contact-form-map {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .contact-form-map-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .contact-form-section {
          background: #ffffff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-form-header {
          margin-bottom: 40px;
        }

        .contact-form-title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 12px;
        }

        .contact-form-subtitle {
          font-size: 16px;
          color: #6c757d;
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 12px 16px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #ffffff;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #b6472f;
          box-shadow: 0 0 0 3px rgba(182, 71, 47, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-btn {
          background: linear-gradient(135deg, #b6472f, #d97757);
          color: #ffffff;
          border: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(182, 71, 47, 0.3);
        }

        .contact-map-section {
          background: #ffffff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .map-header {
          margin-bottom: 30px;
        }

        .map-title {
          font-size: 24px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .map-subtitle {
          font-size: 16px;
          color: #6c757d;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .map-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .map-info-item {
          font-size: 14px;
          color: #6c757d;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .contact-form-map-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .contact-hero {
            padding: 60px 0;
          }

          .contact-hero-title {
            font-size: 32px;
          }

          .contact-info {
            padding: 60px 0;
          }

          .contact-form-map {
            padding: 60px 0;
          }

          .contact-form-section,
          .contact-map-section {
            padding: 30px 20px;
          }

          .contact-form-title {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
