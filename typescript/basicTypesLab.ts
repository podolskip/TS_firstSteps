"use strict";

let color: string = "green";
let color2: string = "black";
let squareSizeNum: number = 100;
let squareSize: string = squareSizeNum + 'px';
let changeColorB: boolean = true;


let button: Element = document.createElement('button');
let div: Element = document.createElement('div');

(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;
(div as HTMLElement).style.border = '1px solid black';

button.textContent = 'Change color';
document.body.appendChild(button);
document.body.appendChild(div);

let colorChange: Function = function(elem: Element,color:string):boolean {

    (elem as HTMLElement).style.backgroundColor = color;
    return true;
};

(button as HTMLElement).onclick = function(event:Event){
    if (changeColorB){
        colorChange(div,color);
        changeColorB = !changeColorB;
    } else {
        colorChange(div,color2);
        changeColorB = !changeColorB;
    }
    
    
};