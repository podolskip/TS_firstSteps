"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var NewName = /** @class */ (function () {
    function NewName(n) {
        this.firstName = n;
    }
    ;
    return NewName;
}());
exports.NewName = NewName;
;
var NewLastName = /** @class */ (function () {
    function NewLastName(l) {
        this.lastName = l;
    }
    ;
    return NewLastName;
}());
exports.NewLastName = NewLastName;
exports.anotherPerson = NewLastName;
;
__export(require("./module2"));
