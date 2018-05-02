import { Component, Input } from '@angular/core';
import { Word } from './types';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-word-form',
    template: `
        <button *ngIf="!shouldShowForm" (click)="toggleForm();" class="btn btn-success form-control" style="width: 300px">
            Add new word
        </button>
        <div *ngIf="shouldShowForm" class="form-group" style="width: 300px; padding-top: 20px">
            <input class="form-control" placeholder="English" [(ngModel)]="txtEn">
            <br>
            <input class="form-control" placeholder="Vietnamese" [(ngModel)]="txtVn">
            <br>
            <button class="btn btn-success form-control" (click)="addWord();">
                Add
            </button>
            <br>
            <br>
            <button class="btn btn-warning form-control" (click)="toggleForm();">
                Cancel
            </button>
        </div>
    `
})

export class WordFormComponent {
    shouldShowForm = false;
    txtEn = '';
    txtVn = '';
    constructor(private store: Store<any>) {
        this.store.select('shouldShowForm').subscribe(s => this.shouldShowForm = s);
    }

    toggleForm() {
        this.store.dispatch({ type: 'TOGGLE_FORM' });
    }

    addWord() {
        const word: Word = {
            _id: Math.random() + '',
            en: this.txtEn,
            vn: this.txtVn,
            isMemorized: false
        };
        this.store.dispatch({ type: 'ADD_WORD', word });
        this.txtEn = '';
        this.txtVn = '';
    }
}
