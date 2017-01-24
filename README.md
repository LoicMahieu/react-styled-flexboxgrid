# react-styled-flexboxgrid

[![Greenkeeper badge](https://badges.greenkeeper.io/LoicMahieu/react-styled-flexboxgrid.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/react-styled-flexboxgrid.svg)](https://badge.fury.io/js/react-styled-flexboxgrid)
[![Build Status](https://travis-ci.org/LoicMahieu/react-styled-flexboxgrid.svg?branch=master)](https://travis-ci.org/LoicMahieu/react-styled-flexboxgrid)
[![NPM Status](http://img.shields.io/npm/dm/react-styled-flexboxgrid.svg?style=flat-square)](https://www.npmjs.org/package/react-styled-flexboxgrid)


Set of React components that implement [flexboxgrid.css](https://goo.gl/imrHBZ) but with [`styled-components`](https://github.com/styled-components/styled-components). Furthermore, it allows to customize grid configuration like gutter width...

Highly inspired by the excellent [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid) which the API is nearly the same than this module.

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

### Installation

```
npm i -S react-styled-flexboxgrid
```

## License

MIT
