/* eslint-env mocha */

import {expect} from 'chai'
import React from 'react'

import Grid from './Grid'

describe('Grid', () => {
  it('should works', () => {
    expect(<Grid />).to.be.ok
  })
})
