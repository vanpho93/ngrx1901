import { Component } from '@angular/core';
import { Word } from './types';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-word',
  template: `
  <div>
    <app-word-filter></app-word-filter>
    <br>
    <app-word-form></app-word-form>
    <div *ngFor="let word of words">
        <app-word-item [wordInfo]="word">
        </app-word-item>
    </div>
  </div>
  `,
})

export class ListWordComponent {
  words: Word[] = [];
  constructor(private store: Store<any>) {
    this.store.select('words').subscribe(words => this.words = words);
  }
}
