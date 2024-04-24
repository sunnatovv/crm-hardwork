import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TargetService } from './target_id.service';
import { CreateTargetDto } from './dto/create-target_id.dto';
import { UpdateTargetDto } from './dto/update-target_id.dto';

@Controller('target')
export class TargetController {
  constructor(private readonly targetIdService: TargetService) {}

  @Post()
  create(@Body() createTargetDto: CreateTargetDto) {
    return this.targetIdService.create(createTargetDto);
  }

  @Get()
  findAll() {
    return this.targetIdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.targetIdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTargetDto: UpdateTargetDto) {
    return this.targetIdService.update(+id, updateTargetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.targetIdService.remove(+id);
  }
}
