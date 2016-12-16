import { Component } from '@angular/core';

//@Component is a decorator which puts markup on the page
@Component({
  moduleId:module.id,
  selector: 'navbar',//the component tag in html
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent { 
    branding = 'MyWebsite';
}
