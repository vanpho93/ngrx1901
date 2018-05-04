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

    addWord(en: string, vn: string) {
        const body = { en, vn, isMemorized: false };
        this.http.post(URL, body)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return alert(resJson.message);
            this.store.dispatch({ type: 'ADD_WORD', word: resJson.word });
        });
    }

    removeWord(_id: string) {
        this.http.delete(URL + '/' + _id)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return alert(resJson.message);
            this.store.dispatch({ type: 'REMOVE_WORD', _id });
        });
    }

    toggleWord(_id: string, isMemorized: boolean) {
        const body = { isMemorized };
        this.http.put(URL + '/' + _id, body)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return alert(resJson.message);
            this.store.dispatch({ type: 'TOGGLE_WORD', _id });
        });
    }
}

// https://github.com/vanpho93/ngrx1812/tree/master/_server
