import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  x=[2,5,4];
  colors=["red","yellow","green"];

  sendM(color:any){
    console.log(color);
  }

}

