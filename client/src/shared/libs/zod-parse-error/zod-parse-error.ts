import { toast } from 'react-toastify'
import { SafeParseReturnType, ZodType } from 'zod'

export class ZodParseError<Result> {
	private _result: SafeParseReturnType<unknown, Result> | null = null

	constructor(schema: ZodType, target: object) {
		this._result = schema.safeParse(target)
	}

	public result() {
		if (!this._result?.success) {
			let errMessage = 'Невалидные данные: '; // prettier-ignore
			;(this._result?.error.issues ?? []).forEach((i, index, arr) => {
				errMessage +=
					i.path.toString().replace(/,/, '-') +
					(index + 1 !== arr?.length ? ',' : '')
			})
			toast(errMessage)
			return null
		}

		return this._result.data
	}
}
