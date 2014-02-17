
'use strict';

function arrayCopy(src, srcStart, dest, destStart, len) {
  for(var i = 0; i < len; i += 1) {
    dest[destStart + i] = src[srcStart + i];
  }
}

module.exports = arrayCopy;
