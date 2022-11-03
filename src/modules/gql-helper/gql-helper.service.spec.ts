import { Test, TestingModule } from '@nestjs/testing';
import { GqlHelperService } from './gql-helper.service';

describe('GqlHelperService', () => {
  let service: GqlHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqlHelperService],
    }).compile();

    service = module.get<GqlHelperService>(GqlHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
