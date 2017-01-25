
import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import createProps from '../createProps'
import config, { DIMENSION_NAMES } from '../config'

const Grid = styled(props =>
  React.createElement(props.tagName || 'div', createProps(Grid.PropTypes, props))
)`
  margin-right: auto;
  margin-left: auto;

  ${p => p.fluid && css`
    padding-right: ${p => config(p).outerMargin + 'rem'};
    padding-left: ${p => config(p).outerMargin + 'rem'};
  `}

  ${p => !p.fluid && css`
    ${DIMENSION_NAMES.map(t =>
      config(p).container[t] && config(p).media[t]`
        width: ${p => config(p).container[t]}rem;
      `
    )}
  `}
`

Grid.displayName = 'Grid'

Grid.PropTypes = {
  fluid: PropTypes.bool,
  tagName: PropTypes.string,
  children: PropTypes.node
}

export default Grid
