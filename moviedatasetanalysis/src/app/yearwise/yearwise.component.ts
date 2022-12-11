import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-yearwise',
  templateUrl: './yearwise.component.html',
  styleUrls: ['./yearwise.component.css']
})
export class YearwiseComponent {
 
  public userArray: User[] = [];
  constructor(private http: HttpClient){
    this.http.get('assets/emroutput/part-00000-15d930f7-9e3b-4ce4-9e3a-27693898317a-c000.csv', {responseType: 'text'})
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
  year: String;
  Total_Movies_Released: String;
  constructor(year: String, Total_Movies_Released: String){
    this.year = year;
    this.Total_Movies_Released = Total_Movies_Released;
   }
}
