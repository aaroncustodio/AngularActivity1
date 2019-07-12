import { Component } from '@angular/core';

@Component({
    selector: 'extraSelector',
    templateUrl: './extra.component.html'
})

export class ExtraComponent {
    xtraMessage: string = "Extra component string.";
}