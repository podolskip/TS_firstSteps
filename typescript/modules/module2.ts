"use strict";
import $ = require("jquery");

export let typeee:JQuery<HTMLElement> = $(".type"); 


export class NewName {
    firstName:string;s
    constructor(n:string){
        this.firstName = n;
    };
};


class NewLastName {
    lastName:string;
    constructor(l:string){
        this.lastName = l;
    };
};



export {NewLastName};
export {NewLastName as anotherPerson};
export * from "./module2";