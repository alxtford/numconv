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
      if (isInputBase) {
        return IN_BASE_DEFAULT
      } else {
        return OUT_BASE_DEFAULT
      }
    } else {
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
    var dec, err, base

    if (inBase > 1 && inBase < 33) {
      base = inBase
    } else {
      return ERROR
    }

    inVar = inVar.toString()

    if (inVar.includes('0x') || inVar.includes('0X')) {
      dec = inVar.substring(2)
    } else {
      dec = inVar
    }

    if (base !== IN_BASE_DEFAULT) {
      dec = parseInt(dec, base)
    } else {
      dec = Number.parseInt(dec)
    }

    if (Number.isSafeInteger(dec)) {
      err = SUCCESS
    } else {
      err = ERROR
    }

    return {
      var: dec,
      err_code: err
    }
  }
}
