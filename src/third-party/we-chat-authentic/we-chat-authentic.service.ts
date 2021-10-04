import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserInfo } from './interface/user-info.interface';

@Injectable()
export class WeChatAuthenticService {
  constructor(private readonly config: ConfigService) {}

  getUserInfoByAuthCode(authCode: string): UserInfo {
    throw new Error('not implementation');
  }
}
