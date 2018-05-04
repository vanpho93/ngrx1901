import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'https://word1203.herokuapp.com/word';

@Injectable()

export class WordService {
    constructor(private http: Http) {}

    getAllWords() {
        this.http.get(URL)
        .toPromise()
        .then(response => response.json())
        .then(resJson => console.log(resJson));
    }
}

// https://github.com/vanpho93/ngrx1812/tree/master/_server
