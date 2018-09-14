/* eslint-env mocha */

import { expect } from 'chai'

import config, { BASE_CONF, DIMENSION_NAMES } from './config'

describe('config', () => {
  describe('BASE_CONF', () => {
    it('should be an object', () => {
      expect(BASE_CONF).to.be.an('object')
    })
  })
  describe('DIMENSION_NAMES', () => {
    it('should be an array', () => {
      expect(DIMENSION_NAMES).to.be.an('array')
    })
  })
  describe('config()', () => {
    it('should be a function', () => {
      expect(config).to.be.an('function')
    })
  })
})
