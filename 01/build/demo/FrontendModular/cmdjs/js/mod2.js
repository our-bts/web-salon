define(function(require, exports, module) {
  var m2 = require('mod1');
  exports.alert = function() {
    m2.alert();
  };
});