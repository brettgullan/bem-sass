var path    = require("path");
var Sassaby = require("sassaby");

describe("Custom string functions", function() {

  var sassaby;
  beforeEach(function() { 
    sassaby = new Sassaby(
      path.resolve("src/functions", "_str.scss")
    ); 
  }); 

  describe("str-match", function() {
    it("returns matched string if there is a matched string", function() {
      sassaby.func("str-match").calledWithArgs(
        "block__element",
        "__"
      ).equals("__"); 

      sassaby.func("str-match").calledWithArgs(
        "block__element_modifier",
        "_"
      ).equals("_"); 
    });

    it("returns null if there is no matched string", function() {

      sassaby.func("str-match").calledWithArgs(
        "block__element",
        "_"
      ).isFalsy();

      sassaby.func("str-match").calledWithArgs(
        "block-element",
        "__"
      ).isFalsy();
    });
  });
});

