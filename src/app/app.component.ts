import { Component } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=Hanoi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: Http) {
    this.http.get(URL)
    .toPromise()
    .then(response => response.json())
    .then(resJson => console.log(resJson.main.temp))
    .catch(error => console.log(error));
  }
  title = 'Onnneee';
}

// decorator function
