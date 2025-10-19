import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useTranslations } from '../hooks/useTranslation'

import NavigationLinks from './navigation-links'

const Navigation = (props) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => {
    if (path === '/' && router.pathname === '/') return true
    if (path !== '/' && router.pathname.startsWith(path)) return true
    return false
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="w-full bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-1">
              <a 
                href="/" 
                className={`px-4 py-4 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200 ${
                  isActive('/') ? 'text-orange-600' : 'text-white'
                }`}
              >
                HOME
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a 
                href="/about" 
                className={`px-4 py-4 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200 ${
                  isActive('/about') ? 'text-orange-600' : 'text-white'
                }`}
              >
                ABOUT US
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a 
                href="/#our-products" 
                className="px-4 py-4 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200"
              >
                OUR PRODUCTS
              </a>
            
              <div className="w-px h-6 bg-gray-600"></div>
              <a 
                href="/contact" 
                className={`px-4 py-4 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200 ${
                  isActive('/contact') ? 'text-orange-600' : 'text-white'
                }`}
              >
                CONTACT US
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-orange-600">
                MENU
              </div>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-orange-600 focus:outline-none focus:text-orange-600 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="mt-4 pb-4 border-t border-gray-700">
                <div className="flex flex-col space-y-2 pt-4">
                  <a 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200 rounded-md ${
                      isActive('/') ? 'text-orange-600 bg-gray-700' : 'text-white'
                    }`}
                  >
                    HOME
                  </a>
                  <a 
                    href="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200 rounded-md ${
                      isActive('/about') ? 'text-orange-600 bg-gray-700' : 'text-white'
                    }`}
                  >
                    ABOUT US
                  </a>
                  <a 
                    href="/#our-products" 
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200 rounded-md text-white"
                  >
                    OUR PRODUCTS
                  </a>
                  <a 
                    href="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium uppercase hover:text-orange-600 transition-colors duration-200 rounded-md ${
                      isActive('/contact') ? 'text-orange-600 bg-gray-700' : 'text-white'
                    }`}
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

Navigation.defaultProps = {
  imageSrc: '/logo.png',
  button: 'Get in touch',
  imageAlt1: 'image',
  imageSrc1: '/logo.png',
  button2: 'Get in touch',
  imageAlt: 'logo',
}

Navigation.propTypes = {
  imageSrc: PropTypes.string,
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  button2: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigation
