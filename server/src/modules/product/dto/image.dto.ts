import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class ImageDto {
	@ApiProperty()
	@IsString({ each: true, message: 'Images должно быть массивом строк' })
	images: string[]
}
