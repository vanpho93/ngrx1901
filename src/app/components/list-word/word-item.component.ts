import { Component, Input } from '@angular/core';
import { Word } from './types';
import { WordService } from './word.service';

@Component({
    selector: 'app-word-item',
    template: `
        <h3>{{ wordInfo.isMemorized ? '------' : wordInfo.en }}</h3>
        <p>{{wordInfo.vn}}</p>
        <button class="btn btn-warning" (click)="remove();">
            Remove
        </button>
        <button class="btn btn-danger" *ngIf="wordInfo.isMemorized" (click)="toggle();">
            Forgot
        </button>
        <button class="btn btn-success" *ngIf="!wordInfo.isMemorized" (click)="toggle();">
            Memorized
        </button>
    `,
})

export class WordItemComponent {
    @Input() wordInfo: Word;
    constructor(private wordService: WordService) {}

    remove() {
        this.wordService.removeWord(this.wordInfo._id);
    }

    toggle() {
        this.wordService.toggleWord(this.wordInfo._id, !this.wordInfo.isMemorized);
    }
}
