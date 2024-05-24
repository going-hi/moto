import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Typography } from '@/shared'
import { useResetEmail } from '../../libs/'
import { TResetEmail, ResetEmailSchema } from '../../model'
import { AuthButton } from '../@button'
import { AuthInput } from '../@input'
import { AuthModal } from '../@modal'

const { Text } = Typography

export const AuthResetEmail = () => {
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
