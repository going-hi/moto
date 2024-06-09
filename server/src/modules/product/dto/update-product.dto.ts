import { ApiProperty, OmitType } from '@nestjs/swagger'
import { CreateProductDto } from './create-product.dto'
import { UpdateInProductDto } from '@/modules/characteristic/dto'
import { IsArray, IsString, ValidateNested } from 'class-validator'
import { Exclude, Type } from 'class-transformer'

export class UpdateProductDto extends OmitType(CreateProductDto, ['characteristics', 'images']) {
	@ApiProperty()
	@ValidateNested({ each: true })
	@Type(() => UpdateInProductDto)
	characteristics: UpdateInProductDto[]

	@ApiProperty()
	@IsString({ each: true })
	@IsArray({ message: 'Список ссылок должен быть массивом строк' })
	urls: string[]

	// * File upload
	@ApiProperty({
		format: 'binary',
		required: true,
		description: 'file type should be jpeg | png | jpg | webp'
	})
	@Exclude()
	images: unknown
}
