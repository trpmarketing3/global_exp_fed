import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from '../hooks/useTranslation'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a href="/" className="navigation-links-text1 Navigation-Link">
          {props.link1}
        </a>
        <a href="/about" className="navigation-links-text2 Navigation-Link">
          {props.link2}
        </a>
        <a href="/#products" className="navigation-links-text3 Navigation-Link">
          {props.link3}
        </a>
        <a href="/#services" className="navigation-links-text4 Navigation-Link">
          {props.link4}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text1 {
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
            color: inherit;
          }
          .navigation-links-text1:hover {
            color: var(--dl-color-scheme-brown);
          }
          .navigation-links-text2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
            color: inherit;
          }
          .navigation-links-text2:hover {
            color: var(--dl-color-scheme-brown);
          }
          .navigation-links-text3 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
            color: inherit;
          }
          .navigation-links-text3:hover {
            color: var(--dl-color-scheme-brown);
          }
          .navigation-links-text4 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
            color: inherit;
          }
          .navigation-links-text4:hover {
            color: var(--dl-color-scheme-brown);
          }

          .navigation-linksroot-class-name17 {
            margin-right: var(--dl-layout-space-threeunits);
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-text1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-links-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-links-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Products',
  rootClassName: '',
  link2: 'About',
  link4: 'Services',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
