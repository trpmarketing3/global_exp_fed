import React from 'react'

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column - Product Images */}
          <div className="relative">
            {/* Main Product Image Container */}
            <div className="relative bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
              {/* Orange L-shaped accent */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-orange-600 z-10"></div>
              
              {/* Product Image */}
              <div className="p-4 pt-16">
                <img 
                  src="/aboutus2.jpg" 
                  alt="Agricultural Products and Spices"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Overlapping Image - Responsive positioning */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-1/3 sm:w-2/5 lg:w-1/2 h-1/3 sm:h-2/5 lg:h-1/2 z-20">
              <img 
                src="/whyus.jpg"
                alt="Port Scene with Cargo Ship"
                className="w-full h-full object-cover rounded-lg shadow-2xl border-2 sm:border-4 border-white"
              />
            </div>
            
            {/* Floating Product Elements - Mobile responsive */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-yellow-500 rounded-full animate-bounce"></div>
          </div>

          {/* Right Column - Company Information */}
          <div className="space-y-6">
            {/* About Label */}
            <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">
              About
            </div>
            
            {/* Company Name */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-tight">
                Shrimantyogi Chatrapati Shivray Upkram LLP
              </h2>
              <div className="w-16 h-1 bg-orange-600 mt-4"></div>
            </div>
            
            {/* Company Description */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We are a leading export company specializing in trading and marketing agricultural produce and commodities. Our expertise spans across sugar, spices (dry red chilies, turmeric, coriander, cumin seeds), food grains (rice, wheat, corn, sorghum, tea), pulses, and agricultural feed (soybean meal, rice bran de-oiled cake).
              </p>
              
              <p>
                We import premium lentils, faba beans, black Matpe, and toor (Pigeon Peas) in bulk from Canada, Australia, and Burma. As B2B traders specializing in sugar, corn, and dal, we maintain extensive stocks and distribute to institutional parties while following standard packing processes to ensure quality.
              </p>
              
              <p>
                Our commitment to quality assurance and global export expertise makes us a trusted partner for agricultural products, spices, handicrafts, and traditional Indian goods in international markets.
              </p>
            </div>
            
            {/* Call to Action Button */}
            <div className="pt-4">
              <a 
                href="/about" 
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Read More
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Call to ask any question
              </h3>
              <p className="text-2xl font-bold text-orange-600">
                +91-XXX-XXXX-XXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
