import { Body, Controller, Delete, Get, Param, Patch, Post, Put  } from '@nestjs/common';
import { AppService } from './app.service';

interface Celular {
  marca: string,
  modelo: string,
  mgpx: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private celulares : Celular[] = [{
    marca: "Iphone",
    modelo: "x",
    mgpx: 50
  }]

  @Get()
  getHello(): Celular[] {
    return this.celulares;
  }

  @Post()
  crear(@Body() datos: Celular): Celular {
    this.celulares.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Celular, @Param('id') id: number): Celular | string {
    try{
    this.celulares[id] = datos
    return this.celulares[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.celulares = this.celulares.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/mgpx/:mgpx")
  cambiarmgpx(@Param('id') id: number, @Param('mgpx') mgpx: number): Celular | string{
    try{
      this.celulares[id].mgpx = mgpx;
      return this.celulares[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  }

}
