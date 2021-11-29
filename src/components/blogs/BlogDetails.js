import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from '../layout/Spinner'

const BlogDetails = () => {
	const [blog, setBlog] = useState(null)
	const [loading, setLoading] = useState(true)

	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		fetch(`/blogs/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setBlog(data)
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}, [id])

	const handleDelete = () => {
		fetch(`/blogs/${id}`, {
			method: 'DELETE',
		})
			.then(() => navigate('/', { replace: true }))
			.catch((err) => console.log(err))
	}

	if (loading) {
		return <Spinner />
	}

	return blog ? (
		<div className='blog-item'>
			<h3>{blog.title}</h3>
			<p>{blog.author}</p>
			<p>{blog.body}</p>
			<i
				className='fas fa-trash'
				style={{ cursor: 'pointer' }}
				onClick={handleDelete}
			></i>
		</div>
	) : (
		<p>Blog does not exists!</p>
	)
}

export default BlogDetails
