import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-verdictwise',
  templateUrl: './verdictwise.component.html',
  styleUrls: ['./verdictwise.component.css']
})
export class VerdictwiseComponent {
  
  public userArray: User[] = [];
  constructor(private http: HttpClient){
    this.http.get('assets/emroutput/part-00000-5c6bb9c7-0d93-4808-bf7b-47f8a7e27a00-c000.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(new User(row[0],row[1]));
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }
}
export class User{
  analysis: String;
  count: String;
  constructor(analysis: String, count: String){
    this.analysis = analysis;
    this.count = count;
   }
}
