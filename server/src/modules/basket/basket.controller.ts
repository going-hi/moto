import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
	HttpCode,
	HttpStatus,
	Query
} from '@nestjs/common'
import { BasketService } from './basket.service'
import { CreateBasketDto } from './dto/create-basket.dto'
import { UpdateBasketDto } from './dto/update-basket.dto'
import { ApiTags } from '@nestjs/swagger'
import { AccessGuard } from '@/auth/guards'
import { User } from '@/common/decorators'
import { GetByIdParamsDto } from '@/common/dto'
import { BasketAllForUserQueryDto, BasketAllQueryDto } from './dto'
import { RolesAuthGuard } from '@/auth/guards/role.guard'
import { ERoles } from '@/common/enums'

@ApiTags('Baskets')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('basket')
export class BasketController {
	constructor(private readonly basketService: BasketService) {}

	@HttpCode(HttpStatus.CREATED)
	@AccessGuard()
	@Post()
	create(@User('id') userId: number, @Body() dto: CreateBasketDto) {
		return this.basketService.create(userId, dto)
	}

	// * for admin
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Get('admin')
	findAllForAdmin(@Query() query: BasketAllQueryDto) {
		return this.basketService.findAll(query)
	}

	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@User('id') userId: number, @Query() query: BasketAllForUserQueryDto) {
		return this.basketService.findAll({ ...query, user: userId })
	}

	// * for admin
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.OK)
	@Get(':id/admin')
	findOneForAdmin(@Param() { id }: GetByIdParamsDto) {
		return this.basketService.findOne(id)
	}

	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@User('id') userId: number, @Param() { id }: GetByIdParamsDto) {
		return this.basketService.findOne(id, userId)
	}

	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Patch(':id')
	update(
		@User('id') userId: number,
		@Param() { id }: GetByIdParamsDto,
		@Body() updateBasketDto: UpdateBasketDto
	) {
		return this.basketService.update(id, updateBasketDto, userId)
	}

	@AccessGuard()
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	delete(@User('id') userId: number, @Param() { id }: GetByIdParamsDto) {
		return this.basketService.delete(id, userId)
	}
}
