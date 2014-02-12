
var DroppingBuffer = require('./lib/DroppingBuffer'),
    SlidingBuffer = require('./lib/SlidingBuffer'),
    FixedBuffer = require('./lib/FixedBuffer'),
    RingBuffer = require('./lib/RingBuffer');

module.exports = {
  DroppingBuffer: DroppingBuffer,
  SlidingBuffer: SlidingBuffer,
  FixedBuffer: FixedBuffer,
  RingBuffer: RingBuffer,
  dropping: DroppingBuffer.create,
  sliding: SlidingBuffer.create,
  fixed: FixedBuffer.create,
  ring: RingBuffer.create,
  default: FixedBuffer.create
};
