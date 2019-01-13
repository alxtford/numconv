#!/usr/bin/env node

var tap = require('tap')
var baseConvert = require('../src/baseConvert.js')

// const IN_BASE_DEFAULT = 10
// const OUT_BASE_DEFAULT = 16
const ERROR = 0
const SUCCESS = 1

tap.match(baseConvert.baseConvert('0xFF', 16, 10), { 'log': '', 'err_code': SUCCESS, 'var': 255 })
tap.match(baseConvert.baseConvert(10, 16, 10), { 'log': '', 'err_code': SUCCESS, 'var': 16 })
tap.match(baseConvert.baseConvert(10, 10, 16), { 'log': '', 'err_code': SUCCESS, 'var': '0xA' })

tap.match(baseConvert.baseConvert(10, 33, 10), { 'log': 'Invalid base detected. Please ensure you are using bases 2 to 32!', 'err_code': ERROR, 'var': 0 })

tap.match(baseConvert.baseConvert('FF', 15, 16), { 'log': '<in> must be a valid round integer, of the given [in_base]! The default [in_base] is decimal.', 'err_code': ERROR, 'var': 0x0 })
