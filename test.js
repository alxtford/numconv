#!/usr/bin/env node

var tap = require('tap')
var errCatch = require('./errCatch.js')

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
tap.equal(errCatch.baseErrCatch(0, true), ERROR)
tap.equal(errCatch.baseErrCatch(0, false), ERROR)

tap.equal(errCatch.baseErrCatch(10, true), IN_BASE_DEFAULT)
tap.equal(errCatch.baseErrCatch(10, false), IN_BASE_DEFAULT)
tap.equal(errCatch.baseErrCatch(16, true), OUT_BASE_DEFAULT)
tap.equal(errCatch.baseErrCatch(16, false), OUT_BASE_DEFAULT)

tap.equal(errCatch.baseErrCatch(33, true), ERROR)
tap.equal(errCatch.baseErrCatch(33, false), ERROR)

tap.equal(errCatch.baseErrCatch(null, true), IN_BASE_DEFAULT)
tap.equal(errCatch.baseErrCatch(null, false), OUT_BASE_DEFAULT)

tap.equal(errCatch.baseErrCatch('hello', true), ERROR)
tap.equal(errCatch.baseErrCatch('hello', false), ERROR)

// Test foerrCatcherr Handling
tap.match(errCatch.inVarErrCatch(0, 1), { 'err_code': ERROR, 'var': 0 })
tap.match(errCatch.inVarErrCatch(0, 33), { 'err_code': ERROR, 'var': 0 })

tap.match(errCatch.inVarErrCatch(10, 10), { 'err_code': SUCCESS, 'var': 10 })
tap.match(errCatch.inVarErrCatch(0x10, 16), { 'err_code': SUCCESS, 'var': 16 })

tap.match(errCatch.inVarErrCatch(0x0, 16), { 'err_code': SUCCESS, 'var': 0 })
tap.match(errCatch.inVarErrCatch(0X0, 16), { 'err_code': SUCCESS, 'var': 0 })
tap.match(errCatch.inVarErrCatch(0xFF, 16), { 'err_code': SUCCESS, 'var': 255 })
tap.match(errCatch.inVarErrCatch(10110, 2), { 'err_code': SUCCESS, 'var': 22 })
tap.match(errCatch.inVarErrCatch(11, 15), { 'err_code': SUCCESS, 'var': 16 })
tap.match(errCatch.inVarErrCatch('0x11', 15), { 'err_code': SUCCESS, 'var': 16 })
tap.match(errCatch.inVarErrCatch('0X0', 17), { 'err_code': SUCCESS, 'var': 0 })

tap.match(errCatch.inVarErrCatch(Number.MAX_SAFE_INTEGER + 1, 10), { 'err_code': ERROR })

/*
 *
 * TESTS FOR X - X CONVERSIONS
 *
 */
