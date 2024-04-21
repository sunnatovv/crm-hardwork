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
      entities: [Stage, LidStatus, ReasonLid, Target, Lid],
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
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
