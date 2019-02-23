import { useState, useEffect } from 'react'

export const useStorageString = (key = 'key', initialValue = '') => {
	const initial = () => window.localStorage.getItem(key) || initialValue
	const [value, setValue] = useState(initial)
	useEffect(() => window.localStorage.setItem(key, value), [value])

	return [value, setValue]
}
