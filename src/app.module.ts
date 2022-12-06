import { Module } from '@nestjs/common';
import { TabletControllerImpl } from './tablets/adapters/controllers/tabletsImpl.controller';
import { TabletServiceImpl } from './tablets/domain/services/tabletImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [TabletControllerImpl],
  providers: [
    {
      provide: 'TabletService',
      useClass: TabletServiceImpl
    }
  ],
})
export class AppModule {}
