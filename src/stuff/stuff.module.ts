import { forwardRef, Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { Role } from '../role/entities/role.entity';
import { AuthModule } from '../auth/auth.module';
import { RoleModule } from '../role/role.module';
import { StuffRole } from '../role/entities/stuffRole.entity';
import { StuffResolver } from './stuff.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stuff, StuffRole, Role]),
    RoleModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [StuffController],
  providers: [StuffService, StuffResolver],
  exports: [StuffService],
})
export class StuffModule {}
