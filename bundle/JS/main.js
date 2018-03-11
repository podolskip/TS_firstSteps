(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
var color = "green";
var squareSizeNum = 100;
var squareSize = squareSizeNum + 'px';
var button = document.createElement('button');
var div = document.createElement('div');
button.textContent = 'Change color';
document.body.appendChild(button);
document.body.appendChild(div);

},{}],2:[function(require,module,exports){
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
/**
 *
 *
 * @class driveDistance
 */
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
// ************** ABSTRACT CLASS ****************
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    ;
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    ;
    return Department;
}());
;
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    ;
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    ;
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    ;
    return AccountingDepartment;
}(Department));
;
// let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
// department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
// department.printName();
// department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type
// *********** Advanced Techniques **************
//Using a class as an interface
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
// ************ CLASS inheritance ***********
var Car = /** @class */ (function () {
    function Car(n) {
        this.name = n;
    }
    ;
    Car.prototype.maxSpeed = function (speed) {
        console.log(this.name + ' has maximum speed of' + speed);
    };
    ;
    return Car;
}());
;
var Renault = /** @class */ (function (_super) {
    __extends(Renault, _super);
    function Renault(n) {
        return _super.call(this, n) || this;
    }
    ;
    Renault.prototype.maxSpeed = function (speed) {
        if (speed === void 0) { speed = 200; }
        console.log("French unreliable car...");
        _super.prototype.maxSpeed.call(this, speed);
    };
    ;
    return Renault;
}(Car));
;
var Hyundai = /** @class */ (function (_super) {
    __extends(Hyundai, _super);
    function Hyundai(n) {
        return _super.call(this, n) || this;
    }
    ;
    Hyundai.prototype.maxSpeed = function (speed) {
        if (speed === void 0) { speed = 166; }
        console.log("Good japan car!");
        _super.prototype.maxSpeed.call(this, speed);
    };
    ;
    return Hyundai;
}(Car));
;
var twingo = new Renault("Twingo");
var something = new Hyundai("Something");
twingo.maxSpeed();
something.maxSpeed(150);
;
var x1;
var y1 = { name: 'Alice', location: 'Seattle' };
x1 = y1;
function sayHello(name) {
    console.log('Hello ' + name + '!');
}
;
sayHello(y1); // function passes even thought y1 has additionall key called 'location'
// Enums
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var status2 = Status.Ready;
// status2 = Color.Green;  //error
//************** TYPES ***************/
//type interface
var exammpleStr = "example string"; //TS will assumed that this type is a string
var exampleNum = 1; //TS will assume that this is a string
var exArray = [3, 6, null]; //TS will assume that this is a array of numbers
//type assertion
var underDeclaredType = "this i a string";
var lengthOfString = underDeclaredType.length;
lengthOfString = underDeclaredType.length;
;
//create method taking interface
var sqFunction = function (square) {
    return square.name;
};
var square = {
    name: 'cool',
    size: 6
};
var square2 = {
    name: 'cool'
};
var executeFn = sqFunction(square);
var executeFn2 = sqFunction(square2);
console.log(executeFn2);
var squareClass = /** @class */ (function () {
    function squareClass() {
        this.name = 'bad';
        this.size = 33;
    }
    return squareClass;
}());
;
//******************* FUNCTIONS */
function createUser(n, ln, age, nationality) {
    if (nationality === void 0) { nationality = "USA"; }
    if (age) {
        return n + ' ' + ln + 'is ' + age + ' years old...';
    }
    else {
        return n + ' ' + ln + 'is  from ' + nationality;
    }
    ;
}
;
//In TypeScript, you can gather these arguments together into a variable:
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
// Function while creating callbacks calls
// class Handler {
//     info!: string;
//     onClickGood(this: void, e: Event) {
//         // can't use this here because it's of type void!
//         console.log('clicked!');
//     }
// }
// class Handler2 {
//     info!: string;
//     onClickGood = (e: Event) => { this.info = e.message }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);
// Because onClickGood specifies its this type as void, it is legal to pass to addClickListener. Of course, this also means that it can't use this.info. If you want both then you'll have to use an arrow function:
// ********** OVERLOADS *****************
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.myMethod = function (a, b) {
        alert(a.toString());
    };
    ;
    return Foo;
}());
;
// As of TypeScript 1.4, you can typically remove the need for an overload using a union type. The above example can be better expressed using:
function myMethod2(a, b) {
    alert(a.toString());
}

},{}]},{},[1,2]);
