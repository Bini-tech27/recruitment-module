import { IsString, IsEmail, IsNumber, IsUUID } from 'class-validator';

export class CreateApplicantDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNumber()
  phone_no: number;

  @IsString()
  CV: string;

  @IsUUID()
  jobId: string;
}
