import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString } from 'class-validator'
import { Exclude, Type } from 'class-transformer'

export class CreateReviewDto {
	@ApiProperty()
	@IsString({ message: 'Текст должен быть строкой' })
	text: string

	@ApiProperty()
	@IsString({ message: 'Имя должно быть строкой' })
	name: string

	@ApiProperty()
	@Type(() => Number)
	@IsInt({ message: 'Id продукта должно быть числом' })
	product: number

	// * File upload
	@ApiProperty({
		format: 'binary',
		// required: true,
		description: 'file type should be jpeg | png | jpg | webp'
	})
	@Exclude()
	file: unknown
}
