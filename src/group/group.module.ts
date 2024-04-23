import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Stage } from '../stage/entities/stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group]),Stage],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
