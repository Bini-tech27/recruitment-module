import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HiringPlanService } from './hiring_plan.service';
import { CreateHiringPlanDto } from './dto/create-hiring_plan.dto';
import { UpdateHiringPlanDto } from './dto/update-hiring_plan.dto';

@Controller('hiring-plans')
export class HiringPlanController {
  constructor(private readonly hiringPlanService: HiringPlanService) {}

  @Post()
  create(@Body() createHiringPlanDto: CreateHiringPlanDto) {
    return this.hiringPlanService.create(createHiringPlanDto);
  }

  @Get()
  findAll() {
    return this.hiringPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hiringPlanService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHiringPlanDto: UpdateHiringPlanDto) {
    return this.hiringPlanService.update(id, updateHiringPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hiringPlanService.remove(id);
  }
}
