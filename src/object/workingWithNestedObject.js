"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var WorkingWithNestedObjectExample = /** @class */ (function () {
    function WorkingWithNestedObjectExample() {
    }
    WorkingWithNestedObjectExample.prototype.get = function (param, path, defaultValue) {
        return lodash.get(param, path, defaultValue);
    };
    WorkingWithNestedObjectExample.prototype.pick = function (param, paths) {
        return lodash.pick(param, paths);
    };
    WorkingWithNestedObjectExample.prototype.omit = function (param, paths) {
        return lodash.omit(param, paths);
    };
    WorkingWithNestedObjectExample.prototype.at = function (param, paths) {
        return lodash.at(param, paths);
    };
    return WorkingWithNestedObjectExample;
}());
exports.WorkingWithNestedObjectExample = WorkingWithNestedObjectExample;
