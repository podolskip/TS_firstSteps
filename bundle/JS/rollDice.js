(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
var sqSize = 100;
var sqSizeDesc = sqSize + "px";
var sqBorder = "15px solid black";
var sqPadding = "10px";
var sqMargin = "10px";
var btn = document.createElement('button');
var sqContainer = document.createElement('div');
sqContainer.style.display = "inline-block";
sqContainer.style.textAlign = 'centered';
var sqSingle = document.createElement('div');
sqSingle.style.border = sqBorder;
sqSingle.style.padding = sqPadding;
sqSingle.style.margin = sqMargin;
sqSingle.style.width = sqSizeDesc;
sqSingle.style.height = sqSizeDesc;
var DiceNum;
(function (DiceNum) {
    DiceNum[DiceNum["One"] = 0] = "One";
    DiceNum[DiceNum["Two"] = 1] = "Two";
    DiceNum[DiceNum["three"] = 2] = "three";
    DiceNum[DiceNum["Four"] = 3] = "Four";
    DiceNum[DiceNum["Five"] = 4] = "Five";
    DiceNum[DiceNum["Six"] = 5] = "Six";
})(DiceNum || (DiceNum = {}));
;
var sqColection = {
    div: sqSingle
};
var NewSq = /** @class */ (function () {
    function NewSq(size, border, marg, padd) {
        this.sq = document.createElement('div');
        this.sq.style.border = border;
        this.sq.style.padding = padd;
        this.sq.style.margin = marg;
        this.sq.style.width = size;
        this.sq.style.height = size;
        this.sq.style.display = "inline-block";
    }
    ;
    return NewSq;
}());
var sqArray = [];
for (var i = 0; i < 4; i++) {
    sqArray.push(new NewSq(sqSizeDesc, sqBorder, sqMargin, sqPadding));
}
for (var i = 0; i < 4; i++) {
    console.log(typeof (sqArray[i].sq));
    sqContainer.appendChild(sqArray[i].sq);
}
sqContainer.appendChild(sqSingle);
document.body.appendChild(btn);
document.body.appendChild(sqContainer);

},{}]},{},[1]);
