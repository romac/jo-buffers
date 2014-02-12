
'use strict';

var util = require('util');

module.exports = {
  Buffer: Buffer,
  UnblockingBuffer: UnblockingBuffer
};

// interface Buffer {
//   isFull()
//   add()
//   remove()
//   count
// }
function Buffer() {}

// interface UnblockingBuffer extends Buffer
function UnblockingBuffer() {}

util.inherits(UnblockingBuffer, Buffer);
