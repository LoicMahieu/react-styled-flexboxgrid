/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import React from 'react'

import Grid from './Grid'

describe('Grid', () => {
  it('should work', () => {
    expect(<Grid />).to.be.ok
  })
})
