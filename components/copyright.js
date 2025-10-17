import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from '../hooks/useTranslation'

const Copyright = (props) => {
  return (
    <>
      <div className={`copyright-copyright ${props.rootClassName} `}>
        <div className="copyright-max-width">
          <span className="copyright-text10">
            <span className="copyright-text11">
              <span>
                © All rights reserved
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.teleporthq.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text14">@TeleportHQ.</span>
            </a>
            <span className="copyright-text15">
              <span>
                {' '}
                Powered by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.vercel.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text18">Vercel</span>
            </a>
            <span className="copyright-text19">
              <span>
                . Image source:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.unsplash.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text22">Unsplash</span>
            </a>
            <span className="copyright-text23">.</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .copyright-copyright {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .copyright-max-width {
            align-items: stretch;
          }
          .copyright-text10 {
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
          .copyright-text11 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text14 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text15 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text18 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text19 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text22 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text23 {
            font-style: normal;
            font-weight: 300;
          }
          @media (max-width: 991px) {
            .copyright-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
