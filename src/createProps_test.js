/* eslint-env mocha */

import {expect} from 'chai'

import createProps from './createProps'

describe('createProps', () => {
  it('should be an function', () => {
    expect(createProps).to.be.an('function')
  })
})
