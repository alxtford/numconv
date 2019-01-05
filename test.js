#!/usr/bin/env node

var tap = require('tap')

var decHexFile = require('./dec-hex.js')
var decToHexFunc = decHexFile.decToHex

tap.equal(decToHexFunc(0), '0x0')
tap.equal(decToHexFunc(1), '0x1')
tap.equal(decToHexFunc(-1), '-0x1')
tap.equal(decToHexFunc(255), '0xFF')
tap.equal(decToHexFunc(16.4), '0x10')
tap.equal(decToHexFunc(16.5), '0x11')
// Test for max and min safe int
tap.equal(decToHexFunc(Number.MAX_SAFE_INTEGER + 1), '0x1FFFFFFFFFFFFF')
tap.equal(decToHexFunc(Number.MIN_SAFE_INTEGER - 1), '-0x1FFFFFFFFFFFFF')
