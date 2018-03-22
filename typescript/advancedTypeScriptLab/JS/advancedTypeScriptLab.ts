class genericClass<T> {
    val!: T;

    setVal(val:T):void {
        this.val = val;
    };

    getVal(): T {
        return this.val;
    };

};

let element1 = new genericClass<Element>();
let element2 = new genericClass<HTMLElement>();
let element3 = new genericClass<Element>();


element1.setVal(document.createElement("div"));
element2.setVal(document.createElement("div"));
element3.setVal(document.createElement("div"));

let elementArray:Array<any> = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal()
];

function isHTMLElement(x:any):x is HTMLElement{ //Predicate Return Type. 
    return x.style !== undefined;
};

//Predicate Return Type. This is a special type of return that is designed solely for typechecking. This is necessary since <HTMLElement> is not a type that can be checked with the typeof operator. Our custom type guard function is checking to see whether the style property exists on the object, which it does in <HTMLElement>, but not in <Element>.

//*********************ADVANCED TYPES & OPERATORS */

function convertElement(elem: Element|HTMLElement): HTMLElement {
    if(!isHTMLElement(elem)){
        return <HTMLElement>elem;
    } else {
        return elem;
    };
};

function standardizeElements(elemArray: Array<any>): Array<HTMLElement> {

    for (let elem of elemArray){ //let elem in elemArray
        convertElement(elem);
    };

    return elemArray;

};

let standardElements:Array<HTMLElement> = standardizeElements(elementArray);

//The for...of syntax is exclusive to Typescript, and is a distinct differentiation from the for...in syntax. Whereas in the for...in syntax, the first parameter is a variable that will be assigned the index or key within the array for each iterated property, the for...of syntax assigns the value of each position to the variable instead.

//*********************Creating AMixin */

class Rotater {

    rotate(elem:HTMLElement):void{
        elem.style.transform = "rotate -315deg";
    };

    rotateBack(elem:HTMLElement):void {
        elem.style.transform = "";
    };

};

class Mover {

    move(elem:HTMLElement):void{
        elem.style.transform = "translateX(50px)";
    };

    moveBack(elem:HTMLElement):void {
        elem.style.transform = "";
    };
};

class movingElement implements Rotater, Mover {
    rotate!: (elem:HTMLElement)=> void;
    move!: (elem: HTMLElement) => void;
    moveBack!: (elem: HTMLElement) => void;
    rotateBack!: (elem: HTMLElement) => void;
    element: HTMLElement;

    constructor(elem:HTMLElement){
        let funA = this.move;
        
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
    };
};