const countLetters = require ('../countLetters');
const assert = require('chai').assert;



describe('#countLetters',() => {
  it("returns {'a':1, 'b':1, 'c':1, '1': 1,'2':2, '3':1 } for 'abc123'", () => {
    assert.strictEqual(countLetters("abc123"),{'a':1, 'b':1, 'c':1, '1': 1,'2':1, '3':1});

  });

  
});


