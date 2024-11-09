import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

//console.log(v4());
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters:Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
    },{
    id:uuid(),
    name:'Goku',
    power:9500
   },{
    id:uuid(),
    name:'Vegueta',
    power:7500
   }];

   //onNewCharacter(character:Character):void{
    addCharacter(character:Character):void{
    //this.characters.push(character);
    /*const newCharacter:Character={
      id:uuid(),
      name:character.name,
      power:character.power
    }*/
    const newCharacter:Character={id:uuid(),...character};
    this.characters.push(newCharacter);
   }

   /*onDeleteCharacter(index:number){
    this.characters.splice(index,1);
   }*/
  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id!==id);
  }



}
