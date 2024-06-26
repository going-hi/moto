import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { AuthButton, AuthInput, AuthModal } from '@/features/auth-user'
import {
	useResetEmail,
	type TResetEmail,
	ResetEmailSchema
} from '@/features/reset-password'
import { Typography } from '@/shared'

const { Text } = Typography

export const ResetEmailForm = () => {
	const form = useForm<TResetEmail>({
		resolver: zodResolver(ResetEmailSchema)
	})
	const { control, handleSubmit } = form

	const { isPending, error, mutate } = useResetEmail()

	const onSubmit = (data: TResetEmail) => {
		mutate(data)
	}

	return (
		<FormProvider {...form}>
			<AuthModal variant='small'>
				<form className='-mt-[10px]' onSubmit={handleSubmit(onSubmit)}>
					<Text className='text-[16px] -tracking-2per mb-[30px]'>
						Введите ваш e-mail адрес, на который зарегистрирован
						аккаунт, и мы вышлем на него новый пароль
					</Text>
					<Controller
						name={'email'}
						control={control}
						render={({ field }) => (
							<AuthInput
								className='mb-[30px]'
								label='Введите почту'
								placeholder='Почта'
								required
								{...field}
							/>
						)}
					/>
					<AuthButton variant='continue' isPending={isPending} />
					{error?.message && (
						<Text className='text-red-700 mt-[5px]'>
							{error?.message}
						</Text>
					)}
				</form>
			</AuthModal>
		</FormProvider>
	)
}
