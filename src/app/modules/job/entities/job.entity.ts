import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { HiringPlan } from '../../hiring_plan/entities/hiring_plan.entity';
import { Applicant } from '../../applicant/entities/applicant.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => HiringPlan, (hiringPlan) => hiringPlan.jobs)
  hiringPlan: HiringPlan;

  @OneToMany(() => Applicant, (applicant) => applicant.job)
  applicants: Applicant[];
}
