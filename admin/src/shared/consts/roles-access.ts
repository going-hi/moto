// product review order user

export const rolesAccess = {
	owner: [{ action: ['*'], resource: '*' }],
	admin: [
		{ action: [], resource: 'product' },
		{ action: [], resource: 'review' },
		{ action: [], resource: 'order' },
		{ action: [], resource: 'user', record: { role: 'user' } }
	]
}
