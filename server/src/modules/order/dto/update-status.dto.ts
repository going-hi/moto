import { EOrderStatus } from '@/common/enums'
import { ApiProperty } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'

export class UpdateStatusDto {
	@ApiProperty()
	@IsEnum(EOrderStatus)
	status: EOrderStatus
}
