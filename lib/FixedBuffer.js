
'use strict';

var util = require('util'),
    assert = require('./assert'),
    makeBuffer = require('./makeBuffer'),
    Buffer = require('./buffer').Buffer;

module.exports = FixedBuffer;

function FixedBuffer(buf, n) {
  this.buf = buf;
  this.n = n;
}

util.inherits(FixedBuffer, Buffer);

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
