import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <p>Count = {{ count }}</p>
            <h3>Count = {{ count }}</h3>
            <h1>Count = {{ count }}</h1>
            <app-child></app-child>
        </div>
    `
})

export class ParentComponent {
    count;
    constructor(private store: Store<any>) {
        this.store.select('count').subscribe(x => this.count = x);
    }
}
