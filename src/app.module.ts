import { Module } from '@nestjs/common';
import { TabletControllerImpl } from './tablets/adapters/controllers/tabletsImpl.controller';
import { TabletServiceImpl } from './tablets/domain/services/tabletImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabletEntity } from './tablets/domain/entities/tablet.entity';

@Module({
  imports: [
     AuthModule,
     UsersModule,
     TypeOrmModule.forRoot({
        type: 'mongodb',
        url: 'mongodb+srv://sergioorteera:sergioorteera@cluster0.urh0tgi.mongodb.net/?retryWrites=true&w=majority',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        synchronize: true, // Solo para desarrollo
        logging: true,
        autoLoadEntities: true,
        ssl: true,
     }),
     TypeOrmModule.forFeature([TabletEntity]),
    UsersModule,
  ],
  controllers: [TabletControllerImpl],
  providers: [
     {
        provide: 'TabletService',
        useClass: TabletServiceImpl,
     },
  ],
  })
  export class AppModule {}


