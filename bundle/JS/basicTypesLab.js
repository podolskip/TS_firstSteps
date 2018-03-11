(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var color = "green";
    var color2 = "black";
    var squareSizeNum = 100;
    var squareSize = squareSizeNum + 'px';
    var changeColorB = true;
    var button = document.createElement('button');
    var div = document.createElement('div');
    div.style.width = squareSize;
    div.style.height = squareSize;
    div.style.border = '1px solid black';
    // button.textContent = 'Change color';
    // document.body.appendChild(button);
    // document.body.appendChild(div);
    // let colorChange: Function = function(elem: Element,color:string):boolean {
    //     (elem as HTMLElement).style.backgroundColor = color;
    //     return true;
    // };
    // (button as HTMLElement).onclick = function(event:Event){
    //     if (changeColorB){
    //         colorChange(div,color);
    //         changeColorB = !changeColorB;
    //     } else {
    //         colorChange(div,color2);
    //         changeColorB = !changeColorB;
    //     };
    // };
    //****************************** Excersise 2 starts: 
    var colorChange2 = /** @class */ (function () {
        function colorChange2(div) {
            this.div = div;
        }
        ;
        colorChange2.prototype.changeColor = function (color) {
            if (typeof color === 'number') {
                return true;
            }
            this.div.style.backgroundColor = color;
            return true;
        };
        ;
        return colorChange2;
    }());
    ;
    ;
    var Element = {
        div: document.createElement('div'),
        button: document.createElement('button')
    };
    var Colors;
    (function (Colors) {
        Colors[Colors["Green"] = 0] = "Green";
        Colors[Colors["Red"] = 1] = "Red";
        Colors[Colors["Blue"] = 2] = "Blue";
        Colors[Colors["Orange"] = 3] = "Orange";
    })(Colors || (Colors = {}));
    ;
    var numericColor = /** @class */ (function (_super) {
        __extends(numericColor, _super);
        function numericColor(div) {
            var _this = _super.call(this, div) || this;
            _this.div.style.width = squareSize;
            _this.div.style.height = squareSize;
            return _this;
        }
        ;
        numericColor.prototype.changeColor = function (color) {
            this.div.style.backgroundColor = Colors[color];
            return true;
        };
        ;
        numericColor.Colors = Colors;
        return numericColor;
    }(colorChange2));
    ;
    var elementSets = [];
    for (var i = 0; i < 4; i++) {
        elementSets.push({
            div: document.createElement('div'),
            button: document.createElement('button')
        });
    }
    ;
    var getRandomNumber = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    elementSets.map(function (elem, index) {
        var colorChangeClass = new numericColor(elem.div);
        elem.div.style.border = '1px solid black';
        elem.button.textContent = 'Change Color';
        elem.button.onclick = function (elem) {
            colorChangeClass.changeColor(getRandomNumber(0, 3));
        };
        document.body.appendChild(elem.button);
        document.body.appendChild(elem.div);
    });
})();

},{}]},{},[1]);
