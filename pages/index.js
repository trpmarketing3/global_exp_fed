import React from 'react'
import Head from 'next/head'


import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import HeroCarousel from '../components/hero-carousel'
import AboutSection from '../components/about-section'
import WhyChooseUs from '../components/why-choose-us'
import FeaturesSection from '../components/features-section'
import OurProducts from '../components/our-products'
import Footer from '../components/footer'
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
      <div className="min-h-screen">
        <Head>
          <title>Shrimantyogi Chatrapati Shivray Upkram LLP</title>
          <meta property="og:title" content="Shrimantyogi Chatrapati Shivray Upkram LLP - Premium Agricultural & Handicraft Export" />
        </Head>
        
        <HeroSection />
        <Navigation></Navigation>
        <HeroCarousel />
        <AboutSection />
        <WhyChooseUs />
        <OurProducts />
        <FeaturesSection />
        <Footer />
                  
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
