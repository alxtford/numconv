#!/usr/bin/env node

// Takes a decimal as an integer. Returns a hex as a string.
module.exports = {
  decToHex: function (dec) {
    if (dec > Number.MAX_SAFE_INTEGER) {
      dec = Number.MAX_SAFE_INTEGER
    }

    if (dec < Number.MIN_SAFE_INTEGER) {
      dec = Number.MIN_SAFE_INTEGER
    }

    dec = Math.round(dec)

    if (dec < 0) {
      // Change negative num to positive. The symbol is appended via the string!
      dec = -dec
      return '-0x' + dec.toString(16).toUpperCase()
    } else {
      return '0x' + dec.toString(16).toUpperCase()
    }
  },

  // Takes a hex as a string. Returns a decimal as an int.
  hexToDec: function (hex) {
    var dec
    dec = parseInt(hex, 16)

    // If the dec is not a safe int, return the closest safe integer
    if (!Number.isSafeInteger(dec)) {
      if (dec < 0) {
        return Number.MIN_SAFE_INTEGER
      } else {
        return Number.MAX_SAFE_INTEGER
      }
    }

    return dec
  }
}
