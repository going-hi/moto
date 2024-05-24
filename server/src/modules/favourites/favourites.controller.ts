import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
	HttpCode,
	HttpStatus,
	Query
} from '@nestjs/common'
import { FavouritesService } from './favourites.service'
import { CreateFavouritesDto, FavouritesAllQueryDtoForUser } from './dto'
import { ApiTags } from '@nestjs/swagger'
import { GetByIdParamsDto } from '@/common/dto'
import { AccessGuard } from '@/auth/guards'
import { User } from '@/common/decorators'

@AccessGuard()
@ApiTags('favourites')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('favourites')
export class FavouritesController {
	constructor(private readonly favouritesService: FavouritesService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post()
	create(@User('id') userId: number, @Body() dto: CreateFavouritesDto) {
		return this.favouritesService.create(userId, dto)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@User('id') userId: number, @Query() query: FavouritesAllQueryDtoForUser) {
		return this.favouritesService.findAll({ ...query, user: userId })
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@User('id') userId: number, @Param() { id }: GetByIdParamsDto) {
		return this.favouritesService.findOne(id, userId)
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	delete(@User('id') userId: number, @Param() { id }: GetByIdParamsDto) {
		return this.favouritesService.delete(id, userId)
	}
}
