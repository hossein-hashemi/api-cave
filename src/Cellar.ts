import {Bottle} from "./Bottle";

export class Cellar {
  bottleList: Bottle[] = [];

  constructor() {
  }

  addBottle(bottle: Bottle): void {
    this.bottleList.push(bottle);
  }

  getBottle(name: string): Bottle {
    for (let i = 0 ; i< this.bottleList.length ; i++){
      if (this.bottleList[i].name === name){
        return this.bottleList[i];
      }
    }
    throw new Error("Cette bouteille n'est pas dans la liste");
  }

  getTotalPrice(): number {

  }
}

function main() {
  let cellar = new Cellar();
  let bottle1: Bottle = {name: "drPepper", price: 5};
  let bottle2: Bottle = {name: "Coca", price: 6};
  cellar.addBottle(bottle1);
  cellar.addBottle(bottle2);
  console.log(JSON.stringify(cellar));
  bottle2 = cellar.getBottle("Coca");
  console.log(JSON.stringify(bottle2));
}

main();
