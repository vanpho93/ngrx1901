import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-word-filter',
    template: `
        <select class="form-control"
            style="width: 300px"
            [(ngModel)]="filterMode"
        >
            <option value="SHOW_ALL">SHOW ALL</option>
            <option value="SHOW_FORGOT">SHOW FORGOT</option>
            <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
        </select>
    `
})

export class WordFilterComponent {
    filterMode = 'SHOW_ALL';
}
