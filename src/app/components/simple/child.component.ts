import { Component } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="increase();">
                Increase
            </button>
            <button class="btn btn-danger" (click)="descrease();">
                Descrease
            </button>
            <button class="btn btn-warning" (click)="reset();">
                Reset
            </button>
        </div>
    `
})

export class ChildComponent {
    increase() {}

    descrease() {}

    reset() {}
}
