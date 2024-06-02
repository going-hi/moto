import { useNavigate } from 'react-router-dom'
import { TProfile, useProfileStore } from '@/entities/profile'
import { useAppMutation } from '@/shared'
import { editInfo } from '../../api'
import type { TEditProfileInfo } from '../../model'

export const useEditInfo = () => {
	const { setProfile } = useProfileStore()
	const navigate = useNavigate()

	return useAppMutation<TEditProfileInfo, TProfile | null>({
		mutationKey: ['user/profile/change'],
		mutationFn: editInfo,
		onSuccess: data => {
			if (data) {
				setProfile(data)
				navigate('/profile')
			}
		}
	})
}
