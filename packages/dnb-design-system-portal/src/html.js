/**
 * Default HTML entry file
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

// preload our default fonts
import fontRegular from 'dnb-ui-lib/assets/fonts/DNB-Regular.woff2'
import fontMedium from 'dnb-ui-lib/assets/fonts/DNB-Medium.woff2'
// import fontBold from 'dnb-ui-lib/assets/fonts/DNB-Bold.woff2'// we do not use bold for now
import fontMonoRegular from 'dnb-ui-lib/assets/fonts/DNBMono-Regular.woff2'

// load icons
import { withPrefix } from 'gatsby' // use it like this: withPrefix('/safari-pinned-tab.svg')
// import appleTouchIcon from 'dnb-ui-lib/assets/browser/apple-touch-icon.png'
// import favicon32 from 'dnb-ui-lib/assets/browser/favicon-32x32.png'
// import favicon16 from 'dnb-ui-lib/assets/browser/favicon-16x16.png'
// import safariPinnedTab from 'dnb-ui-lib/assets/browser/safari-pinned-tab.svg'

// load properties
import properties from 'dnb-ui-lib/src/style/properties.js'
const mainColor = properties['--color-sea-green']

exports.mainColor = mainColor

export default class HTML extends React.PureComponent {
  render() {
    const {
      htmlAttributes,
      bodyAttributes,
      headComponents,
      preBodyComponents,
      postBodyComponents,
      body
    } = this.props
    return (
      <html lang="en" {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={withPrefix('/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={withPrefix('/avicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={withPrefix('/avicon-16x16.png')}
          />
          <link
            rel="mask-icon"
            // href={safariPinnedTab}
            href={withPrefix('/safari-pinned-tab.svg')}
            color={mainColor}
          />
          <meta name="msapplication-TileColor" content={mainColor} />
          <meta name="theme-color" content={mainColor} />
          {[fontRegular, fontMedium, fontMonoRegular].map((font) => (
            <link
              key={font}
              rel="preload"
              as="font"
              type="font/woff2"
              href={font}
              crossOrigin="anonymous"
            />
          ))}
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            Eufemia works best with JavaScript enabled.
          </noscript>
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div id="dnb-modal-root" className="dnb-core-style" />
          {postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array.isRequired,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.array.isRequired
}
HTML.defaultProps = {
  htmlAttributes: null,
  bodyAttributes: null
}
