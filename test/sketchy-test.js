var tape = require("tape"),
    sketchy = require("../");

tape("sketchy.foo() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(sketchy.sketchy.foo(), 42);
  test.end();
});
