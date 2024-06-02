import { useAppMutation } from '@/shared'
import { editInfo } from '../../api'
import type { TEditProfileInfo } from '../../model'

export const useEditInfo = () => {
	// const { setProfile } = useProfileStore()

	return useAppMutation<TEditProfileInfo, unknown>({
		mutationKey: ['user/profile/change'],
		mutationFn: editInfo,
		onSuccess: res => {
			console.log(res)
		}
	})
}
