import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
  // template: `
  // <div><h1>{{title}}</h1>
  // <mySelector></mySelector>
  // <extraSelector></extraSelector>
  // </div>
  // `
})

export class AppComponent {
  title: string = "myShop"
}