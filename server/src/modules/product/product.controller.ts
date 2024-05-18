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
	ImageDto,
	ProductAllQueryDto,
	SearchProductDto,
	UpdateProductDto
} from './dto'
import { REGEX_FILE_TYPE_IMG } from '@/common/constants'
import { GetByIdParamsDto } from '@/common/dto'
import { FilesInterceptor } from '@nestjs/platform-express'

@ApiTags('Product')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

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

	@HttpCode(HttpStatus.OK)
	@Get('search')
	search(@Query() dto: SearchProductDto) {
		return this.productService.search(dto)
	}

	// * обсудить
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	getOne(@Param() { id }: GetByIdParamsDto) {
		return this.productService.getOne(id)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	getAll(@Query() query: ProductAllQueryDto) {
		return this.productService.getAll(query)
	}

	@HttpCode(HttpStatus.OK)
	@Put(':id')
	update(@Param() { id }: GetByIdParamsDto, @Body() dto: UpdateProductDto) {
		return this.productService.update(id, dto)
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete(':id')
	delete(@Param() { id }: GetByIdParamsDto) {
		return this.productService.delete(id)
	}

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

	@HttpCode(HttpStatus.NO_CONTENT)
	@Delete('album/:id')
	deleteFiles(@Body() dto: ImageDto, @Param() { id }: GetByIdParamsDto) {
		return this.productService.deleteImages(id, dto)
	}
}
