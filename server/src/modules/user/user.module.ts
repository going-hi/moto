import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities'
import { FileModule } from '@/core/file/file.module'
import { MailModule } from '@/mail/mail.module'
import { HashModule } from '@/core/hash/hash.module'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity]), FileModule, MailModule, HashModule],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService]
})
export class UserModule {}
