import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quete8Angular';
  onomatopoeiaList : string [] = [];
  onReceiveNewOnomatopia(monono : string){
this.onomatopoeiaList.push(monono);
  }
}
