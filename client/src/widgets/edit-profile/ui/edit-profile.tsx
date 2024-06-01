import { useState } from 'react'
import { editProfileSwitchItemsArr } from '../model'
import { EditProfilePasswordForm } from './@edit-password-form'
import { EditProfileProfileForm } from './@edit-profile-form'
import { EditProfileSwitch } from './@switch'

export const EditProfile = () => {
	const [switchOption, setSwitchOption] = useState(
		editProfileSwitchItemsArr[0].value
	)

	return (
		<div>
			<EditProfileSwitch
				value={switchOption}
				setValue={setSwitchOption}
			/>
			{switchOption === 'edit-profile' ? (
				<EditProfileProfileForm />
			) : (
				<EditProfilePasswordForm />
			)}
		</div>
	)
}
