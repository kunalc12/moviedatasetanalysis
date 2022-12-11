import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-director-wise',
  templateUrl: './director-wise.component.html',
  styleUrls: ['./director-wise.component.css']
})

export class DirectorWiseComponent {
  
 /* ngOnInit():void{
    this.RenderChart();
  }
  RenderChart(){
    const myChart= new Chart("piechart",{
      type:"bar",
      data:{
        labels:['Red','Blue','Yellow'],
        datasets:[{
          label:'# of Votes',
          data:[12,19,3],
          backgroundColor:[
            'rgba(255,99,123,0.2)',
            'rgba(277,99,123,0.2)',
            'rgba(211,99,123,0.2)',
          ],
          borderColor:[
            'rgba(44,99,123,0.2)',
            'rgba(47,99,123,0.2)',
            'rgba(11,99,123,0.2)',
          ],
          borderWidth:1
        }]
      },
      options:{
        scales:{
          y:{
            beginAtZero:true
          }
        }
      }
    })
  }*/

  public userArray: User[] = [];
  constructor(private http: HttpClient){
    this.http.get('assets/emroutput/part-00000-43eaa093-cced-413e-9531-35b052b1330a-c000.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(new User(row[0],row[1],row[2],row[3]));
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
  directedby: String;
  max: String;
  min: String;
  avg: String;
  constructor(directedby: String, max: String, min: String, avg: String){
    this.directedby = directedby;
    this.max = max;
    this.min = min;
    this.avg = avg;
   }

}
