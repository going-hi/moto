import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import { Typography } from '@/shared'
import { useLogin } from '../../libs'
import { loginFieldsArr, LoginSchema, type TLogin } from '../../model'
import { AuthButton } from '../@button'
import { AuthInput } from '../@input'

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
								<AuthInput {...i} {...field} />
							)}
						/>
					))}
				</div>
				<AuthButton variant='login' isPending={isPending} />
				{error?.message && (
					<Text className='text-red-700 mt-[5px]'>
						{error?.message}
					</Text>
				)}
			</form>
		</FormProvider>
	)
}
