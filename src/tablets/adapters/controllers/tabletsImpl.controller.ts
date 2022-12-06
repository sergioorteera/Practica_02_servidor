import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { TabletService } from '../../domain/services/tablet.service';

import {Tablet} from '../../domain/models/tablet.model';
import { TabletController } from './tablets.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TabletEntity } from 'src/tablets/domain/entities/tablet.entity';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class TabletControllerImpl implements TabletController {
  constructor(@Inject('TabletService') private readonly tabletService: TabletService) { }

  @Get()
  listTablets() {
    try{
      return this.tabletService.list();
    }
    catch(e){
      return errReturn(e, "Error al listar tabletes");
    }
  }

  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() datos: TabletEntity) {
    try{
      return this.tabletService.create(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear tablet");
    }
  }

  @Put(":id")
  update(@Body() datos: TabletEntity, @Param('id') id: number) {
    try{
      return this.tabletService.update(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar tablet");
    }
  }

  @Delete(":id")
  delete(@Param('id') id: number) {
    try{
      return this.tabletService.delete(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar tablet");
    }
  }

  @Patch(":id/mpgx/:mpgx")
  updateMpgx(@Param('id') id: number, @Param('mpgx') mpgx: number) {
    try{
      return this.tabletService.updateMpgx(id, mpgx);
    }
    catch(e){
      return errReturn(e, "Error al modificar mpgx del tablet");
    }
  }
}
