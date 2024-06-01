import { $api } from '@/shared'

export const logout = () => $api.get('/logout')
