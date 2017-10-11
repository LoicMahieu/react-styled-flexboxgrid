
import { css } from 'styled-components'

const THEME_CONF = 'flexboxgrid'
export const BASE_CONF = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 2,
  mediaQuery: 'only screen',
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

const configCache = []
const makeCacheId = props => JSON.stringify((props.theme && props.theme[THEME_CONF]) || {})
const resolveConfig = props => {
  const themeConf = (props.theme && props.theme[THEME_CONF]) || {}

  const conf = {
    ...BASE_CONF,
    ...themeConf,
    container: {
      ...BASE_CONF.container,
      ...themeConf.container
    },
    breakpoints: {
      ...BASE_CONF.breakpoints,
      ...themeConf.breakpoints
    }
  }

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint]
    media[breakpoint] = makeMedia(
      [
        conf.mediaQuery,
        breakpoint !== 0 && `(min-width: ${breakpointWidth}em)`
      ]
        .filter(Boolean)
        .join(' and ')
    )
    return media
  }, {})

  return conf
}

export const DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg']

export default function config (props) {
  const cacheId = makeCacheId(props)
  if (configCache[0] === cacheId) {
    return configCache[1]
  }

  const conf = resolveConfig(props)

  configCache[0] = cacheId
  configCache[1] = conf

  return conf
}

function makeMedia (media) {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `
}
