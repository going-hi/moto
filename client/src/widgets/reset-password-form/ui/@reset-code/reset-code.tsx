import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import { AuthButton, AuthInput, AuthModal } from '@/features/auth'
import {
	useResetCode,
	type TResetCode,
	useResetStore,
	ResetCodeSchema
} from '@/features/reset-password'
import { Typography } from '@/shared'

const { Text } = Typography

export const ResetCodeForm = () => {
	const { email, setEmail } = useResetStore()
	const { isPending, error, mutate } = useResetCode()

	const form = useForm<TResetCode>({
		resolver: zodResolver(ResetCodeSchema)
	})

	const { control, handleSubmit } = form

	const onSubmit = (data: TResetCode) => {
		mutate({ ...data, email })
	}

	useEffect(() => {
		return () => {
			setEmail(null)
		}
	}, [setEmail])

	return (
		<FormProvider {...form}>
			<AuthModal variant='small'>
				<form onSubmit={handleSubmit(onSubmit)} className='-mt-[10px]'>
					<Text className='mb-[20px]'>
						Введите код, который мы вам отправили на адрес <br />
						{email}
					</Text>
					<Controller
						name={'code'}
						control={control}
						render={({ field }) => (
							<AuthInput
								className='mb-[30px]'
								label='Введите код'
								placeholder='Код'
								required
								type='number'
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
