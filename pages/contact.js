import React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
const Contact = () => {
  return (
    <>
        <HeroSection />
      <div className="min-h-screen bg-white">
        <Head>
          <title>Contact Us - Shreemantyogi Chhatrapati Shivray Upakram LLP</title>
          <meta property="og:title" content="Contact Us - Shreemantyogi Chhatrapati Shivray Upakram LLP" />
          <meta name="description" content="Get in touch with Shreemantyogi Chhatrapati Shivray Upakram LLP for agricultural export services. Contact us via phone, email, or visit our office at 26/3, Sadashiv Colony, Lane No 1, Thergaon, Pune -411 033." />
        </Head>
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-gray-50 via-orange-50 to-orange-100 py-20 lg:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Get in Touch with Our 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700"> Export Team</span>
                </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                  Ready to start your agricultural export journey? Contact our team for personalized solutions and expert guidance.
                </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact-form" className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="tel:+917276621572" className="inline-flex items-center border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-20 lg:py-32 bg-white relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Multiple Ways to Connect
              </h2>
              <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose your preferred method to reach our export team. We're here to help with your agricultural export needs.
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Phone */}
                <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 p-10 text-center overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">Phone</h3>
                  <p className="relative z-10 text-xl font-semibold text-gray-700 mb-3">+91 7276621572</p>
                  <p className="relative z-10 text-sm text-gray-500 mb-6">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  
                  <a href="tel:+917276621572" className="relative z-10 inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>

                {/* Email */}
                <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 p-10 text-center overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">Email</h3>
                  <p className="relative z-10 text-xl font-semibold text-gray-700 mb-3">arthseva.accttaxhrconsultancy@gmail.com</p>
                  <p className="relative z-10 text-sm text-gray-500 mb-6">We'll respond within 24 hours</p>
                  
                  <a href="mailto:arthseva.accttaxhrconsultancy@gmail.com" className="relative z-10 inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Email
                  </a>
                </div>

                {/* Address */}
                <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 p-10 text-center overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">Address</h3>
                  <p className="relative z-10 text-xl font-semibold text-gray-700 mb-3">26/3, Sadashiv Colony, Lane No 1, Thergaon, Pune -411 033</p>
                  <p className="relative z-10 text-sm text-gray-500 mb-6">Export Business Center</p>
                  
                  <a href="https://maps.google.com/?q=26/3,Sadashiv+Colony,Lane+No+1,Thergaon,Pune+411033" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View Map
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form & Map Section */}
          <section id="contact-form" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-orange-100 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-400 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-4">
                  Get In Touch
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Have questions about our export services? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12 relative overflow-hidden">
                  {/* Form Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-50 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <form className="relative z-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors duration-200">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your first name"
                        required
                      />
                    </div>
                      <div className="group">
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors duration-200">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors duration-200">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="your.email@company.com"
                        required
                      />
                    </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors duration-200">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="+91 7276621572"
                        required
                      />
                    </div>
                  </div>
                  
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors duration-200">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Your company name (optional)"
                    />
                  </div>
                  
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors duration-200">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        required
                      >
                      <option value="">Select a subject</option>
                      <option value="export-inquiry">Export Inquiry</option>
                      <option value="product-information">Product Information</option>
                      <option value="pricing">Pricing & Quotes</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors duration-200">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                        rows="6" 
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-vertical"
                        placeholder="Tell us about your export requirements, product needs, or any questions you have..."
                      required
                    ></textarea>
                  </div>
                  
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-5 px-8 rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center group"
                    >
                      <svg className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    Send Message
                      <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                  </button>
                </form>
              </div>

              {/* Map Section */}
                <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12 relative overflow-hidden">
                  {/* Map Background Pattern */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-orange-100 rounded-full -translate-y-20 -translate-x-20"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-50 rounded-full translate-y-16 translate-x-16"></div>
                  
                  <div className="relative z-10 mb-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Find Us</h3>
                        <p className="text-gray-600 text-lg">Visit our office at 26/3, Sadashiv Colony, Lane No 1, Thergaon, Pune -411 033</p>
                      </div>
                    </div>
                </div>
                
                  <div className="relative z-10 rounded-2xl overflow-hidden mb-8 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588128304!2d73.85674331541647!3d18.520430387384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8d21%3A0xdbde5e14aecf4b90!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    width="100%"
                      height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shreemantyogi Chhatrapati Shivray Upakram LLP Location"
                  ></iframe>
                </div>
                
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Office Hours</h4>
                        <p className="text-gray-700">Monday - Friday, 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-gray-500">Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-700">26/3, Sadashiv Colony, Lane No 1, Thergaon, Pune -411 033</p>
                        <p className="text-sm text-gray-500">Export Business Center</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Response Time</h4>
                        <p className="text-gray-700">We respond within 24 hours</p>
                        <p className="text-sm text-gray-500">Emergency inquiries: Same day</p>
                      </div>
                  </div>
                  </div>
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

export default Contact
