import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //title = 'Mi primera app de Angular';
  public title:string = 'Hola Mundo';
  //public counter :number=10;

  /*increaseBy():void{
    this.counter+=1;
  }
  dicreaseBy():void{
    this.counter-=1;
  }*/

  /*increaseBy(value:number):void{
    this.counter+=value;
  }
  resetCounter(){
    this.counter=10;
  }*/
}
