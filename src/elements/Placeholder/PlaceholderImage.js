import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { customPropTypes, getElementType, getUnhandledProps, useKeyOnly } from '../../lib'

/**
 * A placeholder can contain an image.
 */
const PlaceholderImage = React.forwardRef(function PlaceholderImageInner(props, ref) {
  const { className, square, rectangular } = props
  const classes = cx(
    useKeyOnly(square, 'square'),
    useKeyOnly(rectangular, 'rectangular'),
    'image',
    className,
  )
  const rest = getUnhandledProps(PlaceholderImage, props)
  const ElementType = getElementType(PlaceholderImage, props)

  return <ElementType {...rest} className={classes} ref={ref} />
})

PlaceholderImage.displayName = 'PlaceholderImage'
PlaceholderImage.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** An image can modify size correctly with responsive styles. */
  square: customPropTypes.every([customPropTypes.disallow(['rectangular']), PropTypes.bool]),

  /** An image can modify size correctly with responsive styles. */
  rectangular: customPropTypes.every([customPropTypes.disallow(['square']), PropTypes.bool]),
}

export default PlaceholderImage
