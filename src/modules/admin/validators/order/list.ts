import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { PaginationValidator } from 'modules/common/validators/pagination';

export class OrderListValidator extends PaginationValidator {
  @IsString()
  @IsOptional()
  @IsIn(['id', 'description', 'value' , 'quantity', 'createdDate', 'updatedDate'])
  @ApiProperty({ required: false, enum: ['id', 'description', 'value', 'quantity', 'createdDate', 'updatedDate'] })
  public orderBy: string;
}
