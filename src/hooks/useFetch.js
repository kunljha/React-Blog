import { useState, useEffect } from 'react'

export function useFetch(url) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error('could get the resource!')
				}
				return res.json()
			})
			.then((data) => {
				setData(data)
				setLoading(false)
				setError(null)
			})
			.catch((err) => {
				setError(err.message)
			})
	}, [url])

	return { data, loading, error }
}
