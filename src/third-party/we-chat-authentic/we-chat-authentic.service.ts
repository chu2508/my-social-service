import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { UserInfo } from './interface/user-info.interface';

@Injectable()
export class WeChatAuthenticService {
  constructor(private readonly config: ConfigService) {}

  async getUserInfoByAuthCode(authCode: string): Promise<UserInfo> {
    const { data: result } = await axios.get(
      'https://api.weixin.qq.com/sns/jscode2session',
      {
        params: {
          appid: this.config.get('WE_CHAT_APPID'),
          secret: this.config.get('WE_CHAT_SECRET'),
          js_code: authCode,
          grant_type: 'authorization_code',
        },
      },
    );
    return result;
  }
}
