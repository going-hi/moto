import type { NavigateFunction } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { login } from '../../api'
import type { TLogin } from '../../model'

export const useLogin = (navigate: NavigateFunction) =>
	useAppMutation<TLogin>({
		mutationFn: login,
		onSuccess: res => {
			console.log(res)
			navigate('/')
		}
	})
