import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from '@/configs'
import { DatabaseModule } from '@/core/database/database.module'
import { AuthModule } from '@/auth/auth.module'
import { MailModule } from '@/mail/mail.module'
import { FileModule } from '@/core/file/file.module'
import { ProductModule } from '@/modules/product/product.module'
import { CharacteristicModule } from '@/modules/characteristic/characteristic.module'
import { OrderModule } from '@/modules/order/order.module'
import { BasketModule } from '@/modules/basket/basket.module'
import { FavouritesModule } from '@/modules/favourites/favourites.module'
import { RoleModule } from './modules/role/role.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { ReviewModule } from './modules/review/review.module'

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfigOptions),
		DatabaseModule,
		AuthModule,
		MailModule,
		FileModule,
		// * @/modules
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'static'),
			serveRoot: '/api/files'
		}),
		ProductModule,
		CharacteristicModule,
		OrderModule,
		BasketModule,
		FavouritesModule,
		RoleModule,
		ReviewModule
	]
})
export class AppModule {}
