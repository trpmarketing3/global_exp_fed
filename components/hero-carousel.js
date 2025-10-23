import React, { useState, useEffect } from 'react'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      title: "— Shreemantyogi Chhatrapati Shivray Upakram LLP —",
      description: "Premium Export Excellence in Agricultural Products, Spices, Handicrafts & Textiles. We specialize in Onion Powder, Drumstick Powder, Fresh Vegetables, Sugar, Jaggery, Grapes, T-shirts, Pants, Sarees, Spices, Chivda, Handicraft Products, Bamboo Products, and Fresh Fruits & Flowers.",
      buttonText: "MORE ABOUT",
      buttonLink: "/about",
      backgroundImage: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 2,
      title: "Our Export Products",
      description: "Fresh Vegetables: Onion, Tomato, Lemon, Potato, Ginger, Garlic, Chilli • Processed Products: Onion Powder, Drumstick Powder, Sugar, Jaggery, Chivda • Textiles: T-shirts, Pants, Sarees • Handicrafts & Bamboo Products • Spices & Fresh Fruits & Flowers",
      buttonText: "Explore Products",
      buttonLink: "#products",
      backgroundImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    }
  ]

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out  ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out hover:scale-105"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            {/* Dark Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fadeInUp">
          {/* Welcome Banner (only for first slide) */}
          {currentSlide === 0 && (
            <div className="mb-6 animate-fastSlideInDown">
              <span className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all duration-300">
                Welcome To
              </span>
            </div>
          )}

          {/* Best Banner (only for second slide) */}
          {currentSlide === 1 && (
            <div className="mb-6 animate-fastSlideInDown">
              <span className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all duration-300">
                The Best
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fastSlideInUp">
            {currentSlide === 0 ? (
              <span className="block">
                <span className="text-white animate-fastPulse">—</span>
                <span className="mx-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent animate-fastSlideInUp">
                  Shreemantyogi Chhatrapati Shivray Upakram LLP
                </span>
                <span className="text-white animate-fastPulse">—</span>
              </span>
            ) : (
              <span className="block">
                <span className="text-white animate-fastPulse">—</span>
                <span className="mx-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent animate-fastSlideInUp">
                  Our Export Products
                </span>
                <span className="text-white animate-fastPulse">—</span>
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fastSlideInUp opacity-90 hover:opacity-100 transition-opacity duration-500">
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <a
            href={slides[currentSlide].buttonLink}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-medium uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fastSlideInUp"
          >
            {slides[currentSlide].buttonText}
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-600 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
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
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fastSlideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fastSlideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fastPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }
        
        .animate-fastSlideInUp {
          animation: fastSlideInUp 0.4s ease-out;
        }
        
        .animate-fastSlideInDown {
          animation: fastSlideInDown 0.3s ease-out;
        }
        
        .animate-fastPulse {
          animation: fastPulse 1s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroCarousel