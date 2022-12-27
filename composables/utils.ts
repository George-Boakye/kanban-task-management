export function slug(text: String) {
	if (text) {
		text = text.replace(/^\s+|\s+$/g, '') // trim
		text = text.toLowerCase()

		// remove accents, swap ñ for n, etc
		let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
		let to = 'aaaaeeeeiiiioooouuuunc------'
		for (let i = 0, l = from.length; i < l; i++) {
			text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
		}

		return text
			.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
			.replace(/\s+/g, '-') // collapse whitespace and replace by -
			.replace(/-+/g, '-') // collapse dashes
	}

	return text
}

export function title(texts: String | String[]) {
	if (typeof texts === 'string') {
		return texts
			.replace('-', ' ')
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}

	return texts
}
