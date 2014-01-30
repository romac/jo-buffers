
var buffers = require('../../'),
    assert = require('assert');

var f = buffers.fixed(4);
assert.strictEqual(f.count(), 0, 'f.count == 0');

f.add('hello');
assert.strictEqual(f.count(), 1, 'f.count == 1');

f.add('world');
assert.strictEqual(f.count(), 2, 'f.count == 2');

f.add('hey');
f.add('baby');

assert(f.isFull(),'f.isFull == true');

assert.throws(function() {
  f.add('too late');
}, 'f.isFull == true && f.add throws');
