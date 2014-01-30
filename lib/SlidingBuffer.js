
'use strict';

var assert = require('./assert'),
    makeBuffer = require('./makeBuffer');

module.exports = SlidingBuffer;

function SlidingBuffer(buf, n) {
  this.buf = buf;
  this.n = n;
}

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
