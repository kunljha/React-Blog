import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../layout/Spinner'

const BlogDetails = () => {
	const [blog, setBlog] = useState(null)
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		fetch(`/blogs/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setBlog(data)
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}, [])

	if (loading) {
		return <Spinner />
	}

	return blog ? (
		<div className='blog-item'>
			<h3>{blog.title}</h3>
			<p>{blog.author}</p>
			<p>{blog.body}</p>
		</div>
	) : (
		<p>Blog does not exists!</p>
	)
}

export default BlogDetails
