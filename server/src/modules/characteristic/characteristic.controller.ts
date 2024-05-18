import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	ValidationPipe,
	UsePipes,
	Put,
	Query,
	HttpCode,
	HttpStatus
} from '@nestjs/common'
import { CharacteristicService } from './characteristic.service'
import {
	UpdateCharacteristicDto,
	CreateCharacteristicWithProductDto,
	CharacteristicAllQueryDto
} from './dto'
import { GetByIdParamsDto } from '@/common/dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('characteristic')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('characteristic')
export class CharacteristicController {
	constructor(private readonly characteristicService: CharacteristicService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post()
	create(@Body() dto: CreateCharacteristicWithProductDto) {
		return this.characteristicService.create(dto)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@Query() query: CharacteristicAllQueryDto) {
		return this.characteristicService.findAll(query)
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param() { id }: GetByIdParamsDto) {
		return this.characteristicService.findOne(id)
	}

	@HttpCode(HttpStatus.OK)
	@Put(':id')
	update(@Param() { id }: GetByIdParamsDto, @Body() dto: UpdateCharacteristicDto) {
		return this.characteristicService.update(id, dto)
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	delete(@Param() { id }: GetByIdParamsDto) {
		return this.characteristicService.delete(id)
	}
}
