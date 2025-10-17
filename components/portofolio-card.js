import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from '../hooks/useTranslation'

const PortofolioCard = (props) => {
  return (
    <>
      <div className={`portofolio-card-speaker-card ${props.rootClassName} `}>
        <div className="portofolio-card-image-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="portofolio-card-image"
          />
          <div className="portofolio-card-see-project-container">
            <button className="button-secondary-white button button-md">
              See project
            </button>
          </div>
        </div>
        <span className="portofolio-card-first-name">{props.projectTitle}</span>
      </div>
      <style jsx>
        {`
          .portofolio-card-speaker-card {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
          .portofolio-card-image-container {
            width: 100%;
            height: 280px;
            display: flex;
            position: relative;
            min-width: 300px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            border-radius: var(--dl-layout-radius-radius8);
            background-color: #f8f9fa;
          }
          .portofolio-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: var(--dl-layout-radius-radius8);
            transition: transform 0.3s ease;
            display: block;
          }
          .portofolio-card-image-container:hover .portofolio-card-image {
            transform: scale(1.05);
          }
          .portofolio-card-see-project-container {
            flex: 1;
            width: 100%;
            cursor: pointer;
            display: flex;
            opacity: 0;
            z-index: 1;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ),
              url(.jpg);
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: row;
            justify-content: center;
          }
          .portofolio-card-see-project-container:hover {
            opacity: 1;
          }
          .portofolio-card-first-name {
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 23px;
            text-align: center;
            width: 100%;
            margin-top: var(--dl-layout-space-halfunit);
          }
          
          /* Responsive alignment */
          @media (max-width: 991px) {
            .portofolio-card-image-container {
              height: 260px;
              min-width: 280px;
            }
          }
          
          @media (max-width: 767px) {
            .portofolio-card-image-container {
              height: 240px;
              min-width: 250px;
            }
            .portofolio-card-first-name {
              font-size: 16px;
            }
          }
          
          /* Ensure consistent image sizing */
          .portofolio-card-image-container img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
          }
        `}
      </style>
    </>
  )
}

PortofolioCard.defaultProps = {
  rootClassName: '',
  projectTitle: 'Office Life Campaign - Boost your creativity',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

PortofolioCard.propTypes = {
  rootClassName: PropTypes.string,
  projectTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default PortofolioCard
