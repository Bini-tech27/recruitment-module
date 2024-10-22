import { Module } from '@nestjs/common';
import { HiringPlanController } from './hiring_plan.controller';
import { HiringPlanService } from './hiring_plan.service';

@Module({
  controllers: [HiringPlanController],
  providers: [HiringPlanService]
})
export class HiringPlanModule {}
