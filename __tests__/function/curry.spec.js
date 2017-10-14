"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var add = function (x, y, z) {
    return x + y;
};
var curried = lodash_1.curry(add);
var add5 = curried(5);
test('check curry working', function () {
    var result = add5(15);
    expect(result).toEqual(20);
});
