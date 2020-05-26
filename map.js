"use strict";

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

module.exports = function (testFile) {
  return testFile.replace(/test\//, '');
};