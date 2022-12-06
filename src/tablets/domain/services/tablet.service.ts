import { InsertResult, UpdateResult } from 'typeorm';
import { TabletEntity } from '../entities/tablet.entity';

export interface TabletService {

   list(): Promise<TabletEntity[]>;


   create(tablet: TabletEntity): Promise<InsertResult>;
 

   update(id: number, tabletData: TabletEntity): Promise<UpdateResult>;
 

   delete(id: number): Promise<boolean>;
 

   updateMpgx(id: number, mpgx: number): Promise<UpdateResult>;
}