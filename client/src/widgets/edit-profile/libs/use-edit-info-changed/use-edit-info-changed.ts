import { useWatch } from 'react-hook-form'
import { useProfileStore } from '@/entities/profile'

export const useEditInfoChanged = () => {
	const fields = useWatch()
	const { profile } = useProfileStore()

	if (!profile) {
		return false
	}

	const fieldKeys = Object.keys(fields)

	if (!fieldKeys.length) {
		return false
	}

	for (let i = 0; i < fieldKeys.length; i++) {
		const key = fieldKeys[i]
		if (fields[key] && fields[key] !== profile[key]) {
			return true
		}
	}

	return false
}
