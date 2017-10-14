"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var ArrayExtrasExample = /** @class */ (function () {
    function ArrayExtrasExample() {
    }
    ArrayExtrasExample.prototype.filterWithLodash = function (param, functionName) {
        return lodash.filter(param, functionName);
    };
    ArrayExtrasExample.prototype.filterWithoutLodash = function (param, functionName) {
        return param.filter(functionName);
    };
    ArrayExtrasExample.prototype.mapWithLodash = function (param, functionName) {
        return lodash.map(param, functionName);
    };
    ArrayExtrasExample.prototype.mapWithoutLodash = function (param, functionName) {
        return param.map(functionName);
    };
    return ArrayExtrasExample;
}());
exports.ArrayExtrasExample = ArrayExtrasExample;
