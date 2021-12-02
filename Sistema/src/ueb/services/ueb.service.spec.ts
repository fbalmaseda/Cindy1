import { Test, TestingModule } from '@nestjs/testing';
import { UebService } from './ueb.service';
import 'jasmine';

describe('UebService', () => {
  let service: UebService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UebService],
    }).compile();

    service = module.get<UebService>(UebService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
