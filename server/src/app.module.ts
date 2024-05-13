import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from '@/configs'
import { DatabaseModule } from '@/core/database/database.module'
import { AuthModule } from '@/auth/auth.module'

@Module({
	imports: [ConfigModule.forRoot(EnvConfigOptions), DatabaseModule, AuthModule]
})
export class AppModule {}
