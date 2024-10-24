import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { HiringPlan } from '../../hiring_plan/entity/hiring_plan.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => User, (user) => user.department)
  users: User[];

  @OneToMany(() => HiringPlan, (hiringPlan) => hiringPlan.department)
  hiringPlans: HiringPlan[];
}
