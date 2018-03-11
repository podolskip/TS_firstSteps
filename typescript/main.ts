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


// *************** TYPE Compatibility ************

interface Name {
    name:string;
};

let x1: Name;
let y1 = {name:'Alice', location: 'Seattle'};

x1 = y1;

function sayHello(name: Name) {
    console.log('Hello ' + name + '!');
};

sayHello(y1); // function passes even thought y1 has additionall key called 'location'

// Enums
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status2 = Status.Ready;
// status2 = Color.Green;  //error

//************** TYPES ***************/

//type interface

let exammpleStr = "example string"; //TS will assumed that this type is a string
let exampleNum = 1; //TS will assume that this is a string
let exArray = [3,6,null];//TS will assume that this is a array of numbers

//type assertion

let underDeclaredType: any = "this i a string";
let lengthOfString: number = (underDeclaredType as string).length;
lengthOfString = (<string>underDeclaredType).length;

//interface

interface squareDescriptor {
    name: string;
    size: number;
};

//create method taking interface

let sqFunction: Function = function(square: squareDescriptor):string {
    return square.name;
};

let square = {
    name: 'cool',
    size: 6
};

let square2 = {
    name: 'cool'
};

let executeFn = sqFunction(square);
let executeFn2 = sqFunction(square2);
console.log(executeFn2);

class squareClass implements squareDescriptor {
    name : string = 'bad';
    size: number = 33;
};

//******************* FUNCTIONS */

function createUser(n:string,ln:string,age?:number,nationality:string = "USA"): string {//questionmark tells that whis is an optional method argument
    if (age){
        return n + ' ' + ln + 'is ' + age + ' years old...';
    } else {
        return n + ' ' + ln + 'is  from ' + nationality;
    };
};

//In TypeScript, you can gather these arguments together into a variable:
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
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

class Foo {
    myMethod(a: string): void;
    myMethod(a: number): void;
    myMethod(a: number, b: string): void;
    myMethod(a: any, b?: string): void {
        alert(a.toString());
    };
};

// As of TypeScript 1.4, you can typically remove the need for an overload using a union type. The above example can be better expressed using:

function myMethod2(a: string | number, b?: string): void {
    alert(a.toString());
}
