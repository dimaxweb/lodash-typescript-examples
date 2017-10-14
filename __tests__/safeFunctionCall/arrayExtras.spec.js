"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayExtras_1 = require("../../src/safeFunctionCalls/arrayExtras");
var safeInstance = new arrayExtras_1.ArrayExtrasExample();
test('Array filter - calling methods on null', function () {
    var arrTest = null;
    expect(function () {
        safeInstance.filterWithoutLodash(arrTest, function (item) {
            return item;
        });
    }).toThrow();
    expect(function () {
        safeInstance.filterWithLodash(arrTest, function (item) {
            return item;
        });
    }).not.toThrow();
});
test('Map filter - calling methods on null', function () {
    var arrTest = null;
    expect(function () {
        safeInstance.mapWithoutLodash(arrTest, function (item) {
            return item;
        });
    }).toThrow();
    expect(function () {
        safeInstance.mapWithLodash(arrTest, function (item) {
            return item;
        });
    }).not.toThrow();
});
