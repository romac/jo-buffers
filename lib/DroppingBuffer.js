
'use strict';

var util = require('util'),
    makeBuffer = require('./makeBuffer'),
    UnblockingBuffer = require('./buffer').UnblockingBuffer;

module.exports = DroppingBuffer;

function DroppingBuffer(buf, n) {
  this.buf = buf;
  this.n = n;
}

util.inherits(DroppingBuffer, UnblockingBuffer);

DroppingBuffer.prototype = {
  isFull: function() {
    return false;
  },
  remove: function() {
    return this.buf.pop();
  },
  add: function(x) {
    if(!this.isFull()) {
      this.buf.unshift(x);
    }
  },
  count: function() {
    return this.buf.length;
  }
};

DroppingBuffer.create = makeBuffer(DroppingBuffer);
