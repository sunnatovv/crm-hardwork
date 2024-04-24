import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { GroupStuff } from '../stuff/entities/groupStuff.dto';
import { StudentGroup } from '../students/entities/studentGroup.entity';
import { StudentsModule } from '../students/students.module';
import { GroupResolver } from './group.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group, GroupStuff, StudentGroup]),
    StudentsModule,
  ],
  controllers: [GroupController],
  providers: [GroupService, GroupResolver],
})
export class GroupModule {}
