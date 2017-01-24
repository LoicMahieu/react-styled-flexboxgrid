
import { css } from 'styled-components'

const THEME_CONF = 'flexboxgrid'
const baseConf = {
  gutterWidth: 1,
  outerMargin: 2,
  container: {
    sm: 46,
    md: 61,
    lg: 76
  },
  breakpoints: {
    xs: 0,
    sm: 48,
    md: 64,
    lg: 75
  }
}

export function makeMedia (media) {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `
}

export default function config (props) {
  const themeConf = props.theme && props.theme[THEME_CONF] || {}

  const conf = {
    ...baseConf,
    ...themeConf,
    container: {
      ...baseConf.container,
      ...themeConf.container
    },
    breakpoints: {
      ...baseConf.breakpoints,
      ...themeConf.breakpoints
    }
  }

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint]
    media[breakpoint] = makeMedia('only screen' + (breakpoint === 0 ? '' : ` and (min-width: ${breakpointWidth}em)`))
    return media
  }, {})

  return conf
}

export const DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg']
