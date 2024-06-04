import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { RoleService } from './role.service'
import { ApiTags } from '@nestjs/swagger'
import { ERoles } from '@/common/enums'
import { RolesAuthGuard } from '@/auth/guards'
import { SetRoleDto } from './dto'

@ApiTags('Role')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('role')
export class RoleController {
	constructor(private readonly roleService: RoleService) {}

	@HttpCode(HttpStatus.OK)
	@RolesAuthGuard(ERoles.OWNER)
	@Post()
	setRoleUser(@Body() dto: SetRoleDto) {
		return this.roleService.setRoleUser(dto)
	}
}
