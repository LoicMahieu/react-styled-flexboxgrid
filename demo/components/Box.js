
import React from 'react'
import styled from 'styled-components'
import { Col } from '../../src/index'

const boxContentStyles = {
  row: `
    margin-bottom: 1rem;
  `,

  container: `
    box-sizing: border-box;
    padding: .5em;
  `,

  nested: `
    background: #036;
    border-color: #007FFF;
  `,

  large: `
    height: 8rem;
  `
}
const BoxContent = styled.div`
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
  ${p => boxContentStyles[p.type]}

  @media only screen and (min-width: 48rem) {
    ${p => ~['box', 'row', 'container', 'nested', 'large'].indexOf(p.type) && 'padding: 1rem'}
  }
`

const Box = p =>
  <Col {...p}>
    <BoxContent type={p.type}>{p.children}</BoxContent>
  </Col>

export default Box
