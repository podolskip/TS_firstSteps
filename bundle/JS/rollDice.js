(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
var sqSize = 100;
var sqSizeDesc = sqSize + "px";
var sqBorder = "15px solid black";
var sqPadding = "10px";
var sqMargin = "10px";
var btn;
var sqContainer = document.createElement('div');
sqContainer.style.display = "inline-block";
sqContainer.style.textAlign = 'centered';
// let sqSingle:HTMLElement = document.createElement('div');
// sqSingle.style.border = sqBorder;
// sqSingle.style.padding = sqPadding;
// sqSingle.style.margin = sqMargin;
// sqSingle.style.width = sqSizeDesc;
// sqSingle.style.height = sqSizeDesc;
/**
 *
 *
 * @enum {number}
 */
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
/**
 *
 *
 * @class NewSq
 */
var NewSq = /** @class */ (function () {
    /**
     * Creates an instance of NewSq.
     * @param {string} size
     * @param {string} border
     * @param {string} marg
     * @param {string} padd
     * @memberof NewSq
     */
    function NewSq(size, border, marg, padd) {
        this.sq = document.createElement('div');
        this.sq.style.border = border;
        this.sq.style.padding = padd;
        this.sq.style.margin = marg;
        this.sq.style.width = size;
        this.sq.style.height = size;
        this.sq.style.display = "inline-block";
        this.sq.style.textAlign = "center";
        this.createTextContainer();
    }
    ;
    /**
     * @description function adds inner divs to position numbers right
     *
     * @memberof NewSq
     */
    NewSq.prototype.createTextContainer = function () {
        var divTable = document.createElement('div');
        var divToInsert = document.createElement('div');
        //set up outer div
        divTable.style.display = "table";
        divTable.style.textAlign = "center";
        divTable.style.width = "100%";
        divTable.style.height = "100%";
        //set up inner div
        divToInsert.style.display = "table-cell";
        divToInsert.style.verticalAlign = "middle";
        divToInsert.textContent = "zero";
        divToInsert.style.fontSize = "25px";
        divToInsert.className = "squareToFlip";
        divTable.appendChild(divToInsert);
        this.sq.appendChild(divTable);
    };
    ;
    return NewSq;
}());
;
/**
 * class creates button html element
 * @namespace
 * @property {HTMLElement} btn
 *
 * @class NewBtn
 */
var NewBtn = /** @class */ (function () {
    /**
     * Creates an instance of NewBtn.
     * @memberof NewBtn
     */
    function NewBtn() {
        this.btn = document.createElement("button");
        this.btn.textContent = "FLIP";
        this.btn.style.padding = "5px";
        this.btn.style.fontSize = "30px";
        this.btn.style.margin = "20px";
        this.btn.style.display = "block";
        this.btn.onclick = function () {
            //flip dices function
            console.log("works!");
            flip();
        };
    }
    ;
    return NewBtn;
}());
;
/**
 * define new instance of
 * @type {Array<NewSq>}
 */
var btn2 = new NewBtn;
/**
 * @description arrays being used to store html square elements
 * @type {Array<NewSq>}
 */
var sqArray = [];
/**
 * function creating new HtmlElement with use of class NewSq
 *
 * @param {Array<NewSq>} arrToPass
 * @returns {Array<NewSq>}
 */
function fillArrWithHTMLSquares(arrToPass) {
    for (var i = 0; i < 4; i++) {
        arrToPass.push(new NewSq(sqSizeDesc, sqBorder, sqMargin, sqPadding));
    }
    ;
    return arrToPass;
}
;
/**
 * Function creates one html element out of array containig htmlElements
 *
 * @param {Array<NewSq>} arrToPass
 * @param {HTMLElement} sqContainer
 * @returns {HTMLElement}
 */
function buildHtmlOutOfHtmlElementsArray(arrToPass, sqContainer) {
    for (var i = 0; i < 4; i++) {
        // console.log(typeof(sqArray[i].sq));
        sqContainer.appendChild(arrToPass[i].sq);
    }
    ;
    return sqContainer;
}
;
/**
 * creates new instance of a button
 */
function flip() {
    var sqCol = document.getElementsByClassName("squareToFlip");
    for (var i = 0; i < sqCol.length; i++) {
        sqCol[i].innerText = DiceNum[getRandomNumber(0, 5)];
    }
    ;
}
;
var getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
sqArray = fillArrWithHTMLSquares(sqArray);
sqContainer = buildHtmlOutOfHtmlElementsArray(sqArray, sqContainer);
document.body.appendChild(btn2.btn);
document.body.appendChild(sqContainer);

},{}]},{},[1]);
