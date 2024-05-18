import { registerDecorator, ValidationOptions } from 'class-validator'

export function IsKeyArrayObject(validationOptions?: ValidationOptions) {
	return (object: any, propertyName: string) => {
		registerDecorator({
			name: 'IsKeyArrayObject',
			target: object.constructor,
			propertyName,
			constraints: [],
			options: validationOptions,
			validator: {
				validate(value: unknown) {
					console.log(value, 'fs')
					if (typeof value !== 'object') return false

					for (const key in value) {
						if (!Array.isArray(value[key])) return false

						value[key].forEach(item => {
							if (typeof item !== 'string') return false
						})
					}
					return true
				},
				defaultMessage: () => 'Объект фильтрации не валиден'
			}
		})
	}
}
