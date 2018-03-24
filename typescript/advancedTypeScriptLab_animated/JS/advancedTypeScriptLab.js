(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excersise_1 = require("./excersise");
class genericClass {
    setVal(val) {
        this.val = val;
    }
    ;
    getVal() {
        return this.val;
    }
    ;
}
;
let element1 = new genericClass();
let element2 = new genericClass();
let element3 = new genericClass();
element1.setVal(document.createElement("div"));
element2.setVal(document.createElement("div"));
element3.setVal(document.createElement("div"));
let elementArray = [
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
    for (let elem of elemArray) {
        convertElement(elem);
    }
    ;
    return elemArray;
}
;
let standardElements = standardizeElements(elementArray);
//The for...of syntax is exclusive to Typescript, and is a distinct differentiation from the for...in syntax. Whereas in the for...in syntax, the first parameter is a variable that will be assigned the index or key within the array for each iterated property, the for...of syntax assigns the value of each position to the variable instead.
//*********************Creating AMixin */
class Rotater {
    rotate(elem) {
        elem.style.transform = "rotate(-315deg)";
    }
    rotateBack(elem) {
        elem.style.transform = "";
    }
}
class Mover {
    move(elem) {
        elem.style.transform = "translateX(50px)";
    }
    moveBack(elem) {
        elem.style.transform = "";
    }
}
class movingElement {
    constructor(elem) {
        elem.onmousedown = () => {
            this.move(elem);
        };
        elem.onmouseup = () => {
            this.moveBack(elem);
        };
        elem.onmouseover = () => {
            this.rotate(elem);
        };
        elem.onmouseout = () => {
            this.rotateBack(elem);
        };
        this.element = elem;
    }
}
;
// function applyMixins(derivedClass: any, baseClasses: any[]) {
//     baseClasses.forEach(baseClass => {
//         Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
//             derivedClass.prototype[name] = baseClass.prototype[name];
//         });
//     });
// };
excersise_1.applyMixins(movingElement, [Mover, Rotater]);
for (let elem of standardElements) {
    elem.style.width = "60px";
    elem.style.height = "60px";
    elem.style.backgroundColor = "green";
    elem.style.margin = "5px";
    let elemClass = new movingElement(elem);
    document.body.appendChild(elemClass.element);
}
;

},{"./excersise":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function applyMixins(derivedClass, baseClasses) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
;

},{}]},{},[1,2]);
