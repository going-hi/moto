import { ApiProperty } from '@nestjs/swagger'
import { CreateCharacteristicDto } from './create-characteristic.dto'
import { IsInt } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateInProductDto extends CreateCharacteristicDto {
	@ApiProperty()
	@IsInt({ message: 'Id должен быть числом' })
	@Type(() => Number)
	id: number
}
