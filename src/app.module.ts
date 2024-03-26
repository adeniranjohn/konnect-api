import { Module } from '@nestjs/common';
import { GuestModule } from './api/guest/guest.module';
import { UserModule } from './api/user/user.module';
import { ManagerModule } from './api/manager/manager.module';
import { ProviderModule } from './api/provider/provider.module';
import { AuthModule } from './api/auth/auth.module';
import { MailModule } from './config/mail/mail.module';
import { StorageModule } from './config/storage/storage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgreConfig } from './config/database/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgreConfig),
    GuestModule,
    UserModule,
    ManagerModule,
    ProviderModule,
    AuthModule,
    MailModule,
    StorageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
