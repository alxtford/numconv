#!/usr/bin/env node

var tap = require('tap')
var baseCalc = require('./baseCalc.js')

const IN_BASE_DEFAULT = 10
const OUT_BASE_DEFAULT = 16
const ERROR = 0
const SUCCESS = 1

/*
 *
 * TESTS FOR Err Handling
 *
 */

// Test for base err handling
tap.equal(baseCalc.baseErrCatch(0, true), ERROR)
tap.equal(baseCalc.baseErrCatch(0, false), ERROR)

tap.equal(baseCalc.baseErrCatch(10, true), IN_BASE_DEFAULT)
tap.equal(baseCalc.baseErrCatch(10, false), IN_BASE_DEFAULT)
tap.equal(baseCalc.baseErrCatch(16, true), OUT_BASE_DEFAULT)
tap.equal(baseCalc.baseErrCatch(16, false), OUT_BASE_DEFAULT)

tap.equal(baseCalc.baseErrCatch(33, true), ERROR)
tap.equal(baseCalc.baseErrCatch(33, false), ERROR)

tap.equal(baseCalc.baseErrCatch(null, true), IN_BASE_DEFAULT)
tap.equal(baseCalc.baseErrCatch(null, false), OUT_BASE_DEFAULT)

tap.equal(baseCalc.baseErrCatch('hello', true), ERROR)
tap.equal(baseCalc.baseErrCatch('hello', false), ERROR)

// Test for inVar err Handling
tap.match(baseCalc.inVarErrCatch(0, 1), { 'err_code': ERROR, 'var': 0 })
tap.match(baseCalc.inVarErrCatch(0, 33), { 'err_code': ERROR, 'var': 0 })

tap.match(baseCalc.inVarErrCatch(10, 10), { 'err_code': SUCCESS, 'var': 10 })
tap.match(baseCalc.inVarErrCatch(0x10, 16), { 'err_code': SUCCESS, 'var': 16 })

tap.match(baseCalc.inVarErrCatch(0x0, 16), { 'err_code': SUCCESS, 'var': 0 })
tap.match(baseCalc.inVarErrCatch(0X0, 16), { 'err_code': SUCCESS, 'var': 0 })
tap.match(baseCalc.inVarErrCatch(0xFF, 16), { 'err_code': SUCCESS, 'var': 255 })
tap.match(baseCalc.inVarErrCatch(10110, 2), { 'err_code': SUCCESS, 'var': 22 })
tap.match(baseCalc.inVarErrCatch(11, 15), { 'err_code': SUCCESS, 'var': 16 })
tap.match(baseCalc.inVarErrCatch('0x11', 15), { 'err_code': SUCCESS, 'var': 16 })
tap.match(baseCalc.inVarErrCatch('0X0', 17), { 'err_code': SUCCESS, 'var': 0 })

tap.match(baseCalc.inVarErrCatch(Number.MAX_SAFE_INTEGER + 1, 10), { 'err_code': ERROR })

/*
 *
 * TESTS FOR X - X CONVERSIONS
 *
 */
