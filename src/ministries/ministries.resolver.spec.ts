import { Test, TestingModule } from '@nestjs/testing';
import { MinistriesResolver } from './ministries.resolver';
import { MinistriesService } from './ministries.service';

describe('MinistriesResolver', () => {
  let resolver: MinistriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinistriesResolver, MinistriesService],
    }).compile();

    resolver = module.get<MinistriesResolver>(MinistriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
