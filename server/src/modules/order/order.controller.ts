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
	HttpStatus
} from '@nestjs/common'
import { OrderService } from './order.service'
import { CreateOrderDto, OrderAllQueryDto, OrderAllQueryDtoWithUser } from './dto'
import { ApiTags } from '@nestjs/swagger'
import { GetByIdParamsDto } from '@/common/dto'
import { AccessGuard } from '@/auth/guards'
import { User } from '@/common/decorators'
import { RolesAuthGuard } from '@/auth/guards/role.guard'
import { ERoles } from '@/common/enums'

@ApiTags('Orders')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('order')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@AccessGuard()
	@HttpCode(HttpStatus.CREATED)
	@Post()
	create(@User('id') userId: number, @Body() dto: CreateOrderDto) {
		return this.orderService.create(dto, userId)
	}

	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Get()
	findAllByUser(@User('id') userId: number, @Body() dto: OrderAllQueryDto) {
		return this.orderService.findAll({ ...dto, user: userId })
	}

	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOneByUser(@Param() { id }: GetByIdParamsDto, @User('id') userId: number) {
		return this.orderService.findOne(id, userId)
	}

	// * For admins
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.OK)
	@Get(':id/admin')
	findOne(@Param() { id }: GetByIdParamsDto) {
		return this.orderService.findOne(id)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.OK)
	@Get('admin')
	findAll(@Body() dto: OrderAllQueryDtoWithUser) {
		return this.orderService.findAll(dto)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	remove(@Param() { id }: GetByIdParamsDto) {
		return this.orderService.delete(id)
	}
}
