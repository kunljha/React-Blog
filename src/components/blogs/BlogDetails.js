import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Spinner from '../layout/Spinner'

const BlogDetails = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { data: blog, loading, error } = useFetch(`/blogs/${id}`)

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

	if (error) {
		return <div>{error}</div>
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
