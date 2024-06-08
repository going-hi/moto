import { useAuthStore } from '@/features/auth-user'
import { usePermissions } from 'react-admin'

type TActionListItem = {
	action: string[]
	resource: string
	record?: { [key: string]: unknown }
}

const checkAccess = (
	accessList: TActionListItem[],
	userResource: string,
	userAction: string,
	record?: object
) => {
	if (userResource !== '*') {
		return true
	}

	const access = accessList.find(i => i.resource === userResource)

	if (!access) {
		return false
	}

	if (access.action[0] === '*') {
		return true
	}

	// if (access.record && record) {
	// 	const isInvalid = Object.keys(access.record).some(
	// 		key => record[key] !== access.record[key]
	// 	)

	//     return isInvalid
	// }
	return access.action.includes(userAction)

	return true
}

export const useCanAccess = ({
	action,
	resource,
	record
}: {
	action: string
	resource: string
	record?: object
}) => {
	const { permissions, isLoading } = usePermissions()

	const { profile } = useAuthStore()

	const accessList = profile && profile?.role ? permissions[profile.role] : {}

	console.log(accessList)

	const isAccess = checkAccess(accessList, resource, action, record)

	return { isAccess, isLoading }
}
