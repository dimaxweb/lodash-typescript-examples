"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
test('try to parse invalid json', function () {
    expect(function () {
        lodash_1.attempt(JSON.parse, '1');
    }).not.toThrow();
});
test('flow simple test', function () {
    var data = { info: [{ a: 1, b: 20 }, { a: 10, b: 35 }, { a: 4, b: 6 }] };
    var aGreaterThan2 = lodash_1.curryRight(lodash_1.filter)(function (item) { return item.a > 2; });
    var filterFlow = lodash_1.flow(function (item) { return lodash_1.get(item, 'info'); }, aGreaterThan2);
    var result = filterFlow(data);
    expect(result).toBeTruthy();
    expect(result.length).toEqual(2);
});
