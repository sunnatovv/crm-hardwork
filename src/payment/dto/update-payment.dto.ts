import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  student_id?: Object;

  payment_last_date?: Date;

  payment_date?: Date;

  price?: string;

  total_attent?: number;
}
