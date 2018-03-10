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
;
var NewBiologyStudent = /** @class */ (function () {
    function NewBiologyStudent() {
        this.faculty = "Biology";
    }
    ;
    return NewBiologyStudent;
}());
;
var NewStudent = /** @class */ (function (_super) {
    __extends(NewStudent, _super);
    function NewStudent(name, lastName, age, yearOfStudies, gender, tongue, entryExamScores, finalGetInScore) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.lastName = lastName;
        _this.age = age;
        _this.yearOfStudies = yearOfStudies;
        gender !== '' ? _this.gender = gender : '';
        _this.tongue = tongue;
        _this.entryExamScores = entryExamScores;
        _this.finalGetInScore = _this.calculateGetInScore(entryExamScores);
        return _this;
    }
    NewStudent.prototype.calculateGetInScore = function (scores) {
        var finalScore;
        finalScore = scores.reduce(function (a, b) {
            return a + b;
        });
        return finalScore;
    };
    ;
    return NewStudent;
}(NewBiologyStudent));
;
var cW = new NewStudent("Caroline", "Wright", 20, 1, 'male', ['French', 'English'], [23, 55, 50, 44], 0);
console.log(cW.name + ' scored ' + cW.finalGetInScore + ' and can speek ' + cW.tongue.reduce(function (a, b) { return a + ', ' + b; }) + '!');
console.log(cW.name + ' studies ' + cW.faculty + '!');
// *************** Accessors ***************************
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// ******************* STATIC PROPERTIES ************
var driveDistance = /** @class */ (function () {
    function driveDistance(priceForLiter) {
        this.priceForLiter = priceForLiter;
    }
    driveDistance.prototype.getDistance = function (money) {
        var fuelLiters = money.x / this.priceForLiter;
        var km = (fuelLiters * 100) / driveDistance.fuelUsage["100km"];
        return "For " + money.x + " PLN you can drive " + Math.round(km) + " kilometers...";
    };
    ;
    driveDistance.fuelUsage = { '100km': 9 };
    return driveDistance;
}());
var today = new driveDistance(3.16);
var yesterday = new driveDistance(3.9);
console.log(today.getDistance({ x: 100 }));
console.log(yesterday.getDistance({ x: 100 }));

},{}]},{},[1]);
