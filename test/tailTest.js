const assert = require('chai').assert;
const tail = require('../tail.js');


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [1,2,3,4,5] for [0,1,2,3,4,5]", () => {
    assert.deepEqual(tail([0,1,2,3,4,5]), [1,2,3,4,5]);
  });
});
