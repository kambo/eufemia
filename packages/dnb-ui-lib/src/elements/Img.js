/**
 * HTML Element
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import E from './Element'
import {
  createSpacingClasses,
  removeSpaceProps
} from '../components/space/SpacingHelper'
import classnames from 'classnames'

const Img = ({
  caption,
  alt,
  element,
  skeleton,
  img_class,
  className,
  class: _class,
  ...p
}) => {
  return (
    <E
      is={element}
      internalClass="dnb-img"
      className={classnames(
        className,
        _class,
        createSpacingClasses(p, p.is)
      )}
      skeleton={skeleton}
      skeleton_method="shape"
    >
      <E
        is="img"
        alt={alt}
        internalClass="dnb-img__img"
        className={img_class}
        skeleton={skeleton}
        {...removeSpaceProps(p)}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </E>
  )
}
Img.tagName = 'dnb-img'
Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  skeleton: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  class: PropTypes.string,
  img_class: PropTypes.string,
  element: PropTypes.node,
  caption: PropTypes.string,
  children: PropTypes.node
}
Img.defaultProps = {
  skeleton: null,
  className: null,
  class: null,
  img_class: null,
  element: 'figure',
  css: null,
  caption: null,
  children: null
}

export default Img
