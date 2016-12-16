import { Component } from '@angular/core';

//@Component is a decorator which puts markup on the page
@Component({
  moduleId:module.id,
  selector: 'about',//the component tag in html
  templateUrl: 'about.component.html'
})
export class AboutComponent { 
  
}