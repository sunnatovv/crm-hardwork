
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TargetService } from './target_id.service';
import { CreateTargetDto } from './dto/create-target_id.dto';
import { Target } from './entities/target_id.entity';
import { UpdateTargetDto } from './dto/update-target_id.dto';

@Resolver('Target')
export class TargetResolver {
  constructor(private readonly targetService: TargetService) {}

  @Mutation(() => Target)
  createTarget(
    @Args('createTarget') createTargetDto: CreateTargetDto,
  ): Promise<Target> {
    return this.targetService.create(createTargetDto);
  }

  @Query(() => [Target])
  findAllTarget(): Promise<Target[]> {
    return this.targetService.findAll();
  }

  @Query(() => Target)
  findTargetById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Target | undefined> {
    return this.targetService.findOne(+id);
  }

  @Mutation(() => Target)
  updateTarget(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateTarget') updateTargetDto: UpdateTargetDto,
  ) {
    return this.targetService.update(+id, updateTargetDto);
  }

  @Mutation(() => ID)
  removeTarget(@Args('id', { type: () => ID }) id: string) {
    return this.targetService.remove(+id);
  }
}
