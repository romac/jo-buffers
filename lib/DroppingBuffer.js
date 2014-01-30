
'use strict';

var assert = require('./assert'),
    makeBuffer = require('./makeBuffer');

module.exports = DroppingBuffer;

function DroppingBuffer(buf, n) {
  this.buf = buf;
  this.n = n;
}

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
