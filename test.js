#!/usr/bin/env node

var tap = require('tap')

var decHexFile = require('./dec-hex.js')
var decToHexFunc = decHexFile.decToHex
var hexToDecFunc = decHexFile.hexToDec

// Test for common hex values
tap.equal(decToHexFunc(0), '0x0')
tap.equal(decToHexFunc(1), '0x1')
tap.equal(decToHexFunc(-1), '-0x1')
tap.equal(decToHexFunc(255), '0xFF')
tap.equal(decToHexFunc(16.4), '0x10')
tap.equal(decToHexFunc(16.5), '0x11')
// Test for max and min safe int
tap.equal(decToHexFunc(Number.MAX_SAFE_INTEGER + 1), '0x1FFFFFFFFFFFFF')
tap.equal(decToHexFunc(Number.MIN_SAFE_INTEGER - 1), '-0x1FFFFFFFFFFFFF')

// Test for common hex values
tap.equal(hexToDecFunc('0x0'), 0)
tap.equal(hexToDecFunc('0x1'), 1)
tap.equal(hexToDecFunc('-0x1'), -1)
tap.equal(hexToDecFunc('0xFF'), 255)
tap.equal(hexToDecFunc('0x11'), 17)
// Test for max and min safe int
tap.equal(hexToDecFunc('0x2FFFFFFFFFFFFF'), Number.MAX_SAFE_INTEGER)
tap.equal(hexToDecFunc('-0x2FFFFFFFFFFFFF'), Number.MIN_SAFE_INTEGER)
