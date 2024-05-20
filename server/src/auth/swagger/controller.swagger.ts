import { applyDecorators } from '@nestjs/common'
import {
	ApiBadRequestResponse,
	ApiNoContentResponse,
	ApiOkResponse,
	ApiOperation,
	ApiUnauthorizedResponse
} from '@nestjs/swagger'

export class AuthSwaggerController {
	static login() {
		return applyDecorators(
			ApiOperation({
				summary: 'Вход в профиль',
				description: 'Устанавливается токен в куки'
			}),
			ApiNoContentResponse({ description: 'Успешный вход' }),
			ApiBadRequestResponse({ status: 400 })
		)
	}

	static registration() {
		return applyDecorators(
			ApiOperation({ summary: 'Регистрация', description: 'Устанавливается токен в куки' }),
			ApiNoContentResponse({ description: 'Успешная регистрация' }),
			ApiBadRequestResponse({ status: 400 })
		)
	}

	static refresh() {
		return applyDecorators(
			ApiOperation({ summary: 'Обновление токенов' }),
			ApiUnauthorizedResponse(),
			ApiOkResponse()
		)
	}

	static changePassword() {
		return applyDecorators(
			ApiOperation({ summary: 'Смена пароля' }),
			ApiUnauthorizedResponse(),
			ApiNoContentResponse({ description: 'Успешная смена пароля' })
		)
	}

	static logout() {
		return applyDecorators(
			ApiOperation({ summary: 'Выход из профиля' }),
			ApiNoContentResponse({ description: 'Успешный выход из профиля' })
		)
	}

	static activeLink() {
		return applyDecorators(
			ApiOperation({ summary: 'Подтверждение почты', description: 'Для почты' })
		)
	}
}
