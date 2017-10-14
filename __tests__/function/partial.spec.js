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
