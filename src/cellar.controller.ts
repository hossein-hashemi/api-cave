import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CellarService } from './cellar.service';
import { Cellar } from './Cellar';

@Controller('cellars')
export class CellarController {
  constructor(private readonly cellarService: CellarService) {}

  @Get()
  getCellars(): Cellar[] {
    return this.cellarService.getAllCellars();
  }

  @Post()
  createCellar(@Body() cellarDto: CellarDTO) {
    return this.cellarService.createCellar(cellarDto);
  }

  @Get(':id')
  findById(@Param('id') id): Cellar{
    return this.cellarService.findById(id);
  }
}

export interface CellarDTO {
  name: string;
}
