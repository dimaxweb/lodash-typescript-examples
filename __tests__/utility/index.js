"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
test('try to parse invalid json', function () {
    expect(function () {
        lodash_1.attempt(JSON.parse, '1');
    }).not.toThrow();
});
