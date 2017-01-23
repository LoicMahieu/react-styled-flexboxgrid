
import { css } from 'styled-components'

function makeMedia (media) {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `
}

export function config (props) {
  return {
    outerMargin: 0.5,
    gutterCompensation: 0.5,
    halfGutterWidth: 0.5,
    container: {
      sm: 46,
      md: 61,
      lg: 76
    },
    media: {
      xs: makeMedia('only screen'),
      sm: makeMedia('only screen and (min-width: 48em)'),
      md: makeMedia('only screen and (min-width: 64em)'),
      lg: makeMedia('only screen and (min-width: 75em)')
    }
  }
}

export const DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg']
