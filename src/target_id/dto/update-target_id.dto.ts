import { PartialType } from '@nestjs/mapped-types';
import { CreateTargetDto } from './create-target_id.dto';

export class UpdateTargetDto extends PartialType(CreateTargetDto) {}
