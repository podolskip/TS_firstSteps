"use strict";

let sqSize:number = 100;
let sqSizeDesc: string = sqSize + "px";
let sqBorder: string = "15px solid black";
let sqPadding: string = "10px";
let sqMargin: string = "10px";

let btn: Element = document.createElement('button');
let sqContainer: Element = document.createElement('div');
(sqContainer as HTMLElement).style.display = "inline-block";
(sqContainer as HTMLElement).style.textAlign = 'centered';

let sqSingle:HTMLElement = document.createElement('div');
sqSingle.style.border = sqBorder;
sqSingle.style.padding = sqPadding;
sqSingle.style.margin = sqMargin;
sqSingle.style.width = sqSizeDesc;
sqSingle.style.height = sqSizeDesc;


enum DiceNum {
    One,
    Two,
    three,
    Four,
    Five,
    Six
};

interface sqEl {
    div: HTMLElement;
}

let sqColection: sqEl = {
    div:sqSingle
}

class NewSq {
    sq: HTMLElement;


    constructor(size:string,border:string,marg:string,padd: string,){
        this.sq = document.createElement('div');
        this.sq.style.border = border;
        this.sq.style.padding = padd;
        this.sq.style.margin = marg;
        this.sq.style.width = size;
        this.sq.style.height = size;
        this.sq.style.display = "inline-block";
    };

}


let sqArray: Array<NewSq> = [];

for (let i:number=0;i<4;i++){
    sqArray.push(new NewSq(sqSizeDesc, sqBorder, sqMargin, sqPadding));
}


for (let i:number=0;i<4;i++){
    console.log(typeof(sqArray[i].sq));
    sqContainer.appendChild(sqArray[i].sq);
}


sqContainer.appendChild(sqSingle);

document.body.appendChild(btn);
document.body.appendChild(sqContainer);






