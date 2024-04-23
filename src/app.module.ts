import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { TargetModule } from './target/target.module';
import { LidModule } from './lid/lid.module';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { Target } from './target/entities/target.entity';
import { Lid } from './lid/entities/lid.entity';
import { RoleModule } from './role/role.module';
import { StuffRoleModule } from './stuff_role/stuff_role.module';
import { StuffModule } from './stuff/stuff.module';
import { BranchModule } from './branch/branch.module';
import { PaymentModule } from './payment/payment.module';
import { StudentsModule } from './students/students.module';
import { LessonModule } from './lesson/lesson.module';
import { GroupModule } from './group/group.module';
import { Group } from './group/entities/group.entity';
import { Stuff } from './stuff/entities/stuff.entity';
import { Payment } from './payment/entities/payment.entity';
import { Branch } from './branch/entities/branch.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { Role } from './role/entities/role.entity';
import { Student } from './students/entities/student.entity';
import { StuffRole } from './stuff_role/entities/stuff_role.entity';
import { GroupStuffModule } from './group-stuff/group-stuff.module';
import { GroupStuff } from './group-stuff/entities/group-stuff.entity';
import { StudentGroupModule } from './student-group/student-group.module';
import { StudentGroup } from './student-group/entities/student-group.entity';
import { StudentLessonModule } from './student-lesson/student-lesson.module';
import { StudentLesson } from './student-lesson/entities/student-lesson.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'hard-work',
      entities: [
        Stage,
        LidStatus,
        ReasonLid,
        Target,
        Lid,
        Payment,
        Branch,
        Lesson,
        Role,
        Student,
        Stuff,
        StuffRole,
        Group,
        GroupStuff,
        StudentGroup,
        StudentLesson
      ],
      synchronize: true,
    }),
    StageModule,
    LidStatusModule,
    ReasonLidModule,
    TargetModule,
    LidModule,
    RoleModule,
    StuffRoleModule,
    StuffModule,
    BranchModule,
    PaymentModule,
    StudentsModule,
    LessonModule,
    GroupModule,
    GroupStuffModule,
    StudentGroupModule,
    StudentLessonModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
