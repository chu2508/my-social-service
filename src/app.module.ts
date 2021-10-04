import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThirdPartyModule } from './third-party/third-party.module';

@Module({
  imports: [ConfigModule.forRoot(), ThirdPartyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
