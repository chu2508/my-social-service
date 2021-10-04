import { Test, TestingModule } from '@nestjs/testing';
import { WeChatAuthenticService } from './we-chat-authentic.service';

describe('WeChatAuthenticService', () => {
  let service: WeChatAuthenticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeChatAuthenticService],
    }).compile();

    service = module.get<WeChatAuthenticService>(WeChatAuthenticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
