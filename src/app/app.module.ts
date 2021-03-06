import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListWordComponent } from './components/list-word/list-word.component';

import { WordFilterComponent } from './components/list-word/word-filter.component';
import { WordFormComponent } from './components/list-word/word-form.component';
import { WordItemComponent } from './components/list-word/word-item.component';
import { wordsReducer, filterModeReducer, shouldShowFormReducer } from './components/list-word/reducers';
import { WordService } from './components/list-word/word.service';

import { ChildComponent } from './components/simple/child.component';
import { ParentComponent } from './components/simple/parent.component';
import { counterReducer } from './components/simple/counter';

@NgModule({
  declarations: [
    AppComponent,
    ListWordComponent,
    WordFilterComponent,
    WordFormComponent,
    WordItemComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      words: wordsReducer,
      filterMode: filterModeReducer,
      shouldShowForm: shouldShowFormReducer
    })
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
