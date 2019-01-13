# numconv

> Utility to convert integers between bases

[![Build Status](https://travis-ci.com/alxtford/numconv.svg?branch=master)](https://travis-ci.com/alxtford/numconv)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ade8499d0f2f47e3a7f9c7e57c2e8010)](https://www.codacy.com/app/alxtford/numconv?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=alxtford/numconv&amp;utm_campaign=Badge_Grade)
[![install size](https://packagephobia.now.sh/badge?p=numconv)](https://packagephobia.now.sh/result?p=numconv)

## Install

```console
$ npm i -g numconv
```
### or

```console
$ npm i numconv --save
```

## Usage

```console
$ numconv --help
```
### or

```console
var numConv = require('numConv')

// numConv(inputVar, inputBase, outputBase)
var obj = numConv('0xFF', 16, 10)

/* obj = {
 *  var: 255,
 *  err_code: 1,
 *  log: ''
 * } */

```

### NOTE:
* `inputVar` must be a string if it contains any characters. Can be an integer if only values 0-9 are used
* `inputBase` and `outputBase` must be bases 2-32

## Output
Format of the return output is as follows:

`var: ` Is the converted value. Will be === `0` if an error is encountered.

`err_code: ` Can be used for validity checking. Will return 1 on success.

`log: ` Will be `''` by default, or on success. A string describing the error will be returned if `err_code` === 0 (error)

## License

ISC © Contributors
