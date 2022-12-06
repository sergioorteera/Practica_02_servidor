import { Injectable } from '@nestjs/common';
import { Tablet } from '../models/tablet.model';
import { TabletService } from './tablet.service';

@Injectable()
export class TabletServiceImpl implements TabletService {

  private tablet: Tablet[] = [{

    marca: 'motorola',
    modelo: 's',
    mgpx: 50,
    tam: 'grande'

}]

  public list() : Tablet[] {
    return this.tablet
  }

  public create(jugador: Tablet): Tablet {
    this.tablet.push(jugador);
    return jugador;
  }

  public update(id: number, jugador: Tablet): Tablet {
      this.tablet[id] = jugador
      return this.tablet[id];
  }

  public delete(id: number): boolean {
    const totalJugadoresAntes = this.tablet.length;
    this.tablet = this.tablet.filter((val, index) => index != id);
    if(totalJugadoresAntes == this.tablet.length){
      return false;
    }
    else{
      return true;
    }
  }

   public updateMpgx(id: number, mpgx: number): Tablet {
      this.tablet[id].mgpx = mpgx;
      return this.tablet[id];
   }

}
