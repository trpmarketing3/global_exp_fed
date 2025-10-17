import React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'

const About = () => {
  return (
    <>
      <div className="about-container">
         <Head>
           <title>About Us - Shrimantyogi Chatrapati Shivray Upkram LLP</title>
           <meta property="og:title" content="About Us - Shrimantyogi Chatrapati Shivray Upkram LLP" />
         </Head>
        <Navigation />
        
        <main className="about-main">
          {/* Hero Section */}
          <section className="about-hero">
            <div className="about-hero-content">
              <div className="about-hero-text">
                <span className="about-hero-subtitle">About Us</span>
                <h1 className="about-hero-title">
                  We are a market leader in the sourcing and exporting of agricultural commodities.
                </h1>
                 <p className="about-hero-description">
                   Welcome to Shrimantyogi Chatrapati Shivray Upkram LLP. We are a newly founded import-export company dedicated to connecting businesses worldwide. We provide reliable and efficient trade solutions.
                 </p>
              </div>
              <div className="about-hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Agricultural Export Business"
                  className="hero-img"
                />
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="about-mission">
            <div className="about-mission-content">
              <div className="mission-text">
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-description">
                  The world needed quality products in the agro-commodity market which was the reason we marched ahead into this venture.
                </p>
                <p className="mission-description">
                  And so today, our business is assisting the buyers worldwide in procuring the agro commodities they need with their demand in specifications of quality and price. We provide time-definite delivery and end-to-end visibility and control.
                </p>
              </div>
              <div className="mission-image">
                <img 
                  src="/aboutus1.jpg" 
                  alt="Mission"
                  className="mission-img"
                />
              </div>
            </div>
          </section>

          {/* Sustainability Section */}
          <section className="about-sustainability">
            <div className="sustainability-content">
              <div className="sustainability-image">
                <img 
                  src="/aboutus2.jpg" 
                  alt="Sustainability"
                  className="sustainability-img"
                />
              </div>
              <div className="sustainability-text">
                <h2 className="sustainability-title">Our Commitment to Sustainability</h2>
                <p className="sustainability-description">
                  We believe that sustainability is key to the future of agriculture, and we are committed to doing our part to protect the environment and conserve natural resources. We use practices such as crop rotation, natural pest control, and minimal tillage to promote soil health and reduce our environmental impact. We also work to minimize waste and use renewable energy sources in our operations.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Service Section */}
          <section className="about-service">
            <div className="service-content">
              <div className="service-text">
                <h2 className="service-title">Customer Service Excellence</h2>
                 <p className="service-description">
                    At Shrimantyogi Chatrapati Shivray Upkram LLP, we are dedicated to providing excellent customer service and satisfaction. We work closely with our customers to understand their needs and to provide them with the best possible products and service. Whether you are a farmer, retailer, or consumer, we are committed to serving you with the highest level of professionalism and care.
                 </p>
                <p className="service-description">
                  Thank you for choosing our company as your source for high-quality agricultural products. We look forward to working with you and contributing to a healthier, more sustainable future for agriculture.
                </p>
              </div>
              <div className="service-image">
                <img 
                  src="/aboutus3.jpg" 
                  alt="Customer Service"
                  className="service-img"
                />
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="about-why-choose">
            <div className="why-choose-content">
              <div className="why-choose-header">
                 <h2 className="why-choose-title">Why Choose Us (Shrimantyogi Chatrapati Shivray Upkram LLP)</h2>
                <p className="why-choose-subtitle">Discover what makes us the preferred choice for agricultural exports</p>
              </div>
              
              <div className="why-choose-grid">
                <div className="why-choose-card">
                  <div className="card-icon">💡</div>
                  <h3 className="card-title">Fresh Perspective and Innovation</h3>
                  <p className="card-description">
                    As a new player in the import-export industry, we bring fresh ideas and innovative solutions to meet the evolving needs of global trade. Our approach is agile, allowing us to quickly adapt to market changes and technological advancements.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">🌍</div>
                  <h3 className="card-title">Global Network</h3>
                  <p className="card-description">
                    Our extensive network of partners and agents worldwide enables us to provide comprehensive services across multiple regions. We have established strong relationships with suppliers and distributors, ensuring seamless operations.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">👥</div>
                  <h3 className="card-title">Customer-Centric Approach</h3>
                  <p className="card-description">
                    Building strong relationships with our clients is at the heart of our business. We prioritize understanding your needs and delivering personalized solutions that ensure your satisfaction and success.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">🤝</div>
                  <h3 className="card-title">Strategic Partnerships</h3>
                  <p className="card-description">
                    Although we are new, we have forged strategic partnerships with reliable suppliers, logistics providers, and customs brokers to ensure seamless operations. These relationships enable us to offer competitive pricing and timely deliveries.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">✅</div>
                  <h3 className="card-title">Commitment to Quality and Compliance</h3>
                  <p className="card-description">
                    We are dedicated to maintaining high standards of quality and full compliance with international trade regulations. Our meticulous attention to detail ensures that your shipments are handled with care and precision.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">🌱</div>
                  <h3 className="card-title">Sustainability Focus</h3>
                  <p className="card-description">
                    We are committed to incorporating sustainable practices in our operations. From eco-friendly packaging to reducing our carbon footprint, we strive to minimize our environmental impact.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">💬</div>
                  <h3 className="card-title">Transparent Communication</h3>
                  <p className="card-description">
                    Clear and open communication is essential to us. We keep you informed at every step of the process, ensuring that you are always aware of the status of your shipments and any developments.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">💰</div>
                  <h3 className="card-title">Competitive Pricing</h3>
                  <p className="card-description">
                    We offer competitive rates without compromising on quality. Our efficient logistics and strategic partnerships help us reduce costs, which we pass on to our clients.
                  </p>
                </div>

                <div className="why-choose-card">
                  <div className="card-icon">⚙️</div>
                  <h3 className="card-title">Customized Solutions</h3>
                  <p className="card-description">
                    We understand that each business has unique needs. Our team works closely with clients to develop tailored solutions that meet their specific requirements, from product sourcing to delivery and beyond.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="about-cta">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Export Journey?</h2>
               <p className="cta-description">
                 Welcome to Shrimantyogi Chatrapati Shivray Upkram LLP. We are a newly founded import-export company dedicated to connecting businesses worldwide. We provide reliable and efficient trade solutions.
               </p>
              <div className="cta-buttons">
                <button className="cta-button secondary">Contact Us</button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        .about-container {
          min-height: 100vh;
          background: #ffffff;
        }

        .about-main {
          padding-top: 80px;
        }

        /* Hero Section */
        .about-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
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

        .about-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .about-hero-text {
          animation: fadeInLeft 1s ease-out;
        }

        .about-hero-subtitle {
          color: #b6472f;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
        }

        .about-hero-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          color: #2c3e50;
          margin-bottom: 24px;
        }

        .about-hero-description {
          font-size: 18px;
          line-height: 1.6;
          color: #6c757d;
          margin-bottom: 32px;
        }

        .about-hero-image {
          animation: fadeInRight 1s ease-out;
        }

        .hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .hero-img:hover {
          transform: scale(1.02);
        }

        /* Mission Section */
        .about-mission {
          padding: 100px 0;
          background: #ffffff;
        }

        .about-mission-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .mission-title {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 24px;
        }

        .mission-description {
          font-size: 16px;
          line-height: 1.7;
          color: #6c757d;
          margin-bottom: 20px;
        }

        .mission-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Sustainability Section */
        .about-sustainability {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .sustainability-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .sustainability-title {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 24px;
        }

        .sustainability-description {
          font-size: 16px;
          line-height: 1.7;
          color: #6c757d;
        }

        .sustainability-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Service Section */
        .about-service {
          padding: 100px 0;
          background: #ffffff;
        }

        .service-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .service-title {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 24px;
        }

        .service-description {
          font-size: 16px;
          line-height: 1.7;
          color: #6c757d;
          margin-bottom: 20px;
        }

        .service-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Why Choose Us Section */
        .about-why-choose {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .why-choose-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .why-choose-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .why-choose-title {
          font-size: 42px;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 16px;
        }

        .why-choose-subtitle {
          font-size: 18px;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
        }

        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .why-choose-card {
          background: #ffffff;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .why-choose-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #b6472f;
        }

        .card-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 16px;
        }

        .card-description {
          font-size: 14px;
          line-height: 1.6;
          color: #6c757d;
        }

        /* CTA Section */
        .about-cta {
          padding: 100px 0;
          background: linear-gradient(135deg, #b6472f 0%, #d97757 100%);
          color: #ffffff;
          text-align: center;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .cta-description {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .cta-button {
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: #ffffff;
          color: #b6472f;
        }

        .cta-button.primary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
        }

        .cta-button.secondary:hover {
          background: #ffffff;
          color: #b6472f;
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .about-hero-content,
          .about-mission-content,
          .sustainability-content,
          .service-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-hero-title {
            font-size: 36px;
          }

          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 767px) {
          .about-hero {
            padding: 60px 0;
          }

          .about-hero-title {
            font-size: 28px;
          }

          .mission-title,
          .sustainability-title,
          .service-title {
            font-size: 28px;
          }

          .why-choose-title {
            font-size: 32px;
          }

          .why-choose-grid {
            grid-template-columns: 1fr;
          }

          .why-choose-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  )
}

export default About
