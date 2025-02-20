/**
 * Custom Tag
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tag = ({ children, className, as: Component, ...rest }) => {
  if (children === null && !/hr/.test(Component)) return <></>
  return (
    <Component
      className={classnames(`dnb-${Component}`, className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
Tag.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
}
Tag.defaultProps = {
  children: null,
  className: null,
}

export default Tag
