import { Component } from '@angular/core';
import { Word } from './types';
import { Store } from '@ngrx/store';
import { WordService } from './word.service';

@Component({
  selector: 'app-list-word',
  template: `
  <div>
    <app-word-filter></app-word-filter>
    <br>
    <app-word-form></app-word-form>
    <div *ngFor="let word of filteredWords">
        <app-word-item [wordInfo]="word">
        </app-word-item>
    </div>
  </div>
  `
})

export class ListWordComponent {
  words: Word[] = [];
  filterMode: string;
  constructor(private store: Store<any>, private wordService: WordService) {
    this.store.select('words').subscribe(words => this.words = words);
    this.store.select('filterMode').subscribe(f => this.filterMode = f);
    this.wordService.getAllWords();
  }

  get filteredWords(): Word[] {
    return this.words.filter(word => {
      if (this.filterMode === 'SHOW_ALL') return true;
      if (this.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
      return word.isMemorized;
    });
  }
}
