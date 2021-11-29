import { useState, useEffect } from 'react'
import BlogList from '../blogs/BlogList'
import Spinner from './Spinner'

const Home = () => {
	const [blogs, setBlogs] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('/blogs')
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data)
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}, [])

	return <div>{!loading ? <BlogList blogs={blogs} /> : <Spinner />}</div>
}

export default Home
