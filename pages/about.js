import React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
import AboutSection from '../components/about-section'

const About = () => {
  return (
    <>    <HeroSection />
    
      <div className="min-h-screen bg-white">
         <Head>
           <title>About Us - Shreemantyogi Chhatrapati Shivray Upakram LLP</title>
           <meta property="og:title" content="About Us - Shreemantyogi Chhatrapati Shivray Upakram LLP" />
          <meta name="description" content="Learn about Shreemantyogi Chhatrapati Shivray Upakram LLP - a leading agricultural export company specializing in premium products and global trade solutions." />
         </Head>
    

        <Navigation />
        
        <main className="">
          {/* Hero Section with Agricultural Background */}
          <section className="relative h-96 lg:h-[500px] overflow-hidden">
            {/* Agricultural Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/about.jpg")'
              }}
            ></div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              {/* Breadcrumbs */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <a href="/" className="flex items-center text-white hover:text-orange-400 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li>
                    <span className="text-orange-400 font-semibold">About Us</span>
                  </li>
                </ol>
              </nav>
              
              {/* Page Title */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                About Us
                </h1>
            </div>
          </section>

      <AboutSection />

          {/* Team Section */}
          <section className="py-20  bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-4">
                  Our Leadership
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Meet Our Team
                </h2>
                <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our experienced leadership team brings together diverse expertise in technology, fashion, and business management to drive our agricultural export success.
                </p>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Kartikee Rajesh Savale - CMD */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Photo */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <img 
                      src="/Kartikee.jpeg" 
                      alt="Kartikee Rajesh Savale - CMD"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      Kartikee Rajesh Savale
                    </h3>
                    <p className="text-lg font-semibold text-orange-600 mb-4">
                      Chairman cum Managing Director (CMD)
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Education</p>
                          <p className="text-gray-600">BE - AI & Data Science</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Role</p>
                          <p className="text-gray-600">Strategic Leadership & Technology Innovation</p>
                        </div>
                      </div>
                    </div>
              </div>
            </div>

                {/* Manisha Rajesh Savale - Founder Director */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Photo */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <img 
                      src="/Manisha.jpeg" 
                      alt="Manisha Rajesh Savale - Founder Director"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      Manisha Rajesh Savale
                    </h3>
                    <p className="text-lg font-semibold text-orange-600 mb-4">
                      Founder Director
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Education</p>
                          <p className="text-gray-600">B. Voc (Fashion Technology)</p>
                          <p className="text-gray-600">A & TC, ATD</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Role</p>
                          <p className="text-gray-600">Fashion Technology & Product Development</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rajesh Uddhav Savale - Founder Director */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Photo */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <img 
                      src="/Rajesh.jpeg" 
                      alt="Rajesh Uddhav Savale - Founder Director"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      Rajesh Uddhav Savale
                    </h3>
                    <p className="text-lg font-semibold text-orange-600 mb-4">
                      Founder Director
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Education</p>
                          <p className="text-gray-600">MBA (Finance)</p>
                          <p className="text-gray-600">EMBA (HRM)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Role</p>
                          <p className="text-gray-600">Financial Management & Human Resources</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Certifications
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our official certifications and registrations that demonstrate our commitment to quality and compliance
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* APEDA */}
                <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
              </div>
            </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    APEDA
                  </h3>
              </div>
              
                {/* FSSAI */}
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center cursor-pointer"
                  onClick={() => window.open('/aboutus3.jpg', '_blank')}
                >
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    FSSAI
                  </h3>
                </div>

                {/* IEC */}
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center cursor-pointer"
                  onClick={() => window.open('/aboutus3.jpg', '_blank')}
                >
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    IEC
                  </h3>
                </div>

                {/* SPICE BOARD UEL */}
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center cursor-pointer"
                  onClick={() => window.open('/aboutus3.jpg', '_blank')}
                >
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    SPICE BOARD UEL
                  </h3>
                </div>

                {/* Certificate */}
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center cursor-pointer"
                  onClick={() => window.open('/aboutus3.jpg', '_blank')}
                >
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    Certificate
                  </h3>
                </div>

                {/* FEIO Registration */}
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center cursor-pointer"
                  onClick={() => window.open('/aboutus3.jpg', '_blank')}
                >
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    FEIO Registration
                  </h3>
                </div>

                {/* Rice Exporter Federation */}
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center cursor-pointer"
                  onClick={() => window.open('/aboutus3.jpg', '_blank')}
                >
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    Rice Exporter Federation
                  </h3>
                </div>

                {/* LEI Certificate */}
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-dashed border-orange-200 hover:border-orange-400 p-6 text-center cursor-pointer"
                  onClick={() => window.open('/aboutus3.jpg', '_blank')}
                >
                  <div className="mb-4">
                    <div className="w-16 h-20 bg-red-600 rounded-lg mx-auto relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-red-500 rounded-md flex flex-col items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded mb-1"></div>
                        <div className="w-8 h-1 bg-white rounded mb-2"></div>
                        <div className="text-white text-xs font-bold">PDF</div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-red-700 transform rotate-45 origin-bottom-left"></div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    LEI Certificate FY 24-25
                  </h3>
                </div>
                </div>

              {/* Bottom CTA */}
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Trusted by Regulatory Bodies
                  </h3>
                  <p className="text-lg opacity-90 max-w-3xl mx-auto">
                    Our comprehensive certifications ensure compliance with international standards and demonstrate our commitment to quality, safety, and regulatory excellence in all our export operations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default About
