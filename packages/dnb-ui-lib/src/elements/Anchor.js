/**
 * HTML Element
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import E from './index'

const Anchor = p => <E is="a" {...p} />
Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}
Anchor.defaultProps = {
  children: null
}

export default Anchor
