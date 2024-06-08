import { ApiProperty } from '@nestjs/swagger'
import { IdsDto } from './ids.dto'
import { IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

export class FiltersIdsDto {
	@ApiProperty({ type: IdsDto })
	@IsOptional()
	@ValidateNested()
	@Type(() => IdsDto)
	filters?: IdsDto
}
