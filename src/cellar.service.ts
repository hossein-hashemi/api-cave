import { Injectable } from '@nestjs/common';
import { Cellar } from './Cellar';
import { CellarDTO } from './cellar.controller';

@Injectable()
export class CellarService {
  storage: Cellar[] = [];

  getAllCellars(): Cellar[] {
    return this.storage;
  }

  createCellar(cellarDto: CellarDTO){
    this.storage.push(new Cellar(cellarDto.name, this.storage));
    return this.storage;
  }

  findById(id: number): Cellar{
    for (let i = 0 ; i < this.storage.length ; i++){
      if (this.storage[i].id === id)
        return this.storage[i];
    }
  }
}
