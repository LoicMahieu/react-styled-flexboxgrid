# react-styled-flexboxgrid

[![Greenkeeper badge](https://badges.greenkeeper.io/LoicMahieu/react-styled-flexboxgrid.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/react-styled-flexboxgrid.svg)](https://badge.fury.io/js/react-styled-flexboxgrid)
[![Build Status](https://travis-ci.org/LoicMahieu/react-styled-flexboxgrid.svg?branch=master)](https://travis-ci.org/LoicMahieu/react-styled-flexboxgrid)
[![NPM Status](http://img.shields.io/npm/dm/react-styled-flexboxgrid.svg?style=flat-square)](https://www.npmjs.org/package/react-styled-flexboxgrid)
[![js-standard-style](https://img.shields.io/badge/lint-standard-green.svg)](http://standardjs.com)


Set of React components that implement [`flexboxgrid.css`](https://github.com/kristoferjoseph/flexboxgrid) but with [`styled-components`](https://github.com/styled-components/styled-components). Furthermore, it allows to customize grid configuration like gutter width...

Highly inspired by the excellent [`react-flexbox-grid`](https://github.com/roylee0704/react-flexbox-grid) which the API is nearly the same than this module.

## Usage

### Basic

```JSX
import React from 'react'

import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const App = props =>
  <Grid>
    <Row>
      <Col xs={6} md={3}>Hello, world!</Col>
    </Row>
  </Grid>
```

### Configuration

The grid use same defaults than [`flexboxgrid.css`](https://github.com/kristoferjoseph/flexboxgrid).

You can customize values using [`<ThemeProvider>`](https://github.com/styled-components/styled-components#theming) component from styled-components.
`react-styled-flexboxgrid` will looks at the `flexboxgrid` property in the theme.

*All values are assumed to be a number in **rem***

```JSX
import React from 'react'

import {ThemeProvider} from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

const App = props =>
  <ThemeProvider theme={theme}>
    <Grid>
      <Row>
        <Col xs={6} md={3}>Hello, world!</Col>
      </Row>
    </Grid>
  </ThemeProvider>
```

### Installation

```
npm i -S react-styled-flexboxgrid
```

## License

MIT
