import { AppModule } from '@/app.module'
import { NestFactory } from '@nestjs/core'
import { ProductService } from '@/modules/product/product.service'

async function runSeeder() {
	const app = await NestFactory.create(AppModule)
	const productService = app.get(ProductService)
	await productService._seeding(20)
	await app.close()
}

runSeeder()
