import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

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
    constructor(private store: Store<any>) {}

    increase() {
        // this.store.dispatch({ type: 'INCREASE' });
        this.store.dispatch({ type: 'CHANGE', isIncrease: true });
    }

    descrease() {
        // this.store.dispatch({ type: 'DESCREASE' });
        this.store.dispatch({ type: 'CHANGE', isIncrease: false });
    }

    reset() {
        this.store.dispatch({ type: 'RESET' });
    }
}
