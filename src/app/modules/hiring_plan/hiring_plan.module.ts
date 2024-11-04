import { Module } from '@nestjs/common';
import { HiringPlanService } from './hiring_plan.service';
import { HiringPlanController } from './hiring_plan.controller';

@Module({
  controllers: [HiringPlanController],
  providers: [HiringPlanService],
})
export class HiringPlanModule {}
