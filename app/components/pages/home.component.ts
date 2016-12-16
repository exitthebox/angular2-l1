import { Component } from '@angular/core';

//@Component is a decorator which puts markup on the page
@Component({
  moduleId:module.id,
  selector: 'home',//the component tag in html
  templateUrl: 'home.component.html'
})
export class HomeComponent { 
  
}