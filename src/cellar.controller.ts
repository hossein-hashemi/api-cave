import { Controller, Get } from '@nestjs/common';
import { CellarService } from './cellar.service';

@Controller('cellars')
export class CellarController {
  constructor(private readonly cellarService: CellarService) {}

  @Get()
  getCellars(): string {
    return this.cellarService.getHello();
  }
}
