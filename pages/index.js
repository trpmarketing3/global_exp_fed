import React from 'react'
import Head from 'next/head'


import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogCard from '../components/blog-card'

const Home = (props) => {
  React.useEffect(() => {
    // Services Carousel Functionality
    let currentSlide = 0;
    const totalSlides = 4;
    const slides = document.querySelectorAll('.services-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevServices');
    const nextBtn = document.getElementById('nextServices');

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
      
      // Update button states
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === totalSlides - 1;
    };

    const nextSlide = () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
      }
    };

    const prevSlide = () => {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
    };

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto-play functionality with better control
    let autoPlayInterval;
    
    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
        if (currentSlide < totalSlides - 1) {
          nextSlide();
        } else {
          currentSlide = 0;
          showSlide(currentSlide);
        }
      }, 4000); // 4 seconds for better viewing
    };
    
    const stopAutoPlay = () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };

    // Pause auto-play on hover and resume on leave
    const carousel = document.getElementById('servicesCarousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoPlay);
      carousel.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Start auto-play initially
    startAutoPlay();

    // Initialize
    showSlide(0);

    return () => {
      if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
      if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
      stopAutoPlay();
    };
  }, []);

  return (
    <>
      <div className="home-container1">
        <div className="scroll-indicator"></div>
        <Head>
          <title>Shrimantyogi Chatrapati Shivray Upkram LLP</title>
          <meta property="og:title" content="Shrimantyogi Chatrapati Shivray Upkram LLP - Premium Agricultural & Handicraft Export" />
        </Head>
        <Navigation></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-heading-container1">
                 <h1 className="home-text10 Heading1">
                   <span>Shrimantyogi Chatrapati Shivray Upkram LLP</span>
                   <br></br>
                   <span>Premium Export Excellence</span>
                 </h1>
                 <span className="home-text13">
                   <span>
                     We specialize in exporting premium agricultural products, spices,
                   </span>
                   <br></br>
                   <span>
                     {' '}
                     handicrafts, and textiles to global markets with quality assurance.
                   </span>
                 </span>
                <a href="#products" className="home-primary1 button-primary button-lg button">
                  Explore Our Products
                </a>
              </div>
               <div className="home-gallery">
                 <div className="home-container2">
                   <img
                     alt="Fresh Agricultural Products"
                     src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                     className="home-image1"
                   />
                 </div>
                 <div className="home-container3">
                   <img
                     alt="Premium Fresh Fruits"
                     src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                     className="home-image2"
                   />
                   <img
                     alt="Organic Vegetables"
                     src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                     className="home-image3"
                   />
                 </div>
                 <div className="home-container4">
                   <img
                     alt="Global Agricultural Trade"
                     src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                     className="home-image4"
                   />
                   <div className="home-container5">
                     <img
                       alt="Premium Spices and Herbs"
                       src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                       className="home-image5"
                     />
                     <img
                       alt="Quality Agricultural Products"
                       src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                       className="home-image6"
                     />
                   </div>
                 </div>
               </div>
            </div>
          </div>
          <div className="home-services section-container">
            <div className="home-max-width2 max-content-container">
               <div className="home-heading-container2">
                 <div className="home-text-container1">
                   <span className="home-text17">our services</span>
                   <h2 className="Heading2">
                     <span>
                       We provide comprehensive export
                       <span
                         dangerouslySetInnerHTML={{
                           __html: ' ',
                         }}
                       />
                     </span>
                     <br></br>
                     <span>solutions & services</span>
                   </h2>
                   <p className="services-description">
                     From sourcing to shipping, we handle every aspect of your export needs with 
                     professional expertise and quality assurance. Our comprehensive services ensure 
                     your products reach global markets efficiently and successfully.
                   </p>
                 </div>
                 <div className="home-controls">
                   <button className="control-btn" id="prevServices" title="Previous Services">
                     <svg viewBox="0 0 1024 1024" className="home-icon10">
                       <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                     </svg>
                   </button>
                   <button className="control-btn" id="nextServices" title="Next Services">
                     <svg viewBox="0 0 1024 1024" className="home-icon12">
                       <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                     </svg>
                   </button>
                 </div>
               </div>
               <div className="home-cards-container" id="servicesCarousel">
                 <div className="services-slide active">
                   <ServicesCard
                     text="Agricultural Exports"
                     text1="Export premium agricultural products including onions, tomatoes, potatoes, ginger, garlic, turmeric, and fresh fruits with quality certification."
                     text2="Learn more"
                     imageSrc="/agriexp.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="Spices & Powders"
                     text1="Export high-quality spices, onion powder, drumstick powder, and traditional Indian spices to global markets with authentic taste."
                     text2="Learn more"
                     imageSrc="/spice.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="Handicrafts & Textiles"
                     text1="Export authentic Indian handicrafts, bamboo products, and traditional textiles including sarees and garments with traditional craftsmanship."
                     text2="Learn more"
                     imageSrc="/handicraft.jpg"
                   ></ServicesCard>
                 </div>
                 
                 <div className="services-slide">
                   <ServicesCard
                     text="Export Documentation"
                     text1="Complete export documentation services including certificates, permits, and compliance with international trade regulations."
                     text2="Learn more"
                     imageSrc="/8400.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="Quality Control"
                     text1="Rigorous quality inspection and testing services to ensure all products meet international standards and customer requirements."
                     text2="Learn more"
                     imageSrc="/agriexp.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="Logistics & Shipping"
                     text1="End-to-end logistics solutions including packaging, shipping, customs clearance, and delivery to global destinations."
                     text2="Learn more"
                     imageSrc="/spice.jpg"
                   ></ServicesCard>
                 </div>
                 
                 <div className="services-slide">
                   <ServicesCard
                     text="Market Research"
                     text1="Comprehensive market research and analysis to identify new export opportunities and market trends for your products."
                     text2="Learn more"
                     imageSrc="/handicraft.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="Custom Solutions"
                     text1="Tailored export solutions designed specifically for your business needs and target markets with personalized service."
                     text2="Learn more"
                     imageSrc="/8400.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="After-Sales Support"
                     text1="Complete after-sales support including customer service, product support, and ongoing business relationship management."
                     text2="Learn more"
                     imageSrc="/agriexp.jpg"
                   ></ServicesCard>
                 </div>
                 
                 <div className="services-slide">
                   <ServicesCard
                     text="Global Trade Solutions"
                     text1="Comprehensive global trade solutions including market analysis, trade compliance, and international business development services."
                     text2="Learn more"
                     imageSrc="/spice.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="Product Certification"
                     text1="Professional product certification services ensuring compliance with international standards and quality requirements for global markets."
                     text2="Learn more"
                     imageSrc="/handicraft.jpg"
                   ></ServicesCard>
                   <ServicesCard
                     text="Supply Chain Management"
                     text1="End-to-end supply chain management including sourcing, quality control, logistics, and delivery optimization for global trade."
                     text2="Learn more"
                     imageSrc="/8400.jpg"
                   ></ServicesCard>
                 </div>
               </div>
               
               <div className="services-indicators">
                 <span className="indicator active" data-slide="0"></span>
                 <span className="indicator" data-slide="1"></span>
                 <span className="indicator" data-slide="2"></span>
                 <span className="indicator" data-slide="3"></span>
               </div>
            </div>
          </div>
          <div className="section-container">
            <div className="home-max-width3 max-content-container">
              <div className="home-text-container2">
                 <span className="home-text22">our products</span>
                 <h2 className="home-text23 Heading2">
                   <span>Explore our export product portfolio</span>
                 </h2>
                 <span className="home-text25">
                   <span>
                     Discover our comprehensive range of agricultural products, spices,
                     handicrafts, and textiles exported to global markets
                     <span
                       dangerouslySetInnerHTML={{
                         __html: ' ',
                       }}
                     />
                   </span>
                   <br></br>
                   <span>
                     with premium quality and authentic Indian craftsmanship.
                   </span>
                 </span>
      
              </div>
               <div className="home-tab-selector-header">
                 <span className="home-text29 tab-selector-btn">
                   Agricultural Products
                 </span>
                 <span className="home-text30 tab-selector-btn">
                   Spices & Powders
                 </span>
                 <span className="home-text31 tab-selector-btn">Handicrafts</span>
                 <span className="home-text32 tab-selector-btn">Textiles</span>
                 <span className="home-text33 tab-selector-btn">Bamboo Products</span>
                 <span className="tab-selector-btn">Traditional Items</span>
               </div>
               <div className="home-tab-selector-cards-container">
                 <PortofolioCard
                   imageSrc="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                   projectTitle="Fresh Agricultural Products"
                   rootClassName="portofolio-cardroot-class-name"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                   projectTitle="Premium Spices & Powders"
                   rootClassName="portofolio-cardroot-class-name5"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                   projectTitle="Traditional Handicrafts"
                   rootClassName="portofolio-cardroot-class-name4"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="/bambu-prod.jpg"
                   projectTitle="Bamboo Products"
                   rootClassName="portofolio-cardroot-class-name3"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="/TraditionalTextiles.jpg"
                   projectTitle="Traditional Textiles"
                   rootClassName="portofolio-cardroot-class-name2"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="/sugar-jaggary.jpg"
                   projectTitle="Sugar & Jaggery Products"
                   rootClassName="portofolio-cardroot-class-name1"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                   projectTitle="Organic Fruits & Vegetables"
                   rootClassName="portofolio-cardroot-class-name6"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="/chiwada.jpg"
                   projectTitle="Traditional Chivda"
                   rootClassName="portofolio-cardroot-class-name7"
                 ></PortofolioCard>
                 <PortofolioCard
                   imageSrc="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                   projectTitle="Export Garments"
                   rootClassName="portofolio-cardroot-class-name8"
                 ></PortofolioCard>
               </div>
            </div>
          </div>
          <div className="home-about section-container">
            <div className="home-max-width4 max-content-container">
              <div className="home-text-container3">
                <span className="home-text35">about us</span>
                 <h2 className="home-text36 Heading2">
                   <span>
                     We connect global markets with
                     <span
                       dangerouslySetInnerHTML={{
                         __html: ' ',
                       }}
                     />
                   </span>
                   <br></br>
                   <span>premium Indian exports</span>
                 </h2>
                 <span className="home-text40">
                   Shrimantyogi Chatrapati Shivray Upkram LLP is a trusted export company specializing in 
                   agricultural products, spices, handicrafts, and traditional Indian goods for global markets.
                 </span>
                 <div className="home-checklist">
                   <div className="home-check-item1">
                     <svg viewBox="0 0 1024 1024" className="home-icon14">
                       <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                     </svg>
                     <span className="home-text41">
                       Premium quality agricultural products
                     </span>
                   </div>
                   <div className="home-check-item2">
                     <svg viewBox="0 0 1024 1024" className="home-icon16">
                       <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                     </svg>
                     <span className="home-text42">
                       Authentic Indian handicrafts
                     </span>
                   </div>
                   <div className="home-check-item3">
                     <svg viewBox="0 0 1024 1024" className="home-icon18">
                       <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                     </svg>
                     <span className="home-text43">
                       Traditional spices & powders
                     </span>
                   </div>
                   <div className="home-check-item4">
                     <svg viewBox="0 0 1024 1024" className="home-icon20">
                       <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                     </svg>
                     <span className="home-text44">
                       Global export expertise
                     </span>
                   </div>
                   <div className="home-check-item5">
                     <svg viewBox="0 0 1024 1024" className="home-icon22">
                       <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                     </svg>
                     <span className="home-text45">
                       Bamboo & textile products
                     </span>
                   </div>
                   <div className="home-check-item6">
                     <svg viewBox="0 0 1024 1024" className="home-icon24">
                       <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                     </svg>
                     <span className="home-text46">
                       Quality assurance & certification
                     </span>
                   </div>
                 </div>
              </div>
               <div className="home-image-container">
                 <img
                   alt="Agricultural Import Export Business"
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                   className="home-image7"
                 />
               </div>
            </div>
          </div>
          <div className="home-process section-container">
            <div className="home-max-width5 max-content-container">
              <span className="home-text47">Our process</span>
               <h2 className="home-text48 Heading2">
                 <span>
                   We follow a proven three-step export process.
                   <span
                     dangerouslySetInnerHTML={{
                       __html: ' ',
                     }}
                   />
                 </span>
                 <br></br>
               </h2>
               <div className="home-step1">
                 <span className="home-text52">01</span>
                 <div className="home-container6">
                   <span className="home-text53">Product Sourcing & Selection</span>
                   <span className="home-text54">
                     We source premium agricultural products, spices, handicrafts, and traditional goods 
                     from trusted suppliers across India, ensuring authentic quality and traditional 
                     craftsmanship in every product we export.
                     <span
                       dangerouslySetInnerHTML={{
                         __html: ' ',
                       }}
                     />
                   </span>
                 </div>
               </div>
               <div className="home-step2">
                 <span className="home-text55">02</span>
                 <div className="home-container7">
                   <span className="home-text56">
                     Quality Control & Export Certification
                     <span
                       dangerouslySetInnerHTML={{
                         __html: ' ',
                       }}
                     />
                   </span>
                   <span className="home-text57">
                     Every product undergoes rigorous quality inspection, testing, and export certification 
                     processes to ensure it meets international standards for food safety, authenticity, 
                     and premium quality before global shipment.
                   </span>
                 </div>
               </div>
               <div className="home-step3">
                 <span className="home-text58">03</span>
                 <div className="home-container8">
                   <span className="home-text59">Global Export & Delivery</span>
                   <span className="home-text60">
                     We handle all export documentation, customs clearance, and international logistics 
                     to ensure your products reach global markets efficiently and in perfect condition, 
                     maintaining the authentic Indian quality and tradition.
                   </span>
                 </div>
               </div>
            </div>
          </div>
          {/* <div className="section-container">
            <div className="home-max-width6 max-content-container">
              <span className="home-text61">from blog</span>
              <h2 className="home-text62 Heading2">
                <span>Latest agricultural insights and news</span>
              </h2>
              <span className="home-text64">
                <span>
                  Stay updated with the latest trends, insights, and news from
                  the agricultural industry, including market updates, seasonal
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  product availability, and sustainable farming practices from around the world.
                </span>
              </span>
              <button className="home-primary3 button-secondary button-lg button">
                Read our blog
              </button>
              <div className="home-blog-cards-container">
                <BlogCard 
                  text="Sustainable Farming Practices"
                  text1="Dec 8, 2023"
                  button="Agriculture"
                  imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                  rootClassName="blog-cardroot-class-name"
                ></BlogCard>
                <BlogCard
                  text1="Nov 15, 2023"
                  button="Market Trends"
                  text="Global Fruit Market Update"
                  imageSrc="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                  rootClassName="blog-cardroot-class-name1"
                ></BlogCard>
                <BlogCard
                  text1="Oct 22, 2023"
                  button="Quality Control"
                  text="Cold Chain Logistics Guide"
                  imageSrc="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                ></BlogCard>
              </div>
            </div>
           </div> */}
           <div className="home-testimonials section-container">
             <div className="home-max-width6 max-content-container">
               <span className="home-text61">testimonials</span>
               <h2 className="home-text62 Heading2">
                 <span>What our clients say</span>
               </h2>
               <span className="home-text64">
                 <span>
                   Hear from our satisfied customers who have experienced
                   <span
                     dangerouslySetInnerHTML={{
                       __html: ' ',
                     }}
                   />
                 </span>
                 <br></br>
                 <span>
                   the quality and reliability of our export services.
                 </span>
               </span>
               <div className="testimonials-stats">
                 <div className="stat-item">
                   <span className="stat-number">500+</span>
                   <span className="stat-label">Happy Clients</span>
                 </div>
                 <div className="stat-item">
                   <span className="stat-number">50+</span>
                   <span className="stat-label">Countries</span>
                 </div>
                 <div className="stat-item">
                   <span className="stat-number">99%</span>
                   <span className="stat-label">Satisfaction</span>
                 </div>
               </div>
               <div className="home-testimonials-container">
                 <div className="testimonial-card">
                   <div className="testimonial-content">
                     <div className="testimonial-quote">
                       "Shrimantyogi Chatrapati Shivray Upkram LLP has been our trusted partner for agricultural exports. Their quality control and timely delivery are exceptional."
                     </div>
                     <div className="testimonial-author">
                       <div className="author-info">
                         <span className="author-name">Rajesh Kumar</span>
                         <span className="author-title">CEO, Global Foods Ltd.</span>
                       </div>
                       <div className="testimonial-rating">
                         ⭐⭐⭐⭐⭐
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="testimonial-card">
                   <div className="testimonial-content">
                     <div className="testimonial-quote">
                       "The spices and handicrafts we receive are always of premium quality. Their export documentation process is seamless and professional."
                     </div>
                     <div className="testimonial-author">
                       <div className="author-info">
                         <span className="author-name">Sarah Johnson</span>
                         <span className="author-title">Import Manager, European Trade Co.</span>
                       </div>
                       <div className="testimonial-rating">
                         ⭐⭐⭐⭐⭐
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="testimonial-card">
                   <div className="testimonial-content">
                     <div className="testimonial-quote">
                       "Outstanding service and authentic products. They have helped us expand our business to new markets with their reliable export solutions."
                     </div>
                     <div className="testimonial-author">
                       <div className="author-info">
                         <span className="author-name">Ahmed Hassan</span>
                         <span className="author-title">Director, Middle East Imports</span>
                       </div>
                       <div className="testimonial-rating">
                         ⭐⭐⭐⭐⭐
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="home-banner section-container">
            <div className="home-max-width7 max-content-container">
              <span className="home-text68">ready to start?</span>
              <h2 className="home-text69 Heading2">
                <span>Let's work together!</span>
              </h2>
              <span className="home-text71">
                <span>
                  Ready to source premium agricultural products for your business?
                  Contact us today to discuss your import/export needs and discover
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  how we can help you access the finest products from around the world.
                </span>
              </span>
              <a href="/contact" className="home-primary4 button-lg button-secondary-white button">
                Get in touch
              </a>
            </div>
          </div>
        </main>
        
        {/* Simple Footer */}
        <footer className="simple-footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/about" className="footer-link">About</a>
              <a href="#products" className="footer-link">Products</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
            
            <div className="footer-contact">
              <span className="contact-text">+91 (XXX) XXX-XXXX</span>
              <span className="contact-text">info@shrimantyogi.com</span>
              <span className="contact-text">Pune, Maharashtra, India</span>
            </div>
            
            <div className="footer-bottom">
              <p className="footer-copyright">&copy; 2024 Shrimantyogi Chatrapati Shivray Upkram LLP. All rights reserved.</p>
            </div>
          </div>
        </footer>
                  
      </div>
      <style jsx>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          
          @keyframes slideInFromBottom {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .loading-shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
          }
          
          .home-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          
          .scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #b6472f, #4a90e2, #b6472f);
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
            z-index: 1000;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
            overflow: hidden;
          }
          .home-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(182, 71, 47, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%);
            animation: pulse 6s ease-in-out infinite;
            pointer-events: none;
          }
          .home-max-width1 {
            margin-top: var(--dl-layout-space-threeunits);
          }
          .home-heading-container1 {
            flex: 1;
            display: flex;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            text-align: center;
            margin-bottom: var(--dl-layout-space-halfunit);
            animation: fadeInUp 1s ease-out;
          }
          .home-text13 {
            color: var(--dl-color-scheme-black);
            font-size: 18px;
            text-align: center;
            line-height: 1.44;
            margin-bottom: var(--dl-layout-space-twounits);
            animation: fadeInUp 1s ease-out 0.2s both;
          }
          .home-primary1 {
            margin-bottom: var(--dl-layout-space-threeunits);
            animation: fadeInUp 1s ease-out 0.4s both;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }
          .home-primary1:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          .home-gallery {
            width: 100%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
            animation: fadeInUp 1s ease-out 0.6s both;
          }
          .home-container2 {
            width: 25%;
            align-self: stretch;
          }
          .home-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius8);
            transition: all 0.3s ease;
            animation: float 3s ease-in-out infinite;
          }
          .home-image1:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          }
          .home-container3 {
            width: 25%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
            flex-direction: column;
          }
           .home-image2 {
             width: 100%;
             object-fit: cover;
             border-radius: var(--dl-layout-radius-radius8);
             transition: all 0.3s ease;
           }
           .home-image2:hover {
             transform: scale(1.05);
             box-shadow: 0 15px 30px rgba(0,0,0,0.2);
           }
           .home-image3 {
             width: 100%;
             height: 100%;
             object-fit: cover;
             border-radius: var(--dl-layout-radius-radius8);
             transition: all 0.3s ease;
           }
           .home-image3:hover {
             transform: scale(1.05);
             box-shadow: 0 15px 30px rgba(0,0,0,0.2);
           }
          .home-container4 {
            width: 50%;
            display: flex;
            grid-gap: 20px;
            flex-direction: column;
          }
           .home-image4 {
             width: 100%;
             height: 100%;
             object-fit: cover;
             border-radius: var(--dl-layout-radius-radius8);
             transition: all 0.3s ease;
           }
           .home-image4:hover {
             transform: scale(1.05);
             box-shadow: 0 15px 30px rgba(0,0,0,0.2);
           }
          .home-container5 {
            width: 100%;
            display: flex;
            grid-gap: 20px;
          }
           .home-image5 {
             flex: 1;
             height: 100%;
             object-fit: cover;
             border-radius: var(--dl-layout-radius-radius8);
             transition: all 0.3s ease;
           }
           .home-image5:hover {
             transform: scale(1.05);
             box-shadow: 0 15px 30px rgba(0,0,0,0.2);
           }
           .home-image6 {
             flex: 1;
             height: 100%;
             object-fit: cover;
             border-radius: var(--dl-layout-radius-radius8);
             transition: all 0.3s ease;
           }
           .home-image6:hover {
             transform: scale(1.05);
             box-shadow: 0 15px 30px rgba(0,0,0,0.2);
           }
          .home-services {
            display: flex;
            padding-top: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width2 {
            flex-direction: column;
          }
          .home-heading-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text17 {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-controls {
            display: grid;
            grid-gap: 12px;
            grid-template-columns: 1fr 1fr;
          }
          .home-icon10 {
            width: 16px;
            height: 16px;
          }
          .home-icon12 {
            width: 16px;
            height: 16px;
          }
           .home-cards-container {
             width: 100%;
             display: flex;
             grid-gap: 20px;
             animation: fadeInUp 1s ease-out 0.8s both;
             position: relative;
             overflow: hidden;
           }
           
           .services-description {
             color: var(--dl-color-scheme-black80);
             font-size: 16px;
             line-height: 1.6;
             margin-top: var(--dl-layout-space-unit);
             max-width: 600px;
           }
           
           .services-slide {
             display: flex;
             grid-gap: 20px;
             width: 100%;
             transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
             opacity: 0;
             transform: translateX(100%);
             position: absolute;
             top: 0;
             left: 0;
           }
           
           .services-slide.active {
             opacity: 1;
             transform: translateX(0);
             position: relative;
           }
           
           .services-slide.prev {
             transform: translateX(-100%);
             opacity: 0;
           }
           
           .services-slide.next {
             transform: translateX(100%);
             opacity: 0;
           }
           
           .services-indicators {
             display: flex;
             justify-content: center;
             gap: 12px;
             margin-top: var(--dl-layout-space-twounits);
           }
           
           .indicator {
             width: 12px;
             height: 12px;
             border-radius: 50%;
             background-color: rgba(182, 71, 47, 0.3);
             cursor: pointer;
             transition: all 0.3s ease;
           }
           
           .indicator.active {
             background-color: var(--dl-color-scheme-brown);
             transform: scale(1.2);
           }
           
           .indicator:hover {
             background-color: var(--dl-color-scheme-brown);
             transform: scale(1.1);
           }
           
           .control-btn {
             transition: all 0.3s ease;
             cursor: pointer;
             border: 2px solid var(--dl-color-scheme-brown);
             background: transparent;
             padding: 12px;
             border-radius: 50%;
             display: flex;
             align-items: center;
             justify-content: center;
           }
           
           .control-btn:hover {
             background-color: var(--dl-color-scheme-brown);
             transform: scale(1.1);
           }
           
           .control-btn:hover .home-icon10,
           .control-btn:hover .home-icon12 {
             fill: white;
           }
           
           .control-btn:disabled {
             opacity: 0.5;
             cursor: not-allowed;
             transform: none;
           }
           
           .control-btn:disabled:hover {
             background: transparent;
             transform: none;
           }
           
           /* Enhanced carousel animations */
           .home-cards-container {
             min-height: 500px;
             position: relative;
           }
           
           .services-slide {
             animation: slideInFromRight 0.6s ease-out;
           }
           
           @keyframes slideInFromRight {
             0% {
               opacity: 0;
               transform: translateX(50px);
             }
             100% {
               opacity: 1;
               transform: translateX(0);
             }
           }
           
           /* Image enhancements */
           .services-slide img {
             transition: transform 0.3s ease;
             border-radius: 8px;
           }
           
           .services-slide:hover img {
             transform: scale(1.02);
           }
          .home-max-width3 {
            flex-direction: column;
          }
          .home-text-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .home-text22 {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text23 {
            text-align: center;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text25 {
            color: var(--dl-color-scheme-black80);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .home-tab-selector-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-text29 {
            margin-right: 30px;
          }
          .home-text30 {
            margin-right: 30px;
          }
          .home-text31 {
            margin-right: 30px;
          }
          .home-text32 {
            margin-right: 30px;
          }
          .home-text33 {
            margin-right: 30px;
          }
          .home-tab-selector-cards-container {
            width: 100%;
            display: grid;
            grid-row-gap: 40px;
            grid-column-gap: 20px;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(3, 1fr);
            animation: fadeInUp 1s ease-out 1s both;
          }
          
          /* Ensure consistent card sizing */
          .home-tab-selector-cards-container > * {
            width: 100%;
            height: auto;
            min-height: 350px;
            display: flex;
            flex-direction: column;
          }
          .home-about {
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width4 {
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text-container3 {
            flex: 1;
            width: 40%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            animation: fadeInLeft 1s ease-out 1.2s both;
          }
          .home-text35 {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text36 {
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-text40 {
            color: var(--dl-color-scheme-black80);
            line-height: 26px;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .home-checklist {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-check-item1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .home-icon14 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-layout-space-unit);
          }
          .home-text41 {
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .home-icon16 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-layout-space-unit);
          }
          .home-text42 {
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .home-icon18 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-layout-space-unit);
          }
          .home-text43 {
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .home-icon20 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-layout-space-unit);
          }
          .home-text44 {
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item5 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
          }
          .home-icon22 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-layout-space-unit);
          }
          .home-text45 {
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item6 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon24 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-layout-space-unit);
          }
          .home-text46 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image7 {
            flex: 1;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius8);
            animation: fadeInRight 1s ease-out 1.4s both;
            transition: all 0.3s ease;
          }
          .home-image7:hover {
            transform: scale(1.02);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          }
          .home-process {
            background-color: var(--dl-color-scheme-lightblue);
          }
          .home-max-width5 {
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text47 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text48 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-layout-space-fourunits);
          }
          .home-step1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            animation: fadeInLeft 1s ease-out 1.6s both;
            transition: all 0.3s ease;
          }
          .home-step1:hover {
            background-color: rgba(255, 255, 255, 0.05);
            transform: translateX(10px);
          }
          .home-text52 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container6 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text53 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text54 {
            color: var(--dl-color-scheme-white80);
          }
          .home-step2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            animation: fadeInLeft 1s ease-out 1.8s both;
            transition: all 0.3s ease;
          }
          .home-step2:hover {
            background-color: rgba(255, 255, 255, 0.05);
            transform: translateX(10px);
          }
          .home-text55 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container7 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text56 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text57 {
            color: var(--dl-color-scheme-white80);
          }
          .home-step3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            animation: fadeInLeft 1s ease-out 2s both;
            transition: all 0.3s ease;
          }
          .home-step3:hover {
            background-color: rgba(255, 255, 255, 0.05);
            transform: translateX(10px);
          }
          .home-text58 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container8 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text59 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text60 {
            color: var(--dl-color-scheme-white80);
          }
          .home-max-width6 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text61 {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text62 {
            text-align: center;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text64 {
            color: var(--dl-color-scheme-black80);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .home-primary3 {
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .home-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
            animation: fadeInUp 1s ease-out 2.2s both;
          }
          
          /* Enhanced Testimonials Section Styles */
          .home-testimonials {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: var(--dl-layout-space-sixunits) 0;
            position: relative;
            overflow: hidden;
          }
          
          .home-testimonials::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23b6472f" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23b6472f" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23b6472f" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="%23b6472f" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="%23b6472f" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
            z-index: 1;
          }
          
          .home-testimonials-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: var(--dl-layout-space-fourunits);
            animation: fadeInUp 1s ease-out 1.2s both;
            position: relative;
            z-index: 2;
          }
          
          .testimonial-card {
            background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 24px;
            padding: var(--dl-layout-space-fourunits);
            box-shadow: 
              0 20px 40px rgba(0, 0, 0, 0.1),
              0 8px 16px rgba(0, 0, 0, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
          }
          
          .testimonial-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #b6472f, #d97757, #b6472f);
            border-radius: 24px 24px 0 0;
          }
          
          .testimonial-card::after {
            content: '"';
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 60px;
            color: rgba(182, 71, 47, 0.1);
            font-family: serif;
            line-height: 1;
          }
          
          .testimonial-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 
              0 32px 64px rgba(0, 0, 0, 0.15),
              0 16px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
            border-color: rgba(182, 71, 47, 0.2);
          }
          
          .testimonial-content {
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
            z-index: 1;
          }
          
          .testimonial-quote {
            font-size: 17px;
            line-height: 1.7;
            color: var(--dl-color-scheme-black80);
            margin-bottom: var(--dl-layout-space-twounits);
            font-style: italic;
            flex-grow: 1;
            position: relative;
            padding-left: 20px;
          }
          
          .testimonial-quote::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(180deg, #b6472f, #d97757);
            border-radius: 2px;
          }
          
          .testimonial-author {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            padding-top: var(--dl-layout-space-unit);
            border-top: 1px solid rgba(182, 71, 47, 0.1);
          }
          
          .author-info {
            display: flex;
            flex-direction: column;
          }
          
          .author-name {
            font-weight: 700;
            font-size: 16px;
            color: var(--dl-color-scheme-brown);
            margin-bottom: 4px;
            letter-spacing: 0.5px;
          }
          
          .author-title {
            font-size: 14px;
            color: var(--dl-color-scheme-black60);
            font-weight: 500;
          }
          
          .testimonial-rating {
            font-size: 20px;
            color: #ffc107;
            text-shadow: 0 1px 2px rgba(255, 193, 7, 0.3);
            display: flex;
            gap: 2px;
          }
          
          /* Add floating animation to cards */
          .testimonial-card:nth-child(1) {
            animation: float 6s ease-in-out infinite;
          }
          
          .testimonial-card:nth-child(2) {
            animation: float 6s ease-in-out infinite 2s;
          }
          
          .testimonial-card:nth-child(3) {
            animation: float 6s ease-in-out infinite 4s;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          /* Stats Section */
          .testimonials-stats {
            display: flex;
            justify-content: center;
            gap: 60px;
            margin: var(--dl-layout-space-fourunits) 0;
            padding: var(--dl-layout-space-twounits) 0;
            background: linear-gradient(135deg, rgba(182, 71, 47, 0.05), rgba(182, 71, 47, 0.1));
            border-radius: 20px;
            border: 1px solid rgba(182, 71, 47, 0.1);
          }
          
          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .stat-number {
            font-size: 36px;
            font-weight: 800;
            color: var(--dl-color-scheme-brown);
            line-height: 1;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #b6472f, #d97757);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .stat-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--dl-color-scheme-black60);
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .home-banner {
            background-color: var(--dl-color-scheme-brown);
            position: relative;
            overflow: hidden;
          }
          .home-banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(182, 71, 47, 0.1), rgba(182, 71, 47, 0.3));
            animation: pulse 4s ease-in-out infinite;
          }
          .home-max-width7 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text68 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text69 {
            color: var(--dl-color-scheme-white);
            text-align: center;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text71 {
            color: var(--dl-color-scheme-white);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .home-primary4 {
            margin-bottom: var(--dl-layout-space-threeunits);
            animation: slideInFromBottom 1s ease-out 2.4s both;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            text-decoration: none;
            display: inline-block;
          }
          .home-primary4::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          .home-primary4:hover::before {
            left: 100%;
          }
          .home-primary4:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          }
          .home-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text75 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-text76 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text77 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text79 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-text80 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text81 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-contact-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text83 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-text84 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text92 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-textinput {
            outline: none;
            align-self: stretch;
            padding-top: 4px;
            border-color: rgba(0, 0, 0, 0.1);
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-layout-space-twounits);
            padding-bottom: 4px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: #d9d9d9;
          }
          
          /* Simple Footer Styles */
          .simple-footer {
            background-color: var(--dl-color-scheme-white);
            color: var(--dl-color-scheme-black);
            padding: 30px 0;
            width: 100%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            text-align: center;
          }
          
          .footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          
          .footer-link {
            color: var(--dl-color-scheme-black60);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 5px 0;
          }
          
          .footer-link:hover {
            color: var(--dl-color-scheme-brown);
          }
          
          .footer-contact {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          
          .contact-text {
            color: var(--dl-color-scheme-black60);
            font-size: 14px;
          }
          
          .footer-bottom {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding-top: 15px;
          }
          
          .footer-copyright {
            color: var(--dl-color-scheme-black60);
            font-size: 12px;
            margin: 0;
          }
          
          /* Responsive Footer */
          @media (max-width: 767px) {
            .simple-footer {
              padding: 20px 0;
            }
            
            .footer-links {
              flex-direction: column;
              gap: 15px;
            }
            
            .footer-contact {
              flex-direction: column;
              gap: 10px;
            }
          }
          .home-max-width9 {
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image8 {
            width: 120px;
            height: auto;
            max-height: 60px;
            object-fit: contain;
          }
          .home-text93 {
            align-self: center;
          }
          .home-text95 {
            font-weight: 700;
          }
          .home-text97 {
            font-weight: 700;
          }
          .home-link {
            display: contents;
          }
          .home-container9 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon26 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text99 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
           @media (max-width: 991px) {
             .home-heading-container1 {
               max-width: 100%;
               margin-bottom: 42px;
             }
             .home-gallery {
               flex-direction: column;
             }
             .home-container2 {
               width: 100%;
             }
             .home-container3 {
               width: 100%;
               flex-direction: row;
             }
             .home-container4 {
               width: 100%;
               align-items: stretch;
             }
             .home-tab-selector-cards-container {
               grid-template-columns: repeat(2, 1fr);
               grid-template-rows: repeat(5, 1fr);
             }
             .home-max-width4 {
               flex-direction: column;
             }
             .home-text-container3 {
               width: 100%;
               margin-right: 0px;
               margin-bottom: var(--dl-layout-space-oneandhalfunits);
             }
             .home-image-container {
               width: 100%;
             }
             .home-image7 {
               width: 100%;
             }
             .home-blog-cards-container {
               align-items: center;
               flex-direction: column;
             }
             
             .home-testimonials-container {
               grid-template-columns: repeat(2, 1fr);
               gap: 20px;
             }
             
             .testimonials-stats {
               gap: 40px;
             }
             
             .services-slide {
               flex-direction: column;
               gap: var(--dl-layout-space-twounits);
             }
             
             .home-cards-container {
               min-height: 400px;
             }
             
             .services-description {
               font-size: 14px;
               max-width: 100%;
             }
             
             .home-controls {
               margin-top: var(--dl-layout-space-unit);
             }
           }
          @media (max-width: 767px) {
            .home-text10 {
              font-size: 48px;
            }
            .home-container3 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image2 {
              height: 100%;
            }
            .home-container5 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image5 {
              width: 100%;
            }
            .home-image6 {
              width: 100%;
            }
            .home-tab-selector-cards-container {
              grid-template-columns: 1fr;
              grid-template-rows: repeat(9, 1fr);
            }
            .home-text52 {
              margin-right: var(--dl-layout-space-fourunits);
            }
            .home-text55 {
              margin-right: var(--dl-layout-space-fourunits);
            }
            .home-text58 {
              margin-right: var(--dl-layout-space-fourunits);
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-subscribe-container {
              width: 100%;
            }
            
            /* Services Section Mobile Styles */
            .services-slide {
              flex-direction: column;
              gap: var(--dl-layout-space-twounits);
            }
            
            .home-cards-container {
              min-height: 400px;
            }
            
            .home-controls {
              display: none;
            }
            
            .services-indicators {
              margin-top: var(--dl-layout-space-twounits);
              justify-content: center;
            }
            
            .services-description {
              font-size: 14px;
              max-width: 100%;
            }
            
            .home-cards-container .services-card-container {
              width: 100%;
              max-width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-text52 {
              margin-right: var(--dl-layout-space-twounits);
            }
            .home-text55 {
              margin-right: var(--dl-layout-space-twounits);
            }
            .home-text58 {
              margin-right: var(--dl-layout-space-twounits);
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
            }
            .home-links-container {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-contact-container {
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-max-width9 {
              flex-direction: column;
            }
            .home-image8 {
              margin-bottom: var(--dl-layout-space-unit);
              width: 100px;
              max-height: 50px;
            }
            .home-text93 {
              text-align: center;
            }
            
            .services-description {
              font-size: 13px;
              line-height: 1.5;
            }
            
            .home-controls {
              flex-direction: column;
              gap: var(--dl-layout-space-unit);
            }
            
            .control-btn {
              padding: 8px;
            }
            
            .services-indicators {
              margin-top: var(--dl-layout-space-unit);
            }
            
            .indicator {
              width: 10px;
              height: 10px;
            }
            
            .home-testimonials-container {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .testimonial-card {
              padding: var(--dl-layout-space-twounits);
            }
            
            .testimonial-quote {
              font-size: 15px;
            }
            
            .testimonials-stats {
              flex-direction: column;
              gap: 30px;
              padding: var(--dl-layout-space-unit) 0;
            }
            
            .stat-number {
              font-size: 28px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
