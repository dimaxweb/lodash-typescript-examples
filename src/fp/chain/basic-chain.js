"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var ChainExample = /** @class */ (function () {
    function ChainExample(complexObject) {
        this.complexObject = complexObject;
    }
    ChainExample.prototype.getPropertyAndRemoveValues = function (properties, reject) {
        return _.chain(this.complexObject)
            .get(properties)
            .reject(reject)
            .thru(function (adresses) {
            return adresses[0];
        })
            .value();
    };
    ChainExample.prototype.getMapFilterSort = function (path, map, filter, sort) {
        return _.chain(this.complexObject)
            .get(path)
            .value();
    };
    return ChainExample;
}());
exports.ChainExample = ChainExample;
