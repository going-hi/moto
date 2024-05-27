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
	Patch,
	Query
} from '@nestjs/common'
import { OrderService } from './order.service'
import { CreateOrderDto, OrderAllQueryDto, OrderAllForUserQueryDto, UpdateStatusDto } from './dto'
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

	// * For admins
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.OK)
	@Get('admin')
	findAll(@Query() dto: OrderAllQueryDto) {
		return this.orderService.findAll(dto)
	}

	// * For admins
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.OK)
	@Get(':id/admin')
	findOne(@Param() { id }: GetByIdParamsDto) {
		return this.orderService.findOne(id)
	}

	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Get()
	findAllByUser(@User('id') userId: number, @Query() query: OrderAllForUserQueryDto) {
		return this.orderService.findAll({ ...query, user: userId })
	}

	@AccessGuard()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOneByUser(@Param() { id }: GetByIdParamsDto, @User('id') userId: number) {
		return this.orderService.findOne(id, userId)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.OK)
	@Patch(':id/status')
	updateStatus(@Param() { id }: GetByIdParamsDto, @Body() { status }: UpdateStatusDto) {
		return this.orderService.updateStatus(id, status)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	remove(@Param() { id }: GetByIdParamsDto) {
		return this.orderService.delete(id)
	}
}
