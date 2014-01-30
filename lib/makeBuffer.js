
'use strict';

var RingBuffer = require('./RingBuffer');

function makeBuffer(BufferType) {
  return function(n) {
    if(typeof n !== 'number') {
      throw new Error('Can\'t create a buffer of non-numeric size');
    }
    if(n <= 0) {
      throw new Error('Can\'t create a buffer of size <= 0');
    }
    return new BufferType(RingBuffer.create(n), n);
  }
}

module.exports = makeBuffer;
