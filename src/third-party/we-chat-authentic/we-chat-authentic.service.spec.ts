import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import axios, { AxiosInstance } from 'axios';
import { WeChatAuthenticService } from './we-chat-authentic.service';
const mockConfig: jest.Mocked<ConfigService> = {
  get: jest.fn(),
} as any;

jest.mock('axios');

describe('WeChatAuthenticService', () => {
  let service: WeChatAuthenticService;
  const mockAxios: jest.Mocked<AxiosInstance> = axios as any;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [WeChatAuthenticService],
    })
      .overrideProvider(ConfigService)
      .useValue(mockConfig)
      .compile();

    service = module.get<WeChatAuthenticService>(WeChatAuthenticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getUserInfoByAuthCode', async () => {
    const url = 'https://api.weixin.qq.com/sns/jscode2session';
    const params = {
      appid: 'test_id',
      secret: 'test_secret',
      js_code: 'test_code',
      grant_type: 'authorization_code',
    };
    const tResult = {
      openid: 'testid',
      errcode: 0,
    };
    mockConfig.get.mockReturnValueOnce(params.appid);
    mockConfig.get.mockReturnValueOnce(params.secret);
    mockAxios.get.mockResolvedValue({ data: tResult });

    const result = await service.getUserInfoByAuthCode(params.js_code);

    expect(axios.get).toBeCalledWith(url, { params });
    expect(result).toEqual(tResult);
  });
});
