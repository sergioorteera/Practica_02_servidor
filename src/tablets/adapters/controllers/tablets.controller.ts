import {Tablet} from '../../domain/models/tablet.model';

export interface TabletController {

   listTablets();


   create(datos: Tablet);


   update(datos: Tablet, id: number);


   delete(id: number);


   updateMpgx(id: number, mpgx: number);

}