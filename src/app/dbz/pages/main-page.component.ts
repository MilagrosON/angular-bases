import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

/*public characters:Character[]=[{name:'Krillin',
  power:1000
  },{
  name:'Goku',
  power:9500
 },{
  name:'Vegueta',
  power:7500
 }];

 onNewCharacter(character:Character):void{
  //console.log('MainPage');
  //console.log(character);
  //this.characters.unshift() --al inicio del array
  this.characters.push(character);
 }

 onDeleteCharacter(index:number):void{
  //console.log('MainPage');
  //console.log(index);
  this.characters.splice(index,1);
 }*/
  /*constructor(public dbzService:DbzService){
  }*/
  constructor(private dbzService:DbzService){}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }

}
