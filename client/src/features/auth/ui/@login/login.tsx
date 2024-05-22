import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Icon, Typography } from '@/shared'
import { useLogin } from '../../libs'
import { loginFieldsArr, LoginSchema, type TLogin } from '../../model'
import { AuthInput } from '../@input'
import { AuthModal } from '../@modal'

const { Text } = Typography

export const AuthLogin = () => {
	const navigate = useNavigate()

	const { mutate: loginMutation, isPending, error } = useLogin(navigate)

	const form = useForm<TLogin>({
		resolver: zodResolver(LoginSchema)
	})

	const { handleSubmit, control } = form

	const onSubmit = (data: TLogin) => {
		loginMutation(data)
	}

	return (
		<FormProvider {...form}>
			<AuthModal>
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
					<Button variant='primary'>
						{isPending ? (
							<Icon
								name='Loading'
								className='h-[20px] w-[20px] animate-spin-1000'
							/>
						) : (
							'ПРОДОЛЖИТЬ'
						)}
					</Button>
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
