
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import createProps from '../createProps'
import config, { DIMENSION_NAMES } from '../config'

const Grid = props => (
  React.createElement(props.tagName || 'div', createProps(Grid.PropTypes, props))
)

Grid.displayName = 'Grid'

Grid.propTypes = {
  fluid: PropTypes.bool,
  tagName: PropTypes.string,
  children: PropTypes.node
}

export default styled(Grid)`
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
