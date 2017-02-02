
import React from 'react'
import styled from 'styled-components'
import { Row, Col } from '../../src/index'

const Headline = styled.h1`
  font-size: 2.5rem;

  @media only screen and (min-width: 48rem) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`

const Description = styled(p =>
  <Row center='xs'><Col>{p.children}</Col></Row>
)`
  font-size: .95rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.35rem;
  }
`

const Button = styled.a`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: 11rem;
  padding: 0 4rem;
  margin: 1rem;
  height: 3rem;
  line-height: 3rem;
  border: 1px solid #007FFF;
  border-radius: 2px;
  color: #007FFF;
  font-size: 1.25rem;
  transition: background-color,.15s;
  text-decoration: none;

  &:hover {
    background: #39F;
    border-color: #39F;
    color: #FFF;
    text-shadow: 0 1px #007FFF;
  }
`

const Hero = styled(props =>
  <header className={props.className}>
    <Row center='xs'>
      <Headline>React Styled Flexboxgrid</Headline>
    </Row>
    <Description>
      <p><code>Grid system based on <a href='https://github.com/styled-components/styled-components'>styled-components</a> and flexbox</code></p>
      <p><code>Highly inspired by <a href='https://github.com/roylee0704/react-flexbox-grid'>react-flexbox-grid</a> and <a href='https://github.com/kristoferjoseph/flexboxgrid'>flexboxgrid.css</a></code></p>
    </Description>
    <Row center='xs'>
      <Button href='https://github.com/loicmahieu/react-styled-flexboxgrid'>Github</Button>
    </Row>
  </header>
)`
  background: white;
  box-sizing: border-box;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 2px;
`

export default Hero
