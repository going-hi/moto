import {
	Body,
	ClassSerializerInterceptor,
	Controller,
	Delete,
	FileTypeValidator,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseFilePipe,
	Post,
	Put,
	Query,
	UploadedFile,
	UseInterceptors,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { ApiTags } from '@nestjs/swagger'
import { AccessGuard, RolesAuthGuard } from '@/auth/guards'
import { ERoles } from '@/common/enums'
import { User } from '@/common/decorators'
import { GetByIdParamsDto } from '@/common/dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { UpdateUserDto, UserAllQueryDto } from './dto'
import { REGEX_FILE_TYPE_IMG } from '@/common/constants'

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('User')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.OK)
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@Get()
	getAll(@Query() query: UserAllQueryDto, @User('role') role: ERoles) {
		return this.userService.getAll(query, role)
	}

	@HttpCode(HttpStatus.OK)
	@AccessGuard()
	@Get('profile')
	getOne(@User('id') userId: number) {
		return this.userService.profile(userId)
	}

	@HttpCode(HttpStatus.OK)
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@Get(':id')
	getOneAdmin(@Param() { id }: GetByIdParamsDto) {
		return this.userService.profile(id)
	}

	@HttpCode(HttpStatus.OK)
	@AccessGuard()
	@Put()
	update(@User('id') userId: number, @Body() dto: UpdateUserDto) {
		return this.userService.update(userId, dto)
	}
	@HttpCode(HttpStatus.OK)
	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@Put(':id')
	updateById(
		@Param() { id }: GetByIdParamsDto,
		@Body() dto: UpdateUserDto,
		@User('role') role: ERoles
	) {
		return this.userService.updateById(id, dto, role)
	}

	@HttpCode(HttpStatus.OK)
	@AccessGuard()
	@UseInterceptors(FileInterceptor('avatar'))
	@Post('avatar')
	uploadAvatar(
		@UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: REGEX_FILE_TYPE_IMG })]
			})
		)
		file: Express.Multer.File,
		@User('id') userId: number
	) {
		return this.userService.updateAvatar(userId, file)
	}

	@HttpCode(HttpStatus.OK)
	@AccessGuard()
	@Delete('avatar')
	deleteAvatar(@User('id') userId: number) {
		return this.userService.updateAvatar(userId, null)
	}
}
