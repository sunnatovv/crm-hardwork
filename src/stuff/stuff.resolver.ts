import { HttpCode, HttpStatus } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { AddRoleDto } from './dto/addRole.dto';
import { ActivateStuffDto } from './dto/activate.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Stuff } from './entities/stuff.entity';
import { Roles } from '../decorators/roles-auth.decorator';

@Resolver('Stuff')
export class StuffResolver {
  constructor(private readonly stuffService: StuffService) {}

  // @Mutation(() => Stuff)
  // async createStuff(@Args('createStuff') createStuffDto: CreateStuffDto) {
  //   return this.stuffService.create(createStuffDto);
  // }

  @Query(() => [Stuff])
  async findAllStuff() {
    return this.stuffService.findAll();
  }

  @Query(() => Stuff)
  async findStuffByLogin(@Args('login') login: string) {
    return this.stuffService.getStuffByLogin(login);
  }

  @Query(() => Stuff)
  async findStuffById(@Args('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  // @Mutation(() => Stuff)
  // async updateStuff(
  //   @Args('id', { type: () => ID }) id: string,
  //   @Args('updateStuff') updateStuffDto: UpdateStuffDto,
  // ) {
  //   return this.stuffService.update(+id, updateStuffDto);
  // }

  // @Mutation(() => Stuff)
  // async removeStuff(@Args('id', { type: () => ID }) id: string) {
  //   return this.stuffService.remove(+id);
  // }

  // @Mutation(() => Stuff)
  // @Roles('ADMIN', 'USER')
  // @HttpCode(HttpStatus.OK)
  // async addRole(@Args('addRole') addRoleDto: AddRoleDto) {
  //   return this.stuffService.addRole(addRoleDto);
  // }

  // @Mutation(() => Stuff)
  // @HttpCode(HttpStatus.OK)
  // async removeRole(@Args('removeRole') removeRoleDto: AddRoleDto) {
  //   return this.stuffService.removeRole(removeRoleDto);
  // }

  // @Mutation(() => Stuff)
  // @HttpCode(HttpStatus.OK)
  // async activateStuff(@Args('activate') activateStuffDto: ActivateStuffDto) {
  //   return this.stuffService.activateStuff(activateStuffDto);
  // }
}
