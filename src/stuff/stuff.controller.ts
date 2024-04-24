import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Roles } from '../decorators/roles-auth.decorator';
import { AddRoleDto } from './dto/addRole.dto';
import { ActivateStuffDto } from './dto/activate.dto';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Post()
  async create(@Body() createStuffDto: CreateStuffDto) {
    return this.stuffService.create(createStuffDto);
  }

  @Get()
  async findAll() {
    return this.stuffService.findAll();
  }

  @Get(":login")
  async getStuffByLogin(@Param("login") login: string) {
    return this.stuffService.getStuffByLogin(login);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStuffDto: UpdateStuffDto,
  ) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.stuffService.remove(+id);
  }

  @Roles('ADMIN', 'USER')
  @HttpCode(HttpStatus.OK)
  @Post('add_role')
  async addRole(@Body() addRoleDto: AddRoleDto) {
    return this.stuffService.addRole(addRoleDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('remove_role')
  async removeRole(@Body() addRoleDto: AddRoleDto) {
    return this.stuffService.removeRole(addRoleDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('activate')
  async avtivateUser(@Body() activateStuffDto: ActivateStuffDto) {
    return this.stuffService.activateStuff(activateStuffDto);
  }
}
