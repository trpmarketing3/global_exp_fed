import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from '../hooks/useTranslation'

const BlogCard = (props) => {
  return (
    <>
      <div className={`blog-card-blog-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-card-image"
        />
        <div className="blog-card-container">
          <button className="blog-card-button button-secondary button">
            {props.button}
          </button>
          <span className="blog-card-text1">{props.text1}</span>
        </div>
        <span className="blog-card-text2">
          <span>
            Excepteur sint occaecat cupidatat non proident, sunt
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>in culpa qui and.</span>
        </span>
        <span className="blog-card-text5">{props.text}</span>
      </div>
      <style jsx>
        {`
          .blog-card-blog-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-card-image {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-radius8);
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .blog-card-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-card-button {
            font-size: 12px;
            text-transform: uppercase;
          }
          .blog-card-text1 {
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
          }
          .blog-card-text2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .blog-card-text5 {
            text-decoration: underline;
          }

          @media (max-width: 991px) {
            .blog-card-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .blog-card-blog-card {
              max-width: 450px;
            }
            .blog-cardroot-class-name {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .blog-cardroot-class-name1 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .blog-card-blog-card {
              max-width: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogCard.defaultProps = {
  button: 'Web Design',
  imageAlt: 'image',
  text1: 'Dec 8, 2022',
  imageSrc: '/rectangle%2099-1500w.png',
  rootClassName: '',
  text: 'Learn more',
}

BlogCard.propTypes = {
  button: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default BlogCard
