
import React from 'react'
import debounce from 'lodash.debounce'

import { Row, Col } from '../../src/index'

const ThemeConfigurator = ({ theme, onChange }) => {
  const sizes = ['xs', 'sm', 'md', 'lg']

  const setThemeProp = debounce((prop, value) => {
    onChange({
      ...theme,
      [prop]: value
    })
  }, 0)

  const setBreakPoint = debounce((size, width) => {
    onChange({
      ...theme,
      breakpoints: {
        ...theme.breakpoints,
        [size]: width
      }
    })
  }, 100)

  return (
    <div>
      <h4>Configuration</h4>

      <Row>
        <Col xs={12} sm={6}>
          <label>gutterWidth: {theme.gutterWidth}rem</label><br />
          <input type='range' min={0} max={5} step={0.1} value={theme.gutterWidth} onChange={e => setThemeProp('gutterWidth', e.target.value)} />
        </Col>

        <Col xs={12} sm={6}>
          <label>outerMargin: {theme.outerMargin}rem</label><br />
          <input type='range' min={0} max={5} step={0.1} value={theme.outerMargin} onChange={e => setThemeProp('outerMargin', e.target.value)} />
        </Col>

        {sizes.map((size, i) =>
          <Col xs={12} sm={6} key={i}>
            <label>breakpoint.{size}: {theme.breakpoints[size]}rem</label><br />
            <input type='range' min={0} max={100} step={0.5} value={theme.breakpoints[size]} onChange={e => setBreakPoint(size, e.target.value)} />
          </Col>
        )}

        <Col>
          <label>Theme config:</label>
          <pre>{JSON.stringify(theme, null, 2)}</pre>
        </Col>
      </Row>

    </div>
  )
}

export default ThemeConfigurator
