import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HiringPlan } from './entities/hiring_plan.entity';
import { CreateHiringPlanDto } from './dto/create-hiring_plan.dto';
import { UpdateHiringPlanDto } from './dto/update-hiring_plan.dto';

@Injectable()
export class HiringPlanService {
  constructor(
    @InjectRepository(HiringPlan)
    private readonly hiringPlanRepository: Repository<HiringPlan>,
  ) {}

  async create(createHiringPlanDto: CreateHiringPlanDto): Promise<HiringPlan> {
    const hiringPlan = this.hiringPlanRepository.create(createHiringPlanDto);
    return this.hiringPlanRepository.save(hiringPlan);
  }

  async findAll(): Promise<HiringPlan[]> {
    return this.hiringPlanRepository.find({
      relations: ['department', 'submittedBy', 'jobs'],
    });
  }

  async findOne(id: string): Promise<HiringPlan> {
    const hiringPlan = await this.hiringPlanRepository.findOne({
      where: { id },
      relations: ['department', 'submittedBy', 'jobs'],
    });
    if (!hiringPlan) {
      throw new NotFoundException(`Hiring Plan with ID ${id} not found`);
    }
    return hiringPlan;
  }

  async update(id: string, updateHiringPlanDto: UpdateHiringPlanDto): Promise<HiringPlan> {
    const hiringPlan = await this.hiringPlanRepository.preload({
      id,
      ...updateHiringPlanDto,
    });
    if (!hiringPlan) {
      throw new NotFoundException(`Hiring Plan with ID ${id} not found`);
    }
    return this.hiringPlanRepository.save(hiringPlan);
  }

  async remove(id: string): Promise<void> {
    const result = await this.hiringPlanRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Hiring Plan with ID ${id} not found`);
    }
  }
}
