import { useState, useEffect } from 'react'

export function useFetch(url) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const abortFetch = new AbortController()

	useEffect(() => {
		fetch(url, { signal: abortFetch.signal })
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
				if (err.name === 'AbortError') {
					console.log('fetch aborted')
				} else {
					setError(err.message)
					setLoading(false)
				}
			})

		return () => {
			abortFetch.abort()
		}
	}, [url])

	return { data, loading, error }
}
