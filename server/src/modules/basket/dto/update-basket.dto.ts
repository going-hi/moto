import { CreateBasketDto } from './create-basket.dto'
import { PickType } from '@nestjs/swagger'

export class UpdateBasketDto extends PickType(CreateBasketDto, ['count']) {}
