import { GetByIdParamsDto } from '@/common/dto'
import {
	Controller,
	Delete,
	Param,
	UsePipes,
	ValidationPipe,
	Post,
	Get,
	Put,
	Body,
	HttpCode,
	HttpStatus,
	UseInterceptors,
	ParseFilePipe,
	FileTypeValidator,
	UploadedFile,
	Query
} from '@nestjs/common'
import { ApiTags, ApiConsumes } from '@nestjs/swagger'
import { ReviewService } from './review.service'
import { CreateReviewDto, DeleteManyReviewsDto, ReviewAllDto, UpdateReviewDto } from './dto'
import { RolesAuthGuard } from '@/auth/guards'
import { ERoles } from '@/common/enums'
import { FileInterceptor } from '@nestjs/platform-express'
import { REGEX_FILE_TYPE_IMG } from '@/common/constants'

@ApiTags('review')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@RolesAuthGuard(ERoles.OWNER, ERoles.ADMIN)
	@ApiConsumes('multipart/form-data')
	@HttpCode(HttpStatus.CREATED)
	@UseInterceptors(FileInterceptor('file'))
	@Post()
	create(
		@Body() dto: CreateReviewDto,
		@UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: REGEX_FILE_TYPE_IMG })],
				fileIsRequired: false
			})
		)
		file?: Express.Multer.File
	) {
		return this.reviewService.create(dto, file)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	getAll(@Query() query: ReviewAllDto) {
		return this.reviewService.getAll(query)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete('many')
	deleteMany(@Query() query: DeleteManyReviewsDto) {
		return this.reviewService.deleteMany(query)
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	getOne(@Param() { id }: GetByIdParamsDto) {
		return this.reviewService.getOne(id)
	}

	@RolesAuthGuard(ERoles.OWNER, ERoles.ADMIN)
	@HttpCode(HttpStatus.OK)
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FileInterceptor('file'))
	@Put(':id')
	update(
		@Param() { id }: GetByIdParamsDto,
		@Body() dto: UpdateReviewDto,
		@UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: REGEX_FILE_TYPE_IMG })],
				fileIsRequired: false
			})
		)
		file?: Express.Multer.File
	) {
		return this.reviewService.update(id, dto, file)
	}

	@RolesAuthGuard(ERoles.OWNER, ERoles.ADMIN)
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	delete(@Param() { id }: GetByIdParamsDto) {
		return this.reviewService.delete(id)
	}
}
