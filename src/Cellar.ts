import {Bottle} from './Bottle';
import { CellarDTO } from './cellar.controller';

export class Cellar {
  bottleList: Bottle[] = [];
  name: string;
  id: number;

  constructor(name: string, storage: Cellar[]) {
    this.name = name;
    this.id = storage.length;
  }

  addBottle(bottle: Bottle): void {
    this.bottleList.push(bottle);
  }

  getBottle(name: string): Bottle {
    for (let i = 0 ; i < this.bottleList.length ; i++){
      if (this.bottleList[i].name === name){
        return this.bottleList[i];
      }
    }
    throw new Error('Cette bouteille pas dans la liste');
  }

  /*getTotalPrice(): number {

  }*/
}
