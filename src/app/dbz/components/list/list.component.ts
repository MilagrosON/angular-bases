import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { v4 as uuid} from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }]

  @Output()
  //public onDelete:EventEmitter<number>=new EventEmitter();
  public onDelete:EventEmitter<string>=new EventEmitter();
  //onDelete=index value: number

  //onDeleteCharacter(index:number):void{
  onDeleteCharacter(id?:string):void{
    //Todo: Emitir el ID del personaje
    //console.log({index});
    //this.onDelete.emit(index);
    if(!id) return;
    //console.log(id);
    this.onDelete.emit(id);
  }

 }
