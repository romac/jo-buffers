
'use strict';

var assert = require('./assert'),
    arrayCopy = require('./arrayCopy');

module.exports = RingBuffer;

function RingBuffer(head, tail, length, arr) {
  assert(Array.isArray(arr), 'Last argument to RingBuffer() must be of type array');

  this.head = head   | 0;
  this.tail = tail   | 0;
  this.length = length | 0;
  this.arr = arr;
}

RingBuffer.prototype = {
  pop: function() {
    if(this.length !== 0) {
      var x = this.arr[this.tail];
      this.arr[this.tail] = null;
      this.tail = (this.tail + 1) % this.arr.length;
      this.length -= 1;
      return x;
    }
  },

  unshift: function(x) {
    this.arr[this.head] = x;
    this.head = (this.head + 1) % this.arr.length;
    this.length += 1;
  },

  unboundedUnshift: function(x) {
    if(this.length + 1 === this.arr.length) {
      this.resize();
    }
    return this.unshift(x);
  },

  resize: function() {
    var newSize = this.arr.length * 2,
        newArr = Array(newSize);

    if(this.tail < this.head) {
      arrayCopy(this.arr, this.tail, newArr, 0, this.length);
      this.tail = 0;
      this.tail = this.length;
    }
    else if(this.tail > this.head) {
      arrayCopy(this.arr, this.tail, newArr, 0, this.length - this.tail);
      arrayCopy(this.arr, 0, newArr, this.length - this.tail, this.head);
      this.tail = 0;
      this.head = this.length;
    }
    else if(this.head === this.tail) {
      this.head = this.tail = 0;
    }

    this.arr = newArr;
  },

  cleanup: function(keep) {
    var keepFn = (typeof keep === 'function') ? keep : function() {
      return keep === true;
    };

    for(var i = 0; i < this.length; i += 1) {
      var v = this.pop();
      if(keepFn(v)) {
        this.unshift(v);
      }
    }
  }
};

RingBuffer.create = function(n) {
  if(typeof n !== 'number') {
    throw new Error('Cannot create a buffer of non-numeric size');
  }
  if(n <= 0) {
    throw new Error('Cannot create a buffer of size <= 0');
  }
  return new RingBuffer(0, 0, 0, Array(n));
};
