import { Tablet } from "../models/tablet.model";

export interface TabletService {

   
   list(): Tablet[];


   create(Tablet: Tablet): Tablet;


   update(id: number, Tablet: Tablet): Tablet


   delete(id: number): boolean


   updateMpgx(id: number, mpgx: number): Tablet
}