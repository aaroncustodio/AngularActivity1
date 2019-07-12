import { Component } from '@angular/core';

@Component({
    selector: 'mySelector',
    templateUrl: './new.component.html'
})

export class NewComponent {
    message: string = "This is the new component.";
}