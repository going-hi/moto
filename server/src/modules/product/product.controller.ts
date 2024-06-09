import {
	Body,
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
	UploadedFiles,
	UseInterceptors,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ProductService } from './product.service'
import { ApiConsumes, ApiTags } from '@nestjs/swagger'
import {
	CreateProductDto,
	FilterDto,
	GetManyProductsDto,
	ImageDto,
	ProductAllQueryDto,
	SearchProductDto,
	UpdateProductDto,
	DeleteManyProductsDto
} from './dto'
import { REGEX_FILE_TYPE_IMG } from '@/common/constants'
import { GetByIdParamsDto } from '@/common/dto'
import { FilesInterceptor } from '@nestjs/platform-express'
import { RolesAuthGuard, UserNoRequiredAuthGuard } from '@/auth/guards'
import { User } from '@/common/decorators'
import { JwtPayload } from '@/auth/dto'
import { ERoles } from '@/common/enums'

@ApiTags('Product')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@ApiConsumes('multipart/form-data')
	@HttpCode(HttpStatus.CREATED)
	@UseInterceptors(FilesInterceptor('images'))
	@Post()
	create(
		@Body() dto: CreateProductDto,
		@UploadedFiles(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: REGEX_FILE_TYPE_IMG })],
				fileIsRequired: true
			})
		)
		files: Express.Multer.File[]
	) {
		return this.productService.create(dto, files)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@ApiConsumes('multipart/form-data')
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(FilesInterceptor('newImages'))
	@Put(':id')
	update(
		@Param() { id }: GetByIdParamsDto,
		@Body() dto: UpdateProductDto,
		@UploadedFiles(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: REGEX_FILE_TYPE_IMG })],
				fileIsRequired: false
			})
		)
		files?: Express.Multer.File[]
	) {
		return this.productService.update(id, dto, files)
	}

	@Get('filter')
	getFilter(@Query() query: FilterDto) {
		return this.productService.getFilter(query)
	}

	@HttpCode(HttpStatus.OK)
	@Get('search')
	search(@Query() dto: SearchProductDto) {
		return this.productService.search(dto)
	}

	@HttpCode(HttpStatus.OK)
	@Get('many')
	getMany(@Query() query: GetManyProductsDto) {
		return this.productService.getMany(query)
	}

	// * обсудить
	@UserNoRequiredAuthGuard()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	getOne(@Param() { id }: GetByIdParamsDto, @User() user?: JwtPayload | undefined) {
		return this.productService.getOne(id, user)
	}

	@UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
	@UserNoRequiredAuthGuard()
	@HttpCode(HttpStatus.OK)
	@Get()
	getAll(@Query() query: ProductAllQueryDto, @User() user?: JwtPayload | undefined) {
		return this.productService.getAll(query, user)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete('many')
	deleteMany(@Query() query: DeleteManyProductsDto) {
		return this.productService.deleteMany(query)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	delete(@Param() { id }: GetByIdParamsDto) {
		return this.productService.delete(id)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@ApiConsumes('multipart/form-data')
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(FilesInterceptor('images'))
	@Post('album/:id')
	addFiles(
		@Param() { id }: GetByIdParamsDto,
		@UploadedFiles(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: REGEX_FILE_TYPE_IMG })],
				fileIsRequired: true
			})
		)
		files: Express.Multer.File[]
	) {
		return this.productService.addImages(id, files)
	}

	@RolesAuthGuard(ERoles.ADMIN, ERoles.OWNER)
	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete('album/:id')
	deleteFiles(@Body() dto: ImageDto, @Param() { id }: GetByIdParamsDto) {
		return this.productService.deleteImages(id, dto)
	}
}
