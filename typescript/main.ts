"use strict";

// ********************* INTERFACE ***************

interface StudentData{
    name:string;
    lastName: string;
    age:number;
    readonly yearOfStudies:number;
    gender?:string;
    tongue:Array<string>;
    parents?:object;
    [finalGetInScore: string]: any;
};
class NewBiologyStudent {
    protected faculty: string; //members declared protected can also be accessed by instances of deriving classes; private can't

    protected constructor(){ // new NewBiologyStudent can't be declared and accessed from outside a class byt can be extended ith super();
        this.faculty = "Biology";
    };
};
class NewStudent extends NewBiologyStudent implements StudentData{
    readonly name:string;// property read only can only be assigned once when class instance is generated
    readonly lastName: string;
    age:number;
    readonly yearOfStudies:number;
    readonly gender?:string;
    tongue:Array<string>;
    readonly entryExamScores: Array<number>;
    finalGetInScore:number;

    constructor(name : string,lastName: string,age:number,yearOfStudies:number,gender:string,tongue:Array<string>,entryExamScores:Array<number>,finalGetInScore:number){
        super();//must be called before this, inside constructor and in class that extends other class
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.yearOfStudies = yearOfStudies;
        gender !== '' ? this.gender=gender:'';
        this.tongue = tongue;
        this.entryExamScores=entryExamScores;
        this.finalGetInScore = this.calculateGetInScore(entryExamScores);
        
    }
    
    calculateGetInScore(scores:Array<number>): number{
        let finalScore:number;

        finalScore = scores.reduce(function(a,b): number{
            return a+b;
        });
        return finalScore;
    };
};


var cW: StudentData = new NewStudent("Caroline","Wright",20,1,'male',['French','English'],[23,55,50,44],0);


console.log(cW.name + ' scored ' + cW.finalGetInScore + ' and can speek ' + cW.tongue.reduce(function(a,b):string{return a + ', ' + b}) + '!');

console.log(cW.name + ' studies ' + cW.faculty + '!');

// *************** Accessors ***************************

let passcode = "secret passcode";

class Employee {
    private _fullName!: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
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
class driveDistance {
    static fuelUsage = {'100km':9};

    getDistance(money:{x:number}){
        let fuelLiters: number = money.x/this.priceForLiter;
        let km:number = (fuelLiters * 100)/driveDistance.fuelUsage["100km"];
        return "For " + money.x + " PLN you can drive " + Math.round(km) + " kilometers...";
    }

    constructor(public priceForLiter: number){};
}   

let today = new driveDistance(3.16);
let yesterday = new driveDistance(3.9);

console.log(today.getDistance({x:100}));
console.log(yesterday.getDistance({x:100}));    


// ************** ABSTRACT CLASS ****************

abstract class Department {

    constructor(public name: string) {
    };

    printName(): void {
        console.log("Department name: " + this.name);
    };

    abstract printMeeting(): void; // must be implemented in derived classes
};

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    };

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    };

    generateReports(): void {
        console.log("Generating accounting reports...");
    };
};

// let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
// department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
// department.printName();
// department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type

// *********** Advanced Techniques **************

//Using a class as an interface

class Point {
    x!: number;
    y!: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

// ************ CLASS inheritance ***********

class Car {
    name!: string;
    
    constructor(n:string){
        this.name = n;
    };

    maxSpeed(speed:number):void {
        console.log(this.name + ' has maximum speed of' + speed);
    };
};

class Renault extends Car {
    constructor(n:string){
        super(n);
    };

    maxSpeed(speed:number = 200){
        console.log("French unreliable car...");
        super.maxSpeed(speed);
    };
};

class Hyundai extends Car {
    constructor(n:string){
        super(n);
    };

    maxSpeed(speed:number = 166){
        console.log("Good japan car!");
        super.maxSpeed(speed);
    };
};

let twingo = new Renault("Twingo");
let something = new Hyundai("Something");

twingo.maxSpeed();
something.maxSpeed(150);
