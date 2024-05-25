import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import {
	AuthButton,
	AuthInput,
	useLogin,
	LoginSchema,
	type TLogin
} from '@/features/auth'
import { Typography } from '@/shared'
import { loginFieldsArr } from '../../model'

const { Text } = Typography

export const AuthLogin = () => {
	const { mutate: loginMutation, isPending, error } = useLogin()

	const form = useForm<TLogin>({
		resolver: zodResolver(LoginSchema)
	})

	const { handleSubmit, control } = form

	const onSubmit = (data: TLogin) => {
		loginMutation(data)
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-y-[30px] mb-[20px]'>
					{loginFieldsArr.map(i => (
						<Controller
							name={i.name}
							key={i.name}
							control={control}
							render={({ field }) => (
								<AuthInput
									{...i}
									{...field}
									isForgot={field.name === 'password'}
								/>
							)}
						/>
					))}
				</div>
				<AuthButton variant='continue' isPending={isPending} />
				{error?.message && (
					<Text className='text-red-700 mt-[5px]'>
						{error?.message}
					</Text>
				)}
			</form>
		</FormProvider>
	)
}
