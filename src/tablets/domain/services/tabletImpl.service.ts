import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { TabletEntity } from '../entities/tablet.entity';
import { TabletService } from './tablet.service';

@Injectable()
export class TabletServiceImpl implements TabletService {

  constructor(
    @InjectRepository(TabletEntity)
    private readonly repository: MongoRepository<TabletEntity>,
  ) {}

  public async list(): Promise<TabletEntity[]> {
    return await this.repository.find();
  }

  public async create(tabletData: TabletEntity): Promise<InsertResult> {
    const newTablet = await this.repository.insert(tabletData);
    return newTablet;
  }

  public async update(
    id: number,
    tabletData: TabletEntity,
  ): Promise<UpdateResult> {
    const updatedTablet = await this.repository.update(id, tabletData);
    return updatedTablet;
  }

  public async delete(id: number): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

  public async updateMpgx(id: number, mpgx: number): Promise<UpdateResult> {
    const updatedTablet = await this.repository.update(id, { mpgx: mpgx });
    return updatedTablet;
  }

}
