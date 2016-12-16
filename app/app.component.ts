import { Component } from '@angular/core';

//@Component is a decorator which puts markup on the page
@Component({
    moduleId: module.id,
  selector: 'my-app',//the component tag in html
  templateUrl: 'app.component.html'
})
export class AppComponent { }
