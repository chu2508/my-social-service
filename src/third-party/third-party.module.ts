import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeChatAuthenticService } from './we-chat-authentic/we-chat-authentic.service';

@Module({
  imports: [ConfigModule],
  providers: [WeChatAuthenticService],
  exports: [WeChatAuthenticService],
})
export class ThirdPartyModule {}
