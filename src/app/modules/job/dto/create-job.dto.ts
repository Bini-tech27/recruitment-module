import { IsString, IsUUID } from 'class-validator';

export class CreateJobDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUUID()
  hiringPlanId: string;
}
