export class Token {
	static getValue() {
		return localStorage.getItem('token')
	}

	static setValue(token: string) {
		localStorage.setItem('token', token)
	}
}
