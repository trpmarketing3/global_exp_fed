import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from '../hooks/useTranslation'

const ServicesCard = (props) => {
  return (
    <>
      <div className="services-card">
        <div className="services-card-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="services-card-image"
          />
        </div>
        <span className="services-card-text1">{props.text}</span>
        <span className="services-card-text2">{props.text1}</span>
        <span className="services-card-text3">{props.text2}</span>
      </div>
      <style jsx>
        {`
          .services-card-container {
            width: 100%;
            height: 200px;
            display: flex;
            align-items: center;
            border-radius: 12px;
            margin-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
            background-color: rgba(182, 71, 47, 0.05);
            overflow: hidden;
            position: relative;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .services-card-container:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }
          .services-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 12px;
            transition: transform 0.3s ease;
          }
          .services-card-container:hover .services-card-image {
            transform: scale(1.05);
          }
          .services-card-text1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .services-card-text2 {
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .services-card-text3 {
            cursor: pointer;
            text-decoration: underline;
          }
          
          /* Responsive styles */
          @media (max-width: 991px) {
            .services-card-container {
              height: 180px;
            }
          }
          
          @media (max-width: 767px) {
            .services-card-container {
              height: 160px;
            }
          }
        `}
      </style>
    </>
  )
}

ServicesCard.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/website-200h.png',
  text: 'Website design',
  text1:
    'Create your ubest unique App development, crafted for your business needs.',
  text2: 'Learn more',
}

ServicesCard.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default ServicesCard
