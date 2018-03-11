"use strict";
(function(): void{
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

    // button.textContent = 'Change color';
    // document.body.appendChild(button);
    // document.body.appendChild(div);

    

    // let colorChange: Function = function(elem: Element,color:string):boolean {

    //     (elem as HTMLElement).style.backgroundColor = color;
    //     return true;
    // };

    // (button as HTMLElement).onclick = function(event:Event){
    //     if (changeColorB){
    //         colorChange(div,color);
    //         changeColorB = !changeColorB;
    //     } else {
    //         colorChange(div,color2);
    //         changeColorB = !changeColorB;
    //     };
    // };

    //****************************** Excersise 2 starts: 
    class colorChange2{
        div:Element;
        constructor(div:Element){
            this.div = div;
        };

        changeColor(color:string | number): boolean{
            if(typeof color === 'number'){
                return true
            }            
            (this.div as HTMLElement).style.backgroundColor = color;
            return true;  
        };
    };

   
    interface ElementSet{
        div: Element;
        button: Element;
    };

    let Element: ElementSet = {
        div: document.createElement('div'),
        button: document.createElement('button')
    };

    enum Colors{
        Green,
        Red,
        Blue,
        Orange
    };

    class numericColor extends colorChange2 {
        static Colors = Colors;
        constructor(div: Element) {
            super(div);
            (this.div as HTMLElement).style.width = squareSize;
            (this.div as HTMLElement).style.height = squareSize;
        };
        changeColor (color: number) : boolean{
            (this.div as HTMLElement).style.backgroundColor = Colors[color];
            return true;
        };
    };

    let elementSets: Array<ElementSet> = [];

    for (let i:number = 0;i<4;i++){
        elementSets.push({
            div: document.createElement('div'),
            button: document.createElement('button')
        });
    };
    
    let getRandomNumber: Function = function(min:number,max:number): number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min+1))+min;
    };

    elementSets.map(function(elem,index){
        let colorChangeClass = new numericColor(elem.div);
        
        (elem.div as HTMLElement).style.border = '1px solid black';
        elem.button.textContent = 'Change Color';
        (elem.button as HTMLElement).onclick = function(elem){
            colorChangeClass.changeColor(getRandomNumber(0,3));
        };
        document.body.appendChild(elem.button);
        document.body.appendChild(elem.div);
    });



})();
