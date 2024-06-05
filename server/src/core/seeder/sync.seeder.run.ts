import { AppModule } from '@/app.module'
import { NestFactory } from '@nestjs/core'
import { UserService } from '@/modules/user/user.service'

async function runSyncSeeder() {
	const app = await NestFactory.create(AppModule)
	const userService = app.get(UserService)
	const password = 'P34A7Gfn'
	const email = 'owner2024dd@gmail.com'
	await userService._seedingOwner(email, password)
	await app.close()
	console.log(`Успешно`)
}

runSyncSeeder()
