import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
          
          {/* Left Panel - Dark Content Area */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 lg:p-16 flex flex-col justify-center">
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: '/traditional-handicrafts.jpg',
                filter: 'blur(2px)'
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">
                Why Choose Us?
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Exports / Imports
                <div className="w-20 h-1 bg-orange-500 mt-4"></div>
              </h2>
              
              {/* Description */}
              <p className="text-white text-lg mb-8 leading-relaxed">
                Our network is spread all over the world including India. The countries in which we deal are inclusive of ....................
              </p>
              
              {/* Countries Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Exports */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Exports</h3>
                  <ul className="space-y-3">
                    {[
                      'Srilanka', 'Malaysia', 'Bangladesh', 'UAE', 
                      'Singapore', 'Russia', 'Djibouti', 'Benin', 'Afghanistan'
                    ].map((country, index) => (
                      <li key={index} className="flex items-center text-white">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Imports */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Imports</h3>
                  <ul className="space-y-3">
                    {[
                      'Canada', 'Australia', 'Myanmar', 'Tanzania'
                    ].map((country, index) => (
                      <li key={index} className="flex items-center text-white">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Agricultural Image */}
          <div className="relative w-full h-full">
            {/* Thick Orange Border Frame - Top, Bottom (half width), Left only */}
            <div className="absolute top-0 left-0 w-1/2 h-6 bg-orange-500 z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-6 bg-orange-500 z-10"></div>
            <div className="absolute top-0 left-0 w-6 h-full bg-orange-500 z-10"></div>
            
            {/* Agricultural Image - Full Width */}
            <div className="w-full h-full min-h-[600px]">
              <img 
                src="/woo.jpg"                alt="Agricultural Field with Windmill"
                className="w-full h-full object-cover object-center"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
