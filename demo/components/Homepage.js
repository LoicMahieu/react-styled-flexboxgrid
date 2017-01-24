
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Grid, BASE_CONF } from '../../src/index'
import Hero from './Hero'
import Demo from './Demo'
import ThemeConfigurator from './ThemeConfigurator'

const WrapperGrid = styled(Grid)`
  max-width: 1200px;
  margin: 0 auto;
`

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      theme: BASE_CONF
    }
  }

  render () {
    const setTheme = theme => this.setState({ theme })

    return (
      <ThemeProvider theme={{ flexboxgrid: this.state.theme }}>
        <article>
          <Hero />
          <WrapperGrid fluid>
            <ThemeConfigurator theme={this.state.theme} onChange={setTheme} />
            <Demo />
          </WrapperGrid>
        </article>
      </ThemeProvider>
    )
  }
}

export default App
