import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from '@/configs'
import { DatabaseModule } from '@/core/database/database.module'
import { AuthModule } from '@/auth/auth.module'
import { MailModule } from '@/mail/mail.module'
import { FileModule } from '@/core/file/file.module'
import { ProductModule } from './modules/product/product.module'
import { CharacteristicModule } from './modules/characteristic/characteristic.module'

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfigOptions),
		DatabaseModule,
		AuthModule,
		MailModule,
		FileModule,
		// * @/modules
		ProductModule,
		CharacteristicModule
	]
})
export class AppModule {}
