
'use strict';

var assert = require('./assert'),
    makeBuffer = require('./makeBuffer');

module.exports = FixedBuffer;

function FixedBuffer(buf, n) {
  this.buf = buf;
  this.n = n;
}

FixedBuffer.prototype = {
  isFull: function() {
    return this.buf.length === this.n;
  },
  remove: function() {
    return this.buf.pop();
  },
  add: function(x) {
    assert(!this.isFull(), 'Cannot add to a full buffer');
    this.buf.unshift(x);
  },
  count: function() {
    return this.buf.length;
  }
};

FixedBuffer.create = makeBuffer(FixedBuffer);
