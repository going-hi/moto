// product review order user

export const ownerAccess = [{ action: '*', resource: '*' }]

export const adminAccess = [
	{ action: [], resource: 'product' },
	{ action: [], resource: 'review' },
	{ action: [], resource: 'order' },
	{ action: [], resource: 'user', record: { role: 'user' } }
]
