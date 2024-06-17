import { Module, forwardRef } from '@nestjs/common'
import { CharacteristicService } from './characteristic.service'
import { CharacteristicController } from './characteristic.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CharacteristicEntity } from './entities'
import { ProductModule } from '../product/product.module'

import { DatabaseModule } from '@/core/database/database.module'

@Module({
	imports: [
		TypeOrmModule.forFeature([CharacteristicEntity]),
		forwardRef(() => ProductModule),
		DatabaseModule
	],
	controllers: [CharacteristicController],
	providers: [CharacteristicService],
	exports: [CharacteristicService]
})
export class CharacteristicModule {}
