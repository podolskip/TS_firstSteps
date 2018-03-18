"use strict";

let sqSize:number = 100;
let sqSizeDesc: string = sqSize + "px";
let sqBorder: string = "15px solid black";
let sqPadding: string = "10px";
let sqMargin: string = "10px";

let btn: HTMLElement;
let sqContainer: Element = document.createElement('div');
(sqContainer as HTMLElement).style.display = "inline-block";
(sqContainer as HTMLElement).style.textAlign = 'centered';

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
enum DiceNum {
    One,
    Two,
    three,
    Four,
    Five,
    Six
};
/**
 * 
 * 
 * @interface sqEl
 */
interface sqEl {
    sq: HTMLElement;
}

/**
 * 
 * 
 * @class NewSq
 */
class NewSq implements sqEl{
    sq: HTMLElement;
    /**
     * Creates an instance of NewSq.
     * @param {string} size 
     * @param {string} border 
     * @param {string} marg 
     * @param {string} padd 
     * @memberof NewSq
     */
    constructor(size:string,border:string,marg:string,padd: string,){
        this.sq = document.createElement('div');
        this.sq.style.border = border;
        this.sq.style.padding = padd;
        this.sq.style.margin = marg;
        this.sq.style.width = size;
        this.sq.style.height = size;
        this.sq.style.display = "inline-block";
        this.sq.style.textAlign = "center";
        this.createTextContainer();

    };
    /**
     * @description function adds inner divs to position numbers right
     * 
     * @memberof NewSq
     */
    createTextContainer():void {
        let divTable:HTMLElement = document.createElement('div');
        let divToInsert: HTMLElement = document.createElement('div');
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

};
/**
 * @property {HTMLElement} btn
 * @interface btnEl
 */
interface btnEl {
    btn:HTMLElement;
}

/**
 * class creates button html element
 * @namespace
 * @property {HTMLElement} btn
 * 
 * @class NewBtn
 */
class NewBtn implements btnEl {
    btn:HTMLElement;
    /**
     * Creates an instance of NewBtn.
     * @memberof NewBtn
     */
    constructor(){
        this.btn = document.createElement("button");
        this.btn.textContent = "FLIP";
        this.btn.style.padding = "5px";
        this.btn.style.fontSize = "30px";
        this.btn.style.margin = "20px";
        this.btn.style.display = "block";
        this.btn.onclick = function():void {
            //flip dices function
            console.log("works!");
            flip();
        };
    };

};
/**
 * define new instance of 
 * @type {Array<NewSq>}
 */
let btn2:btnEl = new NewBtn;
/**
 * @description arrays being used to store html square elements
 * @type {Array<NewSq>} 
 */
let sqArray: Array<NewSq> = [];
/**
 * function creating new HtmlElement with use of class NewSq
 * 
 * @param {Array<NewSq>} arrToPass 
 * @returns {Array<NewSq>} 
 */
function fillArrWithHTMLSquares(arrToPass:Array<NewSq>):Array<NewSq> {
    for (let i:number=0;i<4;i++){
        arrToPass.push(new NewSq(sqSizeDesc, sqBorder, sqMargin, sqPadding));
    };

    return arrToPass;
};
/**
 * Function creates one html element out of array containig htmlElements
 * 
 * @param {Array<NewSq>} arrToPass 
 * @param {HTMLElement} sqContainer 
 * @returns {HTMLElement} 
 */
function buildHtmlOutOfHtmlElementsArray(arrToPass:Array<NewSq>,sqContainer:HTMLElement):HTMLElement{
    for (let i:number=0;i<4;i++){
        // console.log(typeof(sqArray[i].sq));
        sqContainer.appendChild(arrToPass[i].sq);
    };

    return sqContainer;
};

/**
 * creates new instance of a button
 */

function flip():void {
    let sqCol:HTMLCollectionOf<Element> = document.getElementsByClassName("squareToFlip");
    
    for (let i:number=0;i<sqCol.length;i++){
        (sqCol[i] as HTMLElement).innerText = DiceNum[getRandomNumber(0,5)]; 
    };
};

let getRandomNumber: Function = function(min:number,max:number): number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
};

sqArray = fillArrWithHTMLSquares(sqArray);
sqContainer = buildHtmlOutOfHtmlElementsArray(sqArray,(sqContainer as HTMLElement));

document.body.appendChild(btn2.btn);
document.body.appendChild(sqContainer);






