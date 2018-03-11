(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
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
button.textContent = 'Change color';
document.body.appendChild(button);
document.body.appendChild(div);
var colorChange = function (elem, color) {
    elem.style.backgroundColor = color;
    return true;
};
button.onclick = function (event) {
    if (changeColorB) {
        colorChange(div, color);
        changeColorB = !changeColorB;
    }
    else {
        colorChange(div, color2);
        changeColorB = !changeColorB;
    }
};

},{}]},{},[1]);
