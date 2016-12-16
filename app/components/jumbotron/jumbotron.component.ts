import { Component } from '@angular/core';

//@Component is a decorator which puts markup on the page
@Component({
  moduleId:module.id,
  selector: 'jumbotron',//the component tag in html
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent { 
    
    private jbtHeading:string;
    private jbtTextg:string;

    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor(){
        this.jbtHeading="Hello World";
        this.jbtTextg = "this is a simple hero unit, a simple jumbotron";
        this.jbtBtnText = "Readmore";
        this.jbtBtnUrl = "/about";
    }
    
}