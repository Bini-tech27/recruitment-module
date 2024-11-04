import { Test, TestingModule } from '@nestjs/testing';
import { HiringPlanController } from './hiring_plan.controller';
import { HiringPlanService } from './hiring_plan.service';

describe('HiringPlanController', () => {
  let controller: HiringPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiringPlanController],
      providers: [HiringPlanService],
    }).compile();

    controller = module.get<HiringPlanController>(HiringPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
