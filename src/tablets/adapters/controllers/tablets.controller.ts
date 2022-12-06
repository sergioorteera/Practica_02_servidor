import { TabletEntity } from 'src/tablets/domain/entities/tablet.entity';


export interface TabletController {

   listTablets();


   create(datos: TabletEntity);


   update(datos: TabletEntity, id: number);


   delete(id: number);


   updateMpgx(id: number, mpgx: number);

}