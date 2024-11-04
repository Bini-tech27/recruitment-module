import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Department } from '../../department/entity/department.entity';
import { User } from '../../user/entities/user.entity';
import { Job } from '../../job/entity/job.entity';

@Entity('hiring_plans')
export class HiringPlan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  position: string;

  @Column()
  required_no: number;

  @Column()
  reason: string;

  @ManyToOne(() => Department, (department) => department.hiringPlans)
  department: Department;

  @ManyToOne(() => User)
  submittedBy: User;

  @OneToMany(() => Job, (job) => job.hiringPlan)
  jobs: Job[];
}
