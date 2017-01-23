
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Grid, Row, Col } from '../src/index'

injectGlobal`
  body, h1, h2, h3, h4, h5, h6 {
    margin: 0
  }
`

const Box = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 1rem;
  margin-bottom: 0;
  background: #007FFF;
  border: 1px solid #FFF;
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  color: #fff;
`

const App = () => (
  <div>
    <Grid>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>
          <Box />
        </Col>
        <Col xs={6} sm={6} md={8} lg={10}>
          <Box />
        </Col>
        <Col xs={6} sm={3} md={2} lg={1}>
          <Box />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default App
