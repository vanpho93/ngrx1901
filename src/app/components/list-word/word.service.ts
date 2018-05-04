import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';

const URL = 'https://word1203.herokuapp.com/word';

@Injectable()

export class WordService {
    constructor(private http: Http, private store: Store<any>) {}

    getAllWords() {
        this.http.get(URL)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return alert(resJson.message);
            this.store.dispatch({ type: 'SET_WORDS', words: resJson.words });
        });
    }
}

// https://github.com/vanpho93/ngrx1812/tree/master/_server
