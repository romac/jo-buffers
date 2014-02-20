
'use strict';

var util = require('util'),
    makeBuffer = require('./makeBuffer'),
    UnblockingBuffer = require('./buffer').UnblockingBuffer;

module.exports = SlidingBuffer;

function SlidingBuffer(buf, n) {
  this.buf = buf;
  this.n = n;
}

util.inherits(SlidingBuffer, UnblockingBuffer);

SlidingBuffer.prototype = {
  isFull: function() {
    return false;
  },
  remove: function() {
    return this.buf.pop();
  },
  add: function(x) {
    if(this.isFull()) {
      this.remove();
    }
    this.buf.unshift(x);
  },
  count: function() {
    return this.buf.length;
  }
};

SlidingBuffer.create = makeBuffer(SlidingBuffer);
