(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var excersise_1 = require("./excersise");
var genericClass = /** @class */ (function () {
    function genericClass() {
    }
    genericClass.prototype.setVal = function (val) {
        this.val = val;
    };
    ;
    genericClass.prototype.getVal = function () {
        return this.val;
    };
    ;
    return genericClass;
}());
;
var element1 = new genericClass();
var element2 = new genericClass();
var element3 = new genericClass();
element1.setVal(document.createElement("div"));
element2.setVal(document.createElement("div"));
element3.setVal(document.createElement("div"));
var elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal()
];
function isHTMLElement(x) {
    return x.style !== undefined;
}
;
//Predicate Return Type. This is a special type of return that is designed solely for typechecking. This is necessary since <HTMLElement> is not a type that can be checked with the typeof operator. Our custom type guard function is checking to see whether the style property exists on the object, which it does in <HTMLElement>, but not in <Element>.
//*********************ADVANCED TYPES & OPERATORS */
function convertElement(elem) {
    if (!isHTMLElement(elem)) {
        return elem;
    }
    else {
        return elem;
    }
    ;
}
;
function standardizeElements(elemArray) {
    for (var _i = 0, elemArray_1 = elemArray; _i < elemArray_1.length; _i++) {
        var elem = elemArray_1[_i];
        convertElement(elem);
    }
    ;
    return elemArray;
}
;
var standardElements = standardizeElements(elementArray);
//The for...of syntax is exclusive to Typescript, and is a distinct differentiation from the for...in syntax. Whereas in the for...in syntax, the first parameter is a variable that will be assigned the index or key within the array for each iterated property, the for...of syntax assigns the value of each position to the variable instead.
//*********************Creating AMixin */
var Rotater = /** @class */ (function () {
    function Rotater() {
    }
    Rotater.prototype.rotate = function (elem) {
        elem.style.transform = "rotate(-315deg)";
    };
    Rotater.prototype.rotateBack = function (elem) {
        elem.style.transform = "";
    };
    return Rotater;
}());
var Mover = /** @class */ (function () {
    function Mover() {
    }
    Mover.prototype.move = function (elem) {
        elem.style.transform = "translateX(50px)";
    };
    Mover.prototype.moveBack = function (elem) {
        elem.style.transform = "";
    };
    return Mover;
}());
function animated(constructor) {
    constructor.prototype.animated = true;
    return constructor;
}
var movingElement = /** @class */ (function () {
    function movingElement(elem) {
        var _this = this;
        this.animated = false;
        elem.onmousedown = function () {
            _this.move(elem);
        };
        elem.onmouseup = function () {
            _this.moveBack(elem);
        };
        elem.onmouseover = function () {
            _this.rotate(elem);
        };
        elem.onmouseout = function () {
            _this.rotateBack(elem);
        };
        if (this.animated) {
            elem.style.transition = "transform .5s ease";
        }
        this.element = elem;
    }
    return movingElement;
}());
// function applyMixins(derivedClass: any, baseClasses: any[]) {
//     baseClasses.forEach(baseClass => {
//         Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
//             derivedClass.prototype[name] = baseClass.prototype[name];
//         });
//     });
// };
excersise_1.applyMixins(movingElement, [Mover, Rotater]);
function getAvatar_Promise(elem) {
    fetch('https://uinames.com/api/').then(function (response) {
        return response.json();
    }).then(function (response) {
        alert('Hi! My name is ' + response.name);
        var avatar = 'https://robohash.org/set_set3/' + response.name + '?size=60x60';
        elem.style.backgroundImage = 'url("' + avatar + '")';
        document.body.appendChild(elem);
    });
}
for (var _i = 0, standardElements_1 = standardElements; _i < standardElements_1.length; _i++) {
    var elem = standardElements_1[_i];
    elem.style.width = "60px";
    elem.style.height = "60px";
    elem.style.margin = "5px";
    var elemClass = new movingElement(elem);
    getAvatar_Promise(elemClass.element);
}
;

},{"./excersise":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function applyMixins(derivedClass, baseClasses) {
    baseClasses.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
;

},{}]},{},[1,2]);
