
import React, { PropTypes } from 'react'
import styled from 'styled-components'

import createProps from '../createProps'
import config, { DIMENSION_NAMES } from '../config'

const ModificatorType = PropTypes.oneOfType([ PropTypes.number, PropTypes.bool ])

const offsetProps = DIMENSION_NAMES.map(d => d + 'Offset')
const DimensionPropTypes = DIMENSION_NAMES.reduce((propTypes, dimension) => {
  propTypes[dimension] = ModificatorType
  propTypes[dimension + 'Offset'] = PropTypes.number
  return propTypes
}, {})

const Col = styled(props =>
  React.createElement(props.tagName || 'div', createProps(Col.PropTypes, props))
)`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${p => config(p).gutterWidth / 2}rem;
  padding-left: ${p => config(p).gutterWidth / 2}rem;

  ${p => p.reverse && `
    flex-direction: column-reverse;
  `}

  ${p => Object.keys(p)
    .filter(k => ~DIMENSION_NAMES.indexOf(k))
    .sort((a, b) => DIMENSION_NAMES.indexOf(a) - DIMENSION_NAMES.indexOf(b))
    .map(k => config(p).media[k]`${
      Number.isInteger(p[k])

      // Integer value
      ? `
        flex-basis: ${100 / config(p).gridSize * p[k]}%;
        max-width: ${100 / config(p).gridSize * p[k]}%;
        display: block;
      `
      // Boolean
      : (p[k]
        // Auto-width
        ? `
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
          display: block;
        `
        // Hide element
        : 'display: none;'
      )
    }`)
  }

  ${p => Object.keys(p)
    .filter(k => ~offsetProps.indexOf(k))
    .map(k =>
      config(p).media[k.replace(/Offset$/, '')]`
        margin-left: ${100 / config(p).gridSize * p[k]}%;
      `
    )
  }
`

Col.displayName = 'Col'

Col.PropTypes = {
  ...DimensionPropTypes,
  reverse: PropTypes.bool,
  tagName: PropTypes.string,
  children: PropTypes.node
}

export default Col
