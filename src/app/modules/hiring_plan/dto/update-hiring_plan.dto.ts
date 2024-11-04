import { PartialType } from '@nestjs/mapped-types';
import { CreateHiringPlanDto } from './create-hiring_plan.dto';

export class UpdateHiringPlanDto extends PartialType(CreateHiringPlanDto) {}
