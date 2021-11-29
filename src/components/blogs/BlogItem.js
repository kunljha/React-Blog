import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogItem = ({ blog }) => {
	return (
		<div className='blog-item'>
			<Link to={`/blogs/${blog.id}`}>
				<h4>{blog.title}</h4>
			</Link>
			<p>{blog.author}</p>
			<i className='fas fa-trash' style={{ cursor: 'pointer' }}></i>
		</div>
	)
}

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
}

export default BlogItem
