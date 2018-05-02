import { Component } from '@angular/core';
import { Word } from './types';

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
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: false },
  ];
}
