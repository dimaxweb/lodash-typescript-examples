"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function greet(greeting, name) {
    return greeting + ' ' + name;
}
test('Partial function', function () {
    var sayHelloTo = lodash_1.partial(greet, 'hello');
    var greeting = sayHelloTo('fred');
    expect(greeting).toEqual('hello fred');
});
function propertyValidate(func, path, data) {
    var property = lodash_1.get(data, path);
    return func(property);
}
var utils = {
    greaterThan: lodash_1.curryRight(function (lhs, rhs) { return lhs > rhs; }),
    lessThan: lodash_1.curryRight(function (lhs, rhs) { return lhs < rhs; })
};
var priceLessThan10 = lodash_1.partial(propertyValidate, utils.lessThan(10), 'info.price');
test('price is less than 10', function () {
    var data = {
        info: {
            name: 'Phone',
            price: 8,
        }
    };
    expect(priceLessThan10(data)).toBeTruthy();
});
var maxPriceGreaterThan = lodash_1.partial(propertyValidate, utils.greaterThan(250), 'info.maxPrice');
test('max price is greate than 250', function () {
    var data = {
        info: {
            name: 'Phone',
            price: 8,
            maxPrice: 360
        }
    };
    expect(maxPriceGreaterThan(data)).toBeTruthy();
});
