
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import createProps from '../createProps'

import { config } from '../config'

const ModificatorType = PropTypes.oneOfType([ PropTypes.number, PropTypes.bool ])

const tempFOooo = [
  'xs',
  'sm',
  'md',
  'lg',
  'xsOffset',
  'smOffset',
  'mdOffset',
  'lgOffset'
]

const Col = styled(props =>
  React.createElement(props.tagName || 'div', createProps(Col.PropTypes, props))
)`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${p => config(p).halfGutterWidth}rem;
  padding-left: ${p => config(p).halfGutterWidth}rem;

  ${p => p.reverse && `
    flex-direction: column-reverse;
  `}

  ${p => Object.keys(p)
    .filter(k => ~tempFOooo.indexOf(k))
    .map(k =>
      Number.isInteger(p[k])
      ? config(p).media[k]`
        flex-basis: ${100 / 12 * p[k]}%;
        max-width: ${100 / 12 * p[k]}%;
      `
      : config(p).media[k]`
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      `
    )
  }
`

Col.displayName = 'Col'

Col.PropTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
}

export default Col
