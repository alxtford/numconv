#!/usr/bin/env node

const IN_BASE_DEFAULT = 10
const OUT_BASE_DEFAULT = 16
const ERROR = 0
const SUCCESS = 1

module.exports = {

  /* base is the base to be cleaned and analysed
   * isInputBase is a bool, if true, the given base is in_base, otherwise it is
   * out_base
   * This function will return the cleaned/valid base or return 0 for an invalid
   * option
   */
  baseErrCatch: function (base, isInputBase) {
    if (base == null) {
      // Chooses defaults based on if this in the in or out base
      if (isInputBase) {
        return IN_BASE_DEFAULT
      } else {
        return OUT_BASE_DEFAULT
      }
    } else {
      // If there is a base, round it, and make sure it is range
      base = Math.round(base)
      if (base > 1 && base < 33) {
        return base
      } else {
        return ERROR
      }
    }
  },

  /* Function for making sure the inVar is as expected! Returns a base-10 */
  inVarErrCatch: function (inVar, inBase) {
    var dec = 0
    var err = ERROR
    var base = 0

    /* Turn inVar to a string, and look for '0x'
     * If the base is not hex, remove the '0x', otherwise, if it is hex, add it
     */
    var inVarStr = String(inVar)
    if (inBase !== 16) {
      if (inVarStr.includes('0x') || inVarStr.includes('0X')) {
        inVarStr = inVarStr.substring(2)
      }
    } else if (!inVarStr.includes('0x') && !inVarStr.includes('0X')) {
      inVarStr = '0x' + inVarStr
    }

    // Ensure the base is within range
    if (inBase > 1 && inBase < 33) {
      base = inBase
    } else {
      return {
        var: dec,
        err_code: err
      }
    }

    // Check if the base is one of the defaults. parseInt() does the rest if not!
    if (base !== IN_BASE_DEFAULT && base !== OUT_BASE_DEFAULT) {
      dec = parseInt(inVarStr, base)
    } else {
      dec = parseInt(inVarStr)
    }

    // Finally, do a safe int check
    if (Number.isSafeInteger(dec)) {
      err = SUCCESS
    } else {
      dec = 0
      err = ERROR
    }

    // Return the final object
    return {
      var: dec,
      err_code: err
    }
  }
}
