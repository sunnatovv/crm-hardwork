import { Module } from '@nestjs/common';
import { TargetService } from './target_id.service';
import { TargetController } from './target_id.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './entities/target_id.entity';
import { TargetResolver } from './target_id.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Target])],
  controllers: [TargetController],
  providers: [TargetService, TargetResolver],
})
export class TargetModule {}
